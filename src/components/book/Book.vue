<template>
    <main class="min-vh-100" v-if="book">
        <div class="py-3 py-sm-5 px-0 px-sm-3">
            <div class="container mx-auto text-dark">
                <div class="row">
                    <div class="col-md-5 col-lg-4 text-center">
                        <div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer expand-image rounded shadow-sm"
                            v-bind:style="{'background' : `url(${bookCoverPreviewUrl}) no-repeat scroll center center / cover`}">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                                <!-- <title>{{ book.title }}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title> -->
                                <!-- <template v-if="book.discount">
                                    <polygon fill="#ec4079" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                                    <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                                </template> -->
                            </svg>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <div class="my-3 mt-md-0 h1" role="heading" aria-level="1">{{ book.title }}</div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="user-circle" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Author:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="profile.html">{{ book.author.name }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="calendar-day" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Published:</b>
                                    <time class="col-8 col-lg-9 pl-0" v-bind:datetime="book.published">{{ (new Date(book.published)).toLocaleString() }}</time>
                                </div>
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Last edited:</b>
                                    <time class="col-8 col-lg-9 pl-0" v-bind:datetime="book.lastEdited">{{ (new Date(book.lastEdited)).toLocaleString() }}</time>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="directions" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row" v-if="book.type">
                                    <b class="col-4 col-lg-3 pr-0">Type:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="#">{{ book.type.name }}</a>
                                    </div>
                                </div>
                                <div class="row" v-if="book.genres">
                                    <b class="col-4 col-lg-3 pr-0">Genres:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a v-for="genre in book.genres" :key="genre.id" class="mr-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="#">{{ genre.name }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2" v-if="book.cycle.name">
                            <div class="position-absolute"><font-awesome-icon icon="link" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Cycle:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="/cycle" title="Одисея Бьйорна">{{ book.cycle.name }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="book-open" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Chapters:</b>
                                    <span class="col-8 col-lg-9 pl-0">{{ book.chapters.length }}</span>
                                </div>
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Pages:</b>
                                    <span class="col-8 col-lg-9 pl-0">{{ book.pages }}</span>
                                </div>
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Symbols:</b>
                                    <span class="col-8 col-lg-9 pl-0">{{ book.symbols }}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-5 col-lg-4">
                        <div class="d-flex mb-2 mb-md-0">
                            <router-link v-if="book.price" class="btn btn-block btn-warning" v-bind:to="`/reader/${book.id}`">Read for ${{ discountPrice }}<del v-if="book.discount" class="text-muted ml-2">${{ book.price.toFixed(2) }}</del></router-link>
                            <router-link v-else class="btn flex-grow-1 btn-success" v-bind:to="`/reader/${book.id}`">Read for free</router-link>

                            <b-dd v-if="book.ebook" id="bookEBookDownload" no-caret variant="primary" menu-class="p-0 overflow-hidden shadow-sm text-center" class="ml-2">
                                <template slot="button-content"><font-awesome-icon icon="download"></font-awesome-icon></template>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.pdf</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.epub</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.fb2</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.mobi</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.pdb</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.lrf</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.rb</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.snb</span></b-dd-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.docx</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.doc</span></b-dd-item>
                                <b-dd-item variant="primary" href="#" target="_blank"><span class="d-block py-1 small">.rtf</span></b-dd-item>
                            </b-dd>
                        </div>
                        <hr class="d-md-none">
                    </div>
                    <div class="col-md-7 col-lg-8 mt-auto text-center text-md-right">
                        <b-dd id="bookShareDropMenu" no-caret size="sm" variant="primary" menu-class="p-0 overflow-hidden shadow-sm" class="mr-1">
                            <template slot="button-content"><font-awesome-icon icon="share-square" class="mr-2"></font-awesome-icon>Share</template>
                            <b-dd-item variant="primary" href="#" target="_blank">
                                <span class="d-block py-1"><font-awesome-icon :icon="['fab', 'facebook']" class="mr-2"></font-awesome-icon>Facebook</span>
                            </b-dd-item>
                            <b-dd-item variant="primary" href="#" target="_blank">
                                <span class="d-block py-1"><font-awesome-icon :icon="['fab', 'instagram']" class="mr-2"></font-awesome-icon>Instagram</span>
                            </b-dd-item>
                            <b-dd-item variant="primary" href="#" target="_blank">
                                <span class="d-block py-1"><font-awesome-icon :icon="['fab', 'twitter']" class="mr-2"></font-awesome-icon>Twitter</span>
                            </b-dd-item>
                        </b-dd>

                        <template v-if="isAuthenticated">
                            <button class="btn btn-sm btn-outline-primary mr-1" type="button"><font-awesome-icon icon="bookmark" class="mr-2"></font-awesome-icon>Add bookmark</button>
                            <!--    <button class="btn btn-sm btn-primary mr-1" type="button"><font-awesome-icon icon="bookmark" class="mr-2"></font-awesome-icon>Remove bookmark</button>-->
                        </template>
                        <span v-else class="d-inline-block" tabindex="0" v-b-tooltip.hover.v-info title="Only registered users can bookmark! Please Sign in...">
                            <button class="btn btn-sm btn-outline-primary mr-1" type="button" disabled><font-awesome-icon icon="bookmark" class="mr-2"></font-awesome-icon>Add bookmark</button>
                        </span>
                        <button class="btn btn-sm btn-danger" v-b-tooltip.hover.focus title="Report a violation" type="button"><font-awesome-icon icon="ban"></font-awesome-icon></button> <!-- disabled если на своей странице -->
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-6 col-sm-5 col-lg-4 d-flex justify-content-md-center align-items-center">
                        <span class="font-weight-bold d-none d-md-inline-block mr-2">Book rating:</span>
                        <rate
                            v-bind:length="5"
                            v-bind:value="book.rate"
                            v-bind:showcount="true"
                            v-bind:readonly="true"
                            v-b-popover.top.hover.focus.blur="'Start reading the book to vote.'"
                        ></rate>
                        
                        <!-- <span class="font-weight-bold d-none d-md-inline-block">Book rating:</span>
                        <span id="bookRating" class="starrr text-nowrap"
                        data-toggle="popover" data-trigger="focus" data-placement="top"
                        title="Как проголосовать?"
                        data-content="Начните читать книгу для того чтобы получить возможность проголосовать."><span id="ratingScore" class="pl-2 pr-1"></span></span> -->
                    </div>
                    <div class="col-6 col-sm-7 col-lg-8 text-right">
                        <span v-if="book.adult" class="px-1 rounded bg-dark text-white cursor-default" v-b-popover.hover.focus.blur="'The book contains strong sexual content or graphic nudity or extreme portrayals of violence!'">18+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-scroller position-relative overflow-hidden border-bottom bg-light shadow-sm mb-4">
            <nav class="nav d-flex flex-nowrap overflow-auto pb-0 container">
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'info'">
                    <font-awesome-icon icon="id-card"></font-awesome-icon>
                </router-link>
                <span class="nav-link border-left px-0"></span>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'mentions'">
                    Mentions<span class="badge badge-pill ml-1 bg-secondary text-light">{{ book.mentions.length }}</span>
                </router-link>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'illustrations'">
                    Illustrations<span class="badge badge-pill ml-1 bg-secondary text-light">{{ book.illustrations.length }}</span>
                </router-link>
                <!--router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'quotations'">
                    Quotations<span class="badge badge-pill ml-1 bg-secondary text-light">0</span>
                </router-link-->
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'reviews'">
                    Reviews<span class="badge badge-pill ml-1 bg-secondary text-light">{{ book.reviews.length }}</span>
                </router-link>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'guestbook'">
                    Guestbook<span class="badge badge-pill ml-1 bg-secondary text-light">{{ book.comments }}</span>
                </router-link>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'in-bookmarks'">
                    In bookmarks<span class="badge badge-pill ml-1 bg-secondary text-light">{{ book.bookmarkers.length }}</span>
                </router-link>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'activity'">
                    Activity
                </router-link>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'statistic'">
                    Statistic
                </router-link>
            </nav>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
    import client from 'api-client'
    import toast from '../../util/toast'

    // https://github.com/SinanMtl/vue-rate
    import rate from '../../components/assets/Rate'

    export default {
        name: 'Book',
        data() {
            return {
                book: null
            }
        },
        components: {
            rate
        },
        computed: {
            isAuthenticated() { return this.$store.getters.isCurrentUserLoaded },
            bookCoverPreviewUrl() {
                const id = this.book ? this.book.id : 0
                return `http://mobitoon.ru/novelist/images/books/${id}/preview.jpg`
            },
            discountPrice(){
                if(this.book.discount)
                    return (this.book.price * (100 - this.book.discount) / 100).toFixed(2)
                else
                    return this.book.price
            }
        },
        methods: {
            setBook(book) { this.book = book }
        },
        beforeRouteEnter(to, from, next) {
            toast.info(`Loading ${to.params.id} book`)
            client.findBook(to.params.id).then(book => {
                next(vm => vm.setBook(book))
            })
        }
    }
</script>
