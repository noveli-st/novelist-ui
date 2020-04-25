<template>
    <div>
        <header>
            <div class="h2 mb-4" role="heading" aria-level="2">Edit content</div>
        </header>
        <div class="row justify-content-center">
            <div class="col-sm-8 col-md-6 mb-3">
                <button class="btn btn-success btn-block" type="button"><font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Add <span class="text-lowercase">{{ chapterTypeName }}</span></button>
            </div>
        </div>
        <b-alert show dismissible class="border-0">
            <template v-slot:dismiss class="position-absolute">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </template>
            <div class="h6 font-weight-bold"><font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>Recomendation</div>
            <hr class="my-2">
            <ul>
                <li><b>Do not publish the entire book</b> - if you've never done it before!</li>
                <li><b>Do not publish the entire book</b> - even though it's completed!</li>
                <li><b>Do not publish the entire book</b> - even if you're dying to share it!</li>
                <li><b>Do not publish the entire book</b> - especially when it's paid!</li>
            </ul>
            Reveal chapters gradually, one by one, no more than one chapter per day. This also applied to the translated books.
        </b-alert>
        <div class="accordion">
            <b-card no-body v-for="chapter in orderChapters" v-bind:key="chapter.order">
                <b-card-header header-tag="header" role="tab" class="d-flex flex-column flex-md-row align-items-md-center">
                    <div class="h6 mb-0" role="heading" aria-level="3">{{ chapter.title }}</div>
                    <div class="ml-md-auto d-flex d-md-inline-flex">
                        <b-button v-b-toggle="`accordion-${chapter.id}-edit`" class="text-primary" variant="link" v-b-tooltip.hover title="Edit chapter">
                            <font-awesome-icon icon="edit"></font-awesome-icon>
                        </b-button>
                        <b-button v-b-toggle="`accordion-${chapter.id}-settings`" class="text-primary" variant="link" v-b-tooltip.hover title="Chapter settings">
                            <font-awesome-icon icon="cog"></font-awesome-icon>
                        </b-button>
                        <b-button v-b-toggle="`accordion-${chapter.id}-delete`" class="ml-auto ml-md-3 text-danger" variant="link" v-b-tooltip.hover title="Delete chapter">
                            <font-awesome-icon icon="trash"></font-awesome-icon>
                        </b-button>
                    </div>
                </b-card-header>
                <b-collapse v-bind:id="`accordion-${chapter.id}-edit`" accordion="accordion" role="tabpanel">
                    <b-card-body>
                        <cmp-editor
                            v-bind:content="sectionContentTMP"
                            v-on:updateContent="sectionContentTMP = $event"
                        ></cmp-editor>
                    </b-card-body>
                </b-collapse>
                <b-collapse v-bind:id="`accordion-${chapter.id}-settings`" accordion="accordion" role="tabpanel">
                    <b-card-body>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" v-bind:for="`inputChapterTitile-${chapter.id}`">{{ chapterTypeName }} title</label>
                            <div class="col-lg-9">
                                <input v-bind:id="`inputChapterTitile-${chapter.id}`" class="form-control" type="text" v-bind:value="chapter.title">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" v-bind:for="`textareaAnnotation-${chapter.id}`">Annotation</label>
                            <div class="col-lg-9">
                                <textarea v-bins:id="`textareaAnnotation-${chapter.id}`" class="form-control" rows="2" maxlength="128" v-bind:aria-describedby="`descriptionAnnotation-${chapter.id}`" v-bind:value="chapter.annotation"></textarea>
                                <small v-bind:id="`descriptionAnnotation-${chapter.id}`" class="form-text text-muted">Short about the chapter.</small>
                            </div>
                        </div>
                        <div class="px-3 pt-3 border rounded">
                            <h4 class="h5">Publish settings</h4>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label text-lg-right" v-bind:for="`selectVisibility-${chapter.id}`">Visibility</label>
                                <div class="col-lg-9">
                                    <select v-bind:id="`selectVisibility-${chapter.id}`" class="custom-select" v-model="chapter.visibility">
                                        <option value="publiс" v-bind:selected="chapter.visibility == 'publiс'">Public</option>
                                        <option value="private" v-bind:selected="chapter.visibility == 'private'">Private</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
                <b-collapse v-bind:id="`accordion-${chapter.id}-delete`" accordion="accordion" role="tabpanel">
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
        </div>
        <hr class="border-top">
        <div class="clearfix">
            <button id="buttonSaveMention" class="btn btn-primary float-right" type="button"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save all changes</button>
        </div>
    </div>
</template>

<script>
    import cmpEditor from '../../../components/assets/Editor'

	export default {
        name: 'EditBookContent',
        data(){
            return {
                sectionContentTMP: `
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, totam architecto commodi dolore eligendi culpa laudantium iusto velit voluptate magnam est consequatur perspiciatis rerum nesciunt quae eum in labore? Quam!</p>
                    <p>Harum illo sed libero facere officia dolor vel eum laboriosam dolorum consequuntur similique natus dicta, deleniti asperiores ducimus et non deserunt est. Ipsa labore rerum porro? Vitae nobis hic iusto?</p>
                    <p>Alias distinctio repellendus autem commodi eveniet aut molestiae voluptatem ut in sapiente, possimus voluptates cupiditate illum maiores accusantium omnis ab impedit reprehenderit consequatur, repudiandae quod accusamus. Facere dolore nemo illo!</p>
                `
            }
        },
        components: {
            cmpEditor
        },
        computed: {
            orderChapters(){
                return this.$parent.book.chapters
                // .filter(order => order % 2 === 0)
            },
            chapterTypeName(){
                switch (this.$parent.book.type.id) {
                    case 2:
                        return 'Story'
                    case 3:
                        return 'Poem'
                    default:
                        return 'Chapter'
                }
            }
        }
	}
</script>