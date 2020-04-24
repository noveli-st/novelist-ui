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
                            <select id="selectMentionTemplates" class="custom-select" v-model="selectMention">
                                <option class="text-muted" value='mention' selected>choose one...</option>
                                <option value="character">character</option>
                                <option value="object">object</option>
                                <option value="note">note</option>
                            </select>
                        </div>
                        <button id="mentionHelpButton" class="btn btn-link" v-on:click="mentionHelpAlertOn" v-b-tooltip.hover title="Show mentions description" :disabled="isMentionHelpAlert">
                            <font-awesome-icon icon="question-circle" size="lg"></font-awesome-icon>
                        </button>
                    </div>
                    <button class="btn btn-success btn-block" type="button" v-on:click="addMention" :disabled="selectMention == 'mention'">
                        <font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Add {{ selectMention }}
                    </button>
                </div>
            </div>
            <b-alert v-model="isMentionHelpAlert" dismissible class="border-0">
                <template v-slot:dismiss class="position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></template>
                <div class="h6 font-weight-bold"><font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>Type of mentions</div>
                <hr class="my-2">
                <dl>
                    <dt>Character</dt>
                    <dd class="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil voluptates amet culpa beatae, ipsam eius fuga suscipit accusamus aut tempora maxime exercitationem ea sunt quae facilis dolorum dolore soluta.</dd>
                    <dt>Object</dt>
                    <dd class="ml-3">Epsam eius fuga suscipit accusamus aut tempora maxime exercitationem ea sunt quae facilis dolorum dolore soluta.</dd>
                    <dt>Note</dt>
                    <dd class="ml-3">Voluptatem nihil voluptates amet culpa beatae, ipsam eius fuga suscipit accusamus aut tempora maxime exercitationem ea sunt quae facilis dolorum dolore soluta.</dd>
                </dl>
            </b-alert>
            <hr class="border-top">
            <footer class="clearfix">
                <button class="btn btn-primary float-right" type="submit"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save all changes</button>
            </footer>
        </div>
</template>

<script>
	export default {
        name: 'EditBookMentions',
        data() {
            return {
                selectMention: 'mention',
                isMentionHelpAlert: false
            }
        },
        methods: {
            addMention(){
                console.log('add mension')
                // here is need add script for mentions adding
                this.selectMention = "null"
            },
            mentionHelpAlertOn(){
                this.isMentionHelpAlert = true
                this.$root.$emit('bv::hide::tooltip', 'mentionHelpButton')
            }
        }
	}
</script>