<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1 mb-3" role="heading" aria-level="1">Book title</div>
            </header>
            <b-tabs lazy content-class="p-3 border-left border-right border-bottom rounded-bottom shadow-sm bg-white">
                <b-tab active>
                    <template v-slot:title>
                        <font-awesome-icon icon="edit"></font-awesome-icon><span class="d-none d-md-inline ml-2">Edit book</span>
                    </template>
                    <div class="h2 mb-3 d-md-none" role="heading" aria-level="2">Edit book</div>
                    <div>
                        <div class="row justify-content-center">
                            <div class="col-sm-8 col-md-6 mb-3">
                                <button class="btn btn-success btn-block" type="button"><font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Add chapter</button>
                            </div>
                        </div>
                        <b-alert show dismissible class="border-0">
                            <template v-slot:dismiss class="position-absolute">
                                <font-awesome-icon icon="times"></font-awesome-icon>
                            </template>
                            <font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>Recomendation
                            <hr class="my-2">
                            <ul>
                                <li><b>Не выкладывайте всю книгу сразу</b> - если вы никогда не публиковали книгу до этого!</li>
                                <li><b>Не выкладывайте всю книгу сразу</b> - несмотря на то что она полностью написана!</li>
                                <li><b>Не выкладывайте всю книгу сразу</b> - даже вы очень хотите поделиться ей!</li>
                                <li><b>Не выкладывайте всю книгу сразу</b> - особенно если она у вас платная!</li>
                            </ul>
                            Открывайте доступ к главам с временными промежутками, не больше одной главы в неделю. Тоже самое касается и переведенных книг на другие языки.
                        </b-alert>
                        <div class="accordion">
                            <b-card no-body>
                                <b-card-header header-tag="header" role="tab" class="d-flex flex-column flex-md-row align-items-md-center">
                                    <div class="h6 mb-0" role="heading" aria-level="3">Chapter title #1</div>
                                    <div class="ml-md-auto d-flex d-md-inline-flex">
                                        <b-button v-b-toggle="'accordion-1-edit'" class="text-primary" variant="link" v-b-tooltip.hover.focus title="Edit chapter">
                                            <font-awesome-icon icon="edit"></font-awesome-icon>
                                        </b-button>
                                        <b-button v-b-toggle="'accordion-1-settings'" class="text-primary" variant="link" v-b-tooltip.hover.focus title="Chapter settings">
                                            <font-awesome-icon icon="cog"></font-awesome-icon>
                                        </b-button>
                                        <b-button v-b-toggle="'accordion-1-delete'" class="ml-auto ml-md-3 text-danger" variant="link" v-b-tooltip.hover.focus title="Delete chapter">
                                            <font-awesome-icon icon="trash"></font-awesome-icon>
                                        </b-button>
                                    </div>
                                </b-card-header>
                                <b-collapse id="accordion-1-edit" accordion="accordion" role="tabpanel">
                                    <b-card-body>
                                        Here will be an editor!
                                    </b-card-body>
                                </b-collapse>
                                <b-collapse id="accordion-1-settings" accordion="accordion" role="tabpanel">
                                    <b-card-body>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputChapterTitile-1">The title of the chapter</label>
                                            <div class="col-lg-9">
                                                <input id="inputChapterTitile-1" class="form-control" type="text" value="Curent chapter title">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="textareaAnnotation-1">Annotation</label>
                                            <div class="col-lg-9">
                                                <textarea id="textareaAnnotation-1" class="form-control" rows="2" maxlength="128" aria-describedby="descriptionAnnotation-1"></textarea>
                                                <small id="descriptionAnnotation-1" class="form-text text-muted">Short about the chapter.</small>
                                            </div>
                                        </div>
                                        <div class="px-3 pt-3 border rounded">
                                            <h4 class="h5">Publish settings</h4>
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectVisibility-1">Visibility</label>
                                                <div class="col-lg-9">
                                                    <select id="selectVisibility-1" class="custom-select">
                                                        <option value="publiс">Public</option>
                                                        <option value="private" selected>Private</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                                <b-collapse id="accordion-1-delete" accordion="accordion" role="tabpanel">
                                    <b-card-body>
                                        <div class="alert alert-danger border-0 d-flex">
                                            <font-awesome-icon icon="exclamation-circle" size="lg" class="mr-3"></font-awesome-icon>
                                            Delete will be lost all you data. Are you sure to delete?
                                        </div>
                                        <div class="text-right">
                                            <button class="btn btn-danger" type="button"><font-awesome-icon icon="trash" class="mr-2"></font-awesome-icon>Yes! Delete</button>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            ...
                        </div>
                        <div class="row my-3">
                            <div class="col text-center">
                                <a class="btn btn-block btn-outline-primary" href="book.html" target="_blank"><i class="fas fa-book mr-2"></i>Open book's profile</a>
                            </div>
                            <div class="col text-center">
                                <a class="btn btn-block btn-outline-primary" href="reader.html" target="_blank"><i class="fas fa-book-open mr-2"></i>Open book in reader</a>
                            </div>
                        </div>
                        <hr class="mx-n3">
                        <div class="clearfix">
                            <button id="buttonSaveMention" class="btn btn-primary float-right" type="button"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save changes</button>
                        </div>
                    </div>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        <font-awesome-icon icon="paperclip"></font-awesome-icon><span class="d-none d-md-inline ml-2">Edit mentions</span>
                    </template>
                    <div class="h2 mb-3 d-md-none" role="heading" aria-level="2">Edit mentions</div>
                    <div>
                        I'm the second tab
                    </div>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        <font-awesome-icon icon="cog"></font-awesome-icon><span class="d-none d-md-inline ml-2">Book settings</span>
                    </template>
                    <div class="h2 mb-3 d-md-none" role="heading" aria-level="2">Book settings</div>
                    <div>
                        I'm the thirth tab
                    </div>
                </b-tab>
                <b-tab v-bind:title-link-class="'text-danger'">
                    <template v-slot:title>
                        <font-awesome-icon icon="trash"></font-awesome-icon><span class="d-none d-md-inline ml-2">Delete book</span>
                    </template>
                    <div class="h2 mb-3 d-md-none" role="heading" aria-level="2">Delete book</div>
                    <div>
                        <div class="alert alert-danger border-0">
                            <div class="h5 font-weight-bold"><i class="fas fa-exclamation-circle mr-3"></i>Внимание</div>
                            <hr class="my-2">
                            Книга не имеет финансовых обременений и может быть безвозвратно удалена.
                        </div>
                        <div class="alert alert-warning border-0">
                            <div class="h5 font-weight-bold"><i class="fas fa-exclamation-triangle mr-3"></i>Внимание</div>
                            <hr class="my-2">
                            Книга имеет финансовых обременений и не может быть безвозвратно удалена. Данную книгу можно скрыть сделав приватной. Читатели купившие книгу смогут продолжить ей пользоваться.
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </main>
</template>

<script>

    // https://github.com/davidroyer/vue2-editor
    // https://github.surmon.me/vue-quill-editor/

	export default {
        name: 'EditBook'
	}
</script>