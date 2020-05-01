<template>
    <div>
        <header>
            <div class="h2 mb-4" role="heading" aria-level="2">Book mentions</div>
        </header>
        <div class="row justify-content-center">
            <div class="col-sm-8 col-md-6 mb-3">
                <div class="d-flex bd-highlight mb-2">
                    <div class="pr-2 bd-highlight">
                        <label class="col-form-label form-control-label text-right" for="selectMentionTemplates">Mention</label>
                    </div>
                    <div class="flex-grow-1 bd-highlight">
                        <select
                            id="selectMentionTemplates" class="custom-select"
                            v-model="selectedMentionId"
                            v-on:change="setSelectedMentionName"
                        >
                            <option value=0 class="d-none" selected>choose one...</option>
                            <option
                                v-for="mention in $parent.mentionTypes"
                                v-bind:key="mention.id"
                                v-bind:value="mention.id"
                            >
                                {{ mention.name }}
                            </option>
                        </select>
                    </div>
                    <button id="mentionHelpButton" class="btn btn-link" v-on:click="mentionHelpAlertOn" v-b-tooltip.hover title="Show mentions description" :disabled="isMentionHelpAlert">
                        <font-awesome-icon icon="question-circle" size="lg"></font-awesome-icon>
                    </button>
                </div>
                <button class="btn btn-success btn-block" type="button" v-on:click="addMention" :disabled="selectedMentionId === 0">
                    <font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Add <span class="text-lowercase">{{ selectedMentionName }}</span>
                </button>
            </div>
        </div>
        <!-- {{ $parent.mentionTypes.find(selected => selected.id === selectedMentionId) }} -->
        <b-alert v-model="isMentionHelpAlert" dismissible class="border-0">
            <template v-slot:dismiss class="position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></template>
            <div class="h6 font-weight-bold"><font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>Type of mentions</div>
            <hr class="my-2">
            <dl>
                <div v-for="mention in $parent.mentionTypes" v-bind:key="mention.id">
                    <dt>{{ mention.name }}</dt>
                    <dd class="ml-3">{{ mention.description }}</dd>
                </div>
            </dl>
        </b-alert>
        <div class="accordion">
            <b-card no-body v-for="mention in $parent.book.mentions" v-bind:key="mention.id">
                <b-card-header header-tag="header" role="tab" class="d-flex flex-column flex-md-row align-items-md-center">
                    <div class="h6 mb-0" role="heading" aria-level="3">
                        <template v-if="!mention.title">
                            <font-awesome-icon icon="exclamation-triangle" class="mr-2 text-warning"></font-awesome-icon>Nameless mention
                        </template>
                        <template v-else>
                            {{ mention.title }}
                        </template>
                    </div>
                    <div class="ml-md-auto d-flex d-md-inline-flex">
                        <b-button v-b-toggle="`accordion-${mention.id}-edit`" class="text-primary" variant="link" v-b-tooltip.hover title="Edit chapter">
                            <font-awesome-icon icon="edit"></font-awesome-icon>
                        </b-button>
                        <b-button v-b-toggle="`accordion-${mention.id}-delete`" class="ml-auto ml-md-3 text-danger" variant="link" v-b-tooltip.hover title="Delete chapter">
                            <font-awesome-icon icon="trash"></font-awesome-icon>
                        </b-button>
                    </div>
                </b-card-header>
                <b-collapse v-bind:id="`accordion-${mention.id}-edit`" accordion="accordion" role="tabpanel">
                    <b-card-body>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputMentionKey-2">Key words</label>
                            <div class="col-lg-9">
                                <input-keywords
                                    v-bind:id="`inputMentionKeywords-${mention.id}`"
                                    class="form-control"
                                    type="text"
                                    v-model="mention.keywords"
                                ></input-keywords>
                                <small v-bind:id="`descriptionMentionKeywords-${mention.id}`" class="form-text text-muted">Enter key words separated by commas.</small>
                                <small class="form-text text-info"><font-awesome-icon icon="exclamation-circle"></font-awesome-icon> Keywords are pointers in the book that open a mention. Keywords can be any word or words related to the mention.</small> 
                            </div>
                                <!-- {{ mention.keywords}} -->
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" v-bind:for="`inputMentionTitle-${mention.id}`">Title</label>
                            <div class="col-lg-9">
                                <input v-bind:id="`inputMentionTitle-${mention.id}`" class="form-control" v-model="mention.title" placeholder="Mention title" type="text">
                            </div>
                        </div>
                        <div class="form-group row" v-if="mention.image!=null">
                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" v-bind:for="`fileMentionImage-${mention.id}`">Image</label>
                            <div class="col-lg-9">
                                <div class="custom-file">
                                    <input v-bind:id="`fileMentionImage-${mention.id}`" class="custom-file-input" type="file" v-bind:aria-describedby="`descriptionMentionImage-${mention.id}`">
                                    <label class="custom-file-label text-truncate" v-bind:for="`fileMentionImage-${mention.id}`">Choose file</label>
                                </div>
                                <small v-bind:id="`descriptionMentionImage-${mention.id}`" class="figure-caption">The loaded image should not be less than 1024 px in width or height. Do not upload small images!</small>
                                <!-- <figure class="figure mb-0">
                                    <img class="p-0 border-0 figure-img mw-100 rounded shadow-sm" style="max-height:240px" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 320' fill='%23e9ecef'%3E%3Ctitle%3EDefault user profile background%3C/title%3E%3Crect class='cls-1' width='320' height='320'%3E%3C/rect%3E%3C/svg%3E%0A">
                                </figure> -->
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" v-bind:for="`textareaMentionDescription-${mention.id}`">Description</label>
                            <div class="col-lg-9">
                                <textarea v-bind:id="`textareaMentionDescription-${mention.id}`" v-model.lazy="mention.description" class="form-control" rows="4" maxlength="2048"></textarea>
                            </div>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-primary" type="submit"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save changes</button>
                        </div>
                    </b-card-body>
                </b-collapse>
                <b-collapse v-bind:id="`accordion-${mention.id}-delete`" accordion="accordion" role="tabpanel">
                    <b-card-body>
                        <div class="alert alert-danger border-0">
                            <div class="h6 font-weight-bold"><font-awesome-icon icon="exclamation-circle" size="lg" class="mr-3"></font-awesome-icon>Confirmation alert</div>
                            <hr class="my-2">
                            Delete will be lost here all your data. Are you sure to delete?
                        </div>
                        <div class="text-right">
                            <button class="btn btn-danger" type="button"><font-awesome-icon icon="trash" class="mr-2"></font-awesome-icon>Yes! Delete</button>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            {{ $parent.book.mentions }}
        </div>

        <hr class="border-top">
        <footer class="clearfix">
            <button class="btn btn-primary float-right" type="submit"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save all changes</button>
        </footer>
    </div>
</template>

<script>
    import client from 'api-client'
    import InputKeywords from '../../../components/assets/InputKeywords'

	export default {
        name: 'EditBookMentions',
        data() {
            return {
                isMentionHelpAlert: false,
                selectedMentionId: 0,
                selectedMentionName: 'Mention'

            }
        },
        components: {
            InputKeywords
        },
        methods: {
            async addMention(){
                let template = this.$parent.mentionTemplates.find(selected => selected.typeId === this.selectedMentionId)
                const mention = await client.createMention(template)
                this.$parent.book.mentions.push(mention)
                // console.log('add mension')
                // console.log(this.$parent.book.mentions)
                // console.log(this.selectedMentionId)
                // console.log(this.$parent.mentionTemplates.find(selected => selected.typeId === this.selectedMentionId))
                this.selectedMentionId = 0
                this.selectedMentionName = 'Mention'
            },
            mentionHelpAlertOn(){
                this.isMentionHelpAlert = true
                this.$root.$emit('bv::hide::tooltip', 'mentionHelpButton')
            },
            setSelectedMentionName(){
                this.selectedMentionName = this.$parent.mentionTypes.find(selected => selected.id === this.selectedMentionId).name
            }
        }
	}
</script>
