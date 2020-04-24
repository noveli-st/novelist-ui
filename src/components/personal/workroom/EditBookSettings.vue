<template>
        <div>
            <header>
                <div class="h2 mb-4" role="heading" aria-level="2">Book settings</div>
            </header>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputBookTitile">Book title</label>
                <div class="col-lg-9">
                    <input id="inputBookTitile" class="form-control" type="text" v-model="$parent.book.title" placeholder="Type book title">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="fileBookCover">Cover</label>
                <div class="col-lg-9">
                    <div class="custom-file">
                        <input id="fileBookCover" class="custom-file-input" type="file" aria-describedby="descriptionBookCover" disabled>
                        <label class="custom-file-label text-truncate" for="fileBookCover">Choose file</label>
                    </div>
                    <small id="descriptionBookCover" class="form-text text-muted">The loaded image should not be less than 1024 px in width or height. Do not upload small images!</small>
                    <!--figure class="figure mb-0">
                        <figcaption id="descriptionBookCover" class="figure-caption">The loaded image should not be less than 1024 px in width or height. Do not upload small images!</figcaption>
                            <img class="p-0 border-0 figure-img rounded shadow-sm" src="images/books/0/cover.svg" height="128px">
                    </figure-->
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="fileBookBackground">Background</label>
                <div class="col-lg-9">
                    <div class="custom-file">
                        <input id="fileBookBackground" class="custom-file-input" type="file" aria-describedby="descriptionBookBackground" disabled>
                        <label class="custom-file-label text-truncate" for="fileBookBackground">Choose file</label>
                    </div>
                    <small id="descriptionBookBackground" class="form-text text-muted">Do not upload small images width or height less than 1280 px!</small>
                    <!--figure class="figure mb-0">
                        <figcaption id="descriptionBookBackground" class="figure-caption">Do not upload small images width or height less than 1280 px!</figcaption>
                        <img class="p-0 border-0 figure-img mw-100 rounded shadow-sm" style="max-height:128px" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 128' fill='%23e9ecef'%3E%3Ctitle%3EDefault user profile background%3C/title%3E%3Crect class='cls-1' width='320' height='128'%3E%3C/rect%3E%3C/svg%3E%0A">
                    </figure-->
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookType">Type</label>
                <div class="col-lg-9">
                    <select id="selectBookType" class="custom-select" v-model="$parent.book.type.id">
                        <option
                            v-for="(option, index) in $parent.booksPattern.types"
                            v-bind:key="index"
                            v-bind:value="option.id"
                        >{{ option.name }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookGenre">Genre</label>
                <div class="col-lg-9">

                    <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
                    <b-form-tags v-model="value" add-on-change no-outer-focus class="border-0 p-0 bg-transparent">
                        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                            <b-form-select
                                id="selectBookGenre"
                                v-bind="inputAttrs"
                                v-on="inputHandlers"
                                :disabled="disabled || availableOptions.length === 0 || tags.length >= 3"
                                :options="availableOptions"
                            >
                                <template v-slot:first>
                                    <!-- This is required to prevent bugs with Safari -->
                                    <option disabled value="">Choose a genres...</option>
                                </template>
                            </b-form-select>
                            <ul v-if="tags.length > 0" class="list-inline d-inline-block mt-2 mb-2">
                                <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                    <b-form-tag
                                        @remove="removeTag(tag)"
                                        :title="tag"
                                        :disabled="disabled"
                                    >{{ tag }}</b-form-tag>
                                </li>
                            </ul>
                        </template>
                    </b-form-tags>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookCycle">Cycle</label>
                <div class="col-lg-9">
                    <select id="selectBookCycle" class="custom-select" v-model="$parent.book.cycle.id">
                        <option
                            v-for="(option, index) in $parent.booksPattern.types"
                            v-bind:key="index"
                            v-bind:value="option.id"
                        >{{ option.name }}</option>
                    </select>

                    <small id="descriptionBookCycle" class="form-text text-muted">Select one or type a new cycle name and hit enter.</small>
                    <!--div class="border rounded mt-2">
                        <header class="p-2">
                            <h3 class="h6 mb-0">Books of "Cycle name"</h3>
                            <small class="form-text text-muted">Уou can reorder books in the cycle "Cycle name" with the arrow <i class="fas fa-arrow-alt-circle-up"></i> <i class="fas fa-arrow-alt-circle-down"></i> buttons.</small>
                        </header>
                        <ul class="list-group list-group-flush small rounded-bottom overflow-hidden">
                            <li class="list-group-item p-0 d-flex">
                                <div class="flex-grow-1 p-2"><a href="#" target="_blank">The title of some book</a></div>
                                <div class="pr-2 align-right my-auto">
                                    <button class="btn btn-link p-0" type="button" disabled><i class="fas fa-lg fa-arrow-alt-circle-up"></i></button>
                                    <button class="btn btn-link p-0" type="button"><i class="fas fa-lg fa-arrow-alt-circle-down"></i></button>
                                </div>
                            </li>
                            <li class="list-group-item p-0 d-flex">
                                <div class="flex-grow-1 p-2"><a href="#" target="_blank">The title of some book</a></div>
                                <div class="pr-2 align-right my-auto">
                                    <button class="btn btn-link p-0" type="button"><i class="fas fa-lg fa-arrow-alt-circle-up"></i></button>
                                    <button class="btn btn-link p-0" type="button"><i class="fas fa-lg fa-arrow-alt-circle-down"></i></button>
                                </div>
                            </li>
                            <li class="list-group-item p-0 d-flex">
                                <div class="flex-grow-1 p-2"><a href="#" target="_blank">The title of some book</a></div>
                                <div class="pr-2 align-right my-auto">
                                    <button class="btn btn-link p-0" type="button"><i class="fas fa-lg fa-arrow-alt-circle-up"></i></button>
                                    <button class="btn btn-link p-0" type="button"><i class="fas fa-lg fa-arrow-alt-circle-down"></i></button>
                                </div>
                            </li>
                            <li class="list-group-item p-0 d-flex">
                                <div class="flex-grow-1 p-2">The title of the book</div>
                                <div class="pr-2 align-right my-auto">
                                    <button class="btn btn-link p-0" type="button"><i class="fas fa-lg fa-arrow-alt-circle-up"></i></button>
                                    <button class="btn btn-link p-0" type="button" disabled><i class="fas fa-lg fa-arrow-alt-circle-down"></i></button>
                                </div>
                            </li>
                        </ul>                                            
                    </div-->
                </div>
            </div>
            <!-- <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookTags">Tags</label>
                <div class="col-lg-9">
                    <select id="selectBookTags" class="js-tag form-control" multiple="multiple" aria-describedby="descriptionBookTags"></select>
                    <small id="descriptionBookTags" class="form-text text-muted">Select or type a tag and hit enter.</small>
                </div>
            </div> -->
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="textareaBookAnnotation">Annotation</label>
                <div class="col-lg-9">
                    <textarea id="textareaBookAnnotation" class="form-control" v-model="$parent.book.annotation" rows="3" maxlength="1024" aria-describedby="descriptionBookAnnotation"></textarea>
                    <small id="descriptionBookAnnotation" class="form-text text-muted">Short about the book. Please - no spoilers!</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="checkboxBookEBook">eBook</label>
                <div class="col-lg-9">
                    <div class="custom-control custom-switch py-2">
                        <input id="checkboxBookEBook" type="checkbox" class="custom-control-input" v-model="$parent.book.ebook">
                        <label class="custom-control-label" for="checkboxBookEBook">Allow read offline (can be downloaded as an eBook)</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="checkboxBookAdult">
                    <span class="badge badge-dark d-inline-flex align-items-center">18<font-awesome-icon icon="plus" class="ml-1"></font-awesome-icon></span>
                </label>
                <div class="col-lg-9">
                    <div class="custom-control custom-switch py-2">
                        <input id="checkboxBookAdult" type="checkbox" class="custom-control-input" v-model="$parent.book.adult">
                        <label class="custom-control-label" for="checkboxBookAdult">The book contains strong sexual content or graphic nudity or extreme portrayals of violence</label>
                    </div>
                </div>
            </div>
            <div class="px-3 pt-3 mb-3 border rounded">
                <h3 class="h5">Publish settings</h3>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookStatus">Status</label>
                    <div class="col-lg-9">
                        <select id="selectBookStatus" v-model="$parent.book.status" class="custom-select" aria-describedby="descriptionBookStatus">
                            <option value="completed" v-bind:selected="$parent.book.status == 'completed'">Completed book</option>
                            <option value="underway" v-bind:selected="$parent.book.status == 'underway'">Still Underway</option>
                        </select>
                        <small id="descriptionBookStatus" class="form-text text-muted">Статус книги выполняет информационную роль и позволяя пользователю понять, окончена работа над книгой или нет.</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookVisibility">Visibility</label>
                    <div class="col-lg-9">
                        <select id="selectBookVisibility" class="custom-select" aria-describedby="descriptionBookVisibility">
                            <option value="publiс" selected>Public</option>
                            <option value="private">Private</option>
                        </select>
                        <small id="descriptionBookVisibility" class="form-text text-muted">Для того чтобы скрыть книгу на сайте - следует выбрать "Private".</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="selectBookCost">Cost</label>
                    <div class="col-lg-9">
                        <select id="selectBookCost" v-model="$parent.book.cost" class="custom-select" aria-describedby="descriptionBookCost">
                            <option value="none" v-bind:selected="$parent.book.cost == 'none'" disabled class="d-none">Select one...</option>
                            <option value="free" v-bind:selected="$parent.book.cost == 'free'">Free book</option>
                            <option value="paid" v-bind:selected="$parent.book.cost == 'paid'">Paid book</option>
                        </select>
                        <small id="descriptionBookCost" class="form-text text-warning"><font-awesome-icon icon="exclamation-triangle"></font-awesome-icon> Выбор платная или бесплатная книга возможен только один раз!</small>
                        <div id="paidBookSelect" class="form-text" v-bind:class="{'d-none' : $parent.book.cost != 'paid'}">
                            <div class="input-group input-group-sm d-inline-flex w-auto">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="dollar-sign" size="md"></font-awesome-icon></span>
                                </div>
                                <input id="inputBookPrise" v-model="$parent.book.price" class="form-control border-left-0" type="text" aria-describedby="descriptionBookPrise">
                            </div>
                            <small id="descriptionBookPrise" class="form-text">
                                <span class="text-muted">Not less than $0.99</span>
                                <br>
                                <span class="text-warning"><font-awesome-icon icon="exclamation-circle"></font-awesome-icon> Будьте внимательны - после установки цены на книгу изменить цену будет невозможно!</span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <!-- {{$parent.booksPattern.genres}} -->
            <hr class="border-top">
            <footer class="clearfix">
                <button class="btn btn-link text-decoration-none float-left" type="reset"><font-awesome-icon icon="history" class="mr-2"></font-awesome-icon>Restore</button>
                <button id="buttonSaveSettings" class="btn btn-primary float-right" type="submit"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save changes</button>
            </footer>
        </div>
</template>

<script>
	export default {
        name: 'EditBookSettings',
        data() {
            return {
                options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
                value: []
                // bookSets: {
                //     title: this.$parent.book.title,
                //     typeId: this.$parent.book.type.id
                // }
            }
        },
        computed: {
            availableOptions() {
                return this.options.filter(opt => this.value.indexOf(opt) === -1)
            }
        }

	}
</script>