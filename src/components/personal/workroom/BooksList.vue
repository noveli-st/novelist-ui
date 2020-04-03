<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1" role="heading" aria-level="1">My books</div>
            </header>
            <hr class="border-top">
            <div class="row justify-content-center">
                <p class="col-sm-8 col-md-6">
                    <button id="buttonCreateNewBook" class="btn btn-success btn-block" type="button"><font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Create new book</button>
                </p>
            </div>
            <div id="myBooksList">
                <div id="bookId" class="card border-0 mb-3 shadow-sm">
                    <div class="card-header">
                       <div class="mb-0 h5 text-truncate" role="heading" aria-level="2">Book title</div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-5 col-lg-4 col-xl-3 pr-md-0">
                            <!-- <div class="card-img-center position-relative" data-type="gallery" data-image="images/books/1/cover.jpg" style="background: url(images/books/1/preview.jpg) no-repeat scroll center center / cover;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><title>Название книги</title></svg>
                            </div> -->
                            <div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer expand-image"
                                v-bind:style="{'background' : `url(${bookCoverPreviewUrl}) no-repeat scroll center center / cover`}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                                    <!-- <title>{{ book.title }}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title>
                                    <template v-if="book.discount">
                                        <polygon fill="#D4145A" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                                        <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                                    </template> -->
                                </svg>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 col-lg-8 col-xl-9 py-3 d-flex flex-column">
                            <div class="row px-3 px-md-0 text-muted">
                                <div class="col-12 col-lg-6">
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="calendar-day"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Published:</b>
                                                <time class="col-6 pl-0" datetime="2018-07-22">...</time>
                                            </div>
                                            <div class="row">
                                                <b class="col-6 pr-0">Last edited:</b>
                                                <time class="col-6 pl-0" datetime="2019-10-22">...</time>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="book"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Book status:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="book-open"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Chapters:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                            <div class="row">
                                                <b class="col-6 pr-0">Pages:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                            <div class="row">
                                                <b class="col-6 pr-0">Symbols:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="link"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Cycle:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="star-half-alt"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Rating:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="money-bill"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Book cost:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="percentage"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Stock:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="small mb-2">
                                        <div class="position-absolute"><font-awesome-icon icon="piggy-bank"></font-awesome-icon></div>
                                        <div class="ml-2 pl-3">
                                            <div class="row">
                                                <b class="col-6 pr-0">Earned gross:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                            <div class="row">
                                                <b class="col-6 pr-0">Earned net:</b>
                                                <div class="col-6 pl-0">...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href="my-book.html" class="btn btn-sm btn-primary mr-1"><font-awesome-icon icon="edit"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Edit</span></a>
                        <a href="my-book.html#BookSettings" class="btn btn-sm btn-primary mr-1"><font-awesome-icon icon="cog"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Settings</span></a>
                        <b-dd id="bookShareDropMenu" no-caret size="sm" variant="primary" menu-class="p-0 overflow-hidden shadow-sm" class="mr-1">
                            <template slot="button-content"><font-awesome-icon icon="eye" class="mr-2"></font-awesome-icon>Preview</template>
                            <b-dd-item variant="primary" href="book.html" target="_blank">
                                <span class="d-block py-1"><font-awesome-icon icon="book" class="mr-2"></font-awesome-icon>Book page</span>
                            </b-dd-item>
                            <b-dd-item variant="primary" href="reader.html" target="_blank">
                                <span class="d-block py-1"><font-awesome-icon icon="book-open" class="mr-2"></font-awesome-icon>Reader page</span>
                            </b-dd-item>
                        </b-dd>
                        <a href="my-book.html#nav-book-delete" class="btn btn-sm btn-danger float-right"><font-awesome-icon icon="trash"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Delete</span></a>
                    </div>                            
                </div>
            </div>
        </div>
    </main>
</template>

<script>
	export default {
        name: 'MyBooks',
        data() {
            return {
                book: null
            }
        },
        computed: {
            bookCoverPreviewUrl() {
                // const id = this.book ? this.book.id : 0
                const id = 1
                return `http://mobitoon.ru/novelist/images/books/${id}/preview.jpg`
            }
        }
        
	}
</script>