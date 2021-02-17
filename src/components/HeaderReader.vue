<template>
    <header class="z-index-1 w-100 t-0" v-bind:class="{ 'position-fixed': scroll.direction <= 0, 'position-absolute': scroll.direction > 0 }">
        <div class="p-2 bg-dark text-light d-flex flex-nowrap align-items-center">
            <router-link v-bind:to="'/'" title="Novelist - share your impressions">
                <img class="d-sm-none" src="../assets/images/logo/logo.svg" height="41" alt="Novelist">
                <img class="d-none d-sm-block " src="../assets/images/logo/logoname.svg" height="41" alt="Novelist">
            </router-link>
            <div class="ml-auto d-flex align-items-center">
                <!-- <button ref="buttonGlobalSearch" v-b-toggle.collapseGlobalSearch class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="info-circle" size="lg" /></button> -->
                <button ref="buttonBookInfo" v-b-toggle.collapseBookInfo class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="info-circle" size="lg" /></button>
                <button ref="buttonTableLists" v-b-toggle.collapseTableLists class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="list-alt" size="lg" /></button>
                <button ref="buttonViewSettings" v-b-toggle.collapseViewSettings class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="cog" size="lg" /></button>
                <div v-if="isAuthenticated" class="position-relative d-inline-block mx-2">
                    <input ref="inputUserMainMenu" v-b-toggle.userMainMenu class="btn text-light p-0 rounded-circle shadow-sm" style="width: 40px; height: 40px; background:url(https://noveli.st/images/users/0/preview.svg) no-repeat center / 40px;" type="button">
                    <b-collapse ref="userMainMenu" id="userMainMenu" class="position-absolute r-0 mt-1 rounded overflow-hidden shadow-sm bg-white z-index-1" style="min-width: 320px; max-width: 320px;" v-click-outside="closeMainMenu">
                        <router-link class="d-flex btn btn-light btn-block border-0 rounded-0 m-0 p-3 text-decoration-none disable-events" active-class="active" v-bind:to="'...'">
                            <font-awesome-icon icon="id-card" class="my-auto" /><span class="ml-auto pl-2 text-truncate">{{ this.$store.state.user.me.name }}</span>
                        </router-link>
                        <!-- <hr class="my-0"> -->
                        <router-link class="btn btn-outline-secondary btn-block border-0 rounded-0 text-left text-nowrap m-0 px-3 py-3 disable-events" active-class="active" v-bind:to="'wallet'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="wallet" class="mr-2" />Wallet <span class="float-right">$201.00</span></router-link>
                        <div class="d-flex flex-wrap">
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'my-library'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="book-reader" size="2x" /><div class="small">Library</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'my-reviews'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="glasses" size="2x" /><div class="small">Reviews</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'/my-workroom'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="pen-alt" size="2x" /><div class="small">Workroom</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'my-comments'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="comments" size="2x" /><div class="small">Comments</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'my-statistics'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="chart-area" size="2x" /><div class="small">Stats</div></router-link>
                        </div>
                        <hr class="my-0">
                        <div class="d-flex flex-wrap">
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'inbox'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="inbox" size="lg" /><div class="small text-truncate">Inbox</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'/settings'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="cogs" size="lg" /><div class="small">Settings</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'get-help'" v-on:click.native="closeMainMenu"><font-awesome-icon icon="question-circle" size="lg" /><div class="small text-truncate">Get help</div></router-link>
                        </div>
                        <!-- <hr class="my-0"> -->
                        <button class="btn btn-light btn-block border-0 rounded-0 text-right px-3 py-2" v-on:click="signOut" type="button">Sign out<font-awesome-icon icon="sign-out-alt" class="ml-2" /></button>
                    </b-collapse>
                </div>
                <div v-else class="btn-group btn-group-sm mx-2">
                    <button class="btn btn-sm btn-primary" v-b-modal.modalSignIn type="button"><font-awesome-icon icon="sign-in-alt" /><span class="d-none d-md-inline ml-md-2">Sign in</span></button>
                    <button class="btn btn-sm btn-success" v-b-modal.modalSignUp type="button"><font-awesome-icon icon="user-plus" /><span class="d-none d-md-inline ml-md-2">Sign up</span></button>
                </div>
            </div>
        </div>
        <div class="nav-scroller position-absolute w-100 bg-light shadow-sm z-index-1">
            <b-collapse ref="collapseBookInfo" id="collapseBookInfo" class="py-3 py-sm-5 px-0 px-sm-3" v-click-outside="closeBookInfo">
                <div v-if="book" class="container">
                    <div class="row">
                        <div class="col-md-5 col-lg-4 text-center">
                            <div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer expand-image rounded"
                                v-bind:style="{'background' : `url(${bookCoverPreviewUrl}) no-repeat scroll center center / cover`}">
                                <!-- <cmp-book-preview-cover></cmp-book-preview-cover> -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                                    <title>{{ book.title }}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title>
                                    <template v-if="book.discount">
                                        <polygon fill="#D4145A" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                                        <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                                    </template>
                                </svg>

                            </div>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <div class="my-3 mt-md-0 h1" role="heading" aria-level="1">{{ book.title }}</div>
                            <div class="small mb-1">
                                <div class="position-absolute"><font-awesome-icon icon="user-circle" class="mr-1"></font-awesome-icon></div>
                                <div class="ml-2 pl-3">
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Author:</b>
                                        <div class="col-8 col-lg-9 pl-0">
                                            <a class="d-inline-block mb-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="profile.html">{{ book.author.name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="small mb-1">
                                <div class="position-absolute"><font-awesome-icon icon="calendar-day" class="mr-1"></font-awesome-icon></div>
                                <div class="ml-2 pl-3">
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Published:</b>
                                        <time class="col-8 col-lg-9 mb-1 pl-0" v-bind:datetime="book.published">{{ (new Date(book.published)).toLocaleString() }}</time>
                                    </div>
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Last edited:</b>
                                        <time class="col-8 col-lg-9 mb-1 pl-0" v-bind:datetime="book.lastEdited">{{ (new Date(book.lastEdited)).toLocaleString() }}</time>
                                    </div>
                                </div>
                            </div>
                            <div class="small mb-1">
                                <div class="position-absolute"><font-awesome-icon icon="directions" class="mr-1"></font-awesome-icon></div>
                                <div class="ml-2 pl-3">
                                    <div class="row" v-if="book.type">
                                        <b class="col-4 col-lg-3 pr-0">Type:</b>
                                        <div class="col-8 col-lg-9 pl-0">
                                            <a class="d-inline-block mb-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="#">{{ book.type.name }}</a>
                                        </div>
                                    </div>
                                    <div class="row" v-if="book.genres">
                                        <b class="col-4 col-lg-3 pr-0">Genres:</b>
                                        <div class="col-8 col-lg-9 pl-0">
                                            <a v-for="genre in book.genres" :key="genre.id" class="d-inline-block mb-1 mr-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="#">{{ genre.name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="small mb-1" v-if="book.cycle.length">
                                <div class="position-absolute"><font-awesome-icon icon="link" class="mr-1"></font-awesome-icon></div>
                                <div class="ml-2 pl-3">
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Cycle:</b>
                                        <div class="col-8 col-lg-9 pl-0">
                                            <a class="d-inline-block mb-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="/cycle" title="Одисея Бьйорна">{{ book.cycle.name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="small mb-1">
                                <div class="position-absolute"><font-awesome-icon icon="book-open" class="mr-1"></font-awesome-icon></div>
                                <div class="ml-2 pl-3">
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Chapters:</b>
                                        <span class="col-8 col-lg-9 mb-1 pl-0">{{ book.chapters.length }}</span>
                                    </div>
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Pages:</b>
                                        <span class="col-8 col-lg-9 mb-1 pl-0">{{ book.pages }}</span>
                                    </div>
                                    <div class="row">
                                        <b class="col-4 col-lg-3 pr-0">Symbols:</b>
                                        <span class="col-8 col-lg-9 mb-1 pl-0">{{ book.symbols }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-5 col-lg-4">
                            <div class="d-flex mb-2 mb-md-0">
                                <router-link v-if="book.price" class="btn btn-block btn-warning" v-bind:to="`/reader/${book.id}`">Read for ${{ discountPrice }}<del v-if="book.discount" class="text-muted ml-2">${{ book.price.toFixed(2) }}</del></router-link>
                                <button v-else class="btn flex-grow-1 btn-success disabled">Read for free</button>

                                <b-dd v-if="book.ebook" id="bookEBookDownload" no-caret variant="primary" menu-class="p-0 overflow-hidden border-0 shadow-sm text-center" class="ml-2">
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
                        <div class="col-md-7 col-lg-8 my-auto text-center text-md-right">
                            <b-dd id="bookShareDropMenu" no-caret size="sm" variant="primary" menu-class="p-0 overflow-hidden border-0 shadow-sm" class="mr-1">
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
                                <button v-if="isBookmarked" class="btn btn-sm btn-primary mr-1" type="button"><font-awesome-icon icon="bookmark" class="mr-2"></font-awesome-icon>Bookmarked</button>
                                <button v-else class="btn btn-sm btn-outline-primary mr-1" type="button"><font-awesome-icon icon="bookmark" class="mr-2"></font-awesome-icon>Add bookmark</button>
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
                            <span class="d-none d-md-inline-block mr-2">Book rating:</span>
                            <b-form-rating
                                class="p-0 bg-light outline-none"
                                :class="{'text-danger': book.rate > 0 && book.rate <= 1, 'text-warning': book.rate > 1 && book.rate < 5, 'text-success': book.rate >= 5}"
                                v-model="book.rate"
                                size="lg"
                                no-border
                                inline
                                readonly
                                v-b-popover.top.hover.focus.blur="'Start reading the book to vote.'"
                            ></b-form-rating>
                            <span class="ml-1">{{ book.rate }}</span>
                        </div>
                        <div class="col-6 col-sm-7 col-lg-8 text-right">
                            <span v-if="book.adult" class="px-1 rounded bg-dark text-white cursor-default" v-b-popover.hover.focus.blur="'The book contains strong sexual content or graphic nudity or extreme portrayals of violence!'">18+</span>
                        </div>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="alert alert-info border-0">
                        <font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>
                        The book info will be soon here...
                    </div>
                </div>
            </b-collapse>
            <b-collapse ref="collapseTableLists" id="collapseTableLists" class="py-3 py-sm-5 px-0 px-sm-3" v-click-outside="closeTableLists">
                <div v-if="book" class="container">
                    <b-tabs pills>
                        <b-tab active>
                            <template #title>
                                <font-awesome-icon icon="list-ol" class="mr-sm-2" /><span class="d-none d-sm-inline">Table of contents</span>
                            </template>
                            <b-card-text class="mt-3">
                                <h2 class="d-sm-none">Table of contents</h2>
                                <div
                                    class="btn-group-vertical btn-block"
                                    v-for="chapter in book.chapters"
                                    v-bind:key="chapter.order"
                                >
                                    <button class="btn btn-light border-0 text-left py-2">
                                        <span class="h5">{{ chapter.title }}</span>
                                        <p class="mb-2 small pl-2">This text will take from book JSON also pages will too.</p>
                                        <div class="d-flex align-items-center small">
                                            <template v-if="book.price">
                                                <div v-if="chapter.order - 1" class="badge badge-warning"><font-awesome-icon icon="lock" class="mr-1" />Locked: need to buy</div>
                                                <div v-else class="badge badge-success"><font-awesome-icon icon="unlock" class="mr-1" />Unlocked: can be read</div>
                                            </template>
                                            <div v-else class="badge badge-success"><font-awesome-icon icon="unlock" class="mr-1" />Free: can be read</div>
                                            <hr class="flex-fill mx-1 my-0">
                                            <div class="-ml-auto badge badge-secondary">Pages: X</div>
                                        </div>
                                    </button>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab>
                            <template #title>
                                <font-awesome-icon icon="bookmark" class="mr-sm-2" /><span class="d-none d-sm-inline">Table of bookmarks</span>
                            </template>
                            <b-card-text class="mt-3">
                                <h2 class="d-sm-none">Table of bookmarks</h2>
                                <div class="alert alert-info border-0">
                                    <font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>
                                    The section will be soon...
                                </div>
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                </div>
                <div v-else class="container">
                    <div class="alert alert-info border-0">
                        <font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>
                        The book info will be soon here...
                    </div>
                </div>
            </b-collapse>
            <b-collapse ref="collapseViewSettings" id="collapseViewSettings" class="py-3 py-sm-5 px-0 px-sm-3" v-click-outside="closeViewSettings">
                <div class="container row mx-auto">
                    <div class="col-md-6">
                        <div class="h5 mb-3"><font-awesome-icon icon="adjust" class="mr-2" />Color mode</div>
                        <hr class="border-top">
                        <div class="btn-group d-flex mb-5" role="group" aria-label="Color model">
                            <button v-on:click="changeColorMode('light')" class="btn btn-light border-0 active col" type="button">
                                <font-awesome-icon v-show="isColorMode('light')" icon="check" size="lg" /> Light
                            </button>
                            <button v-on:click="changeColorMode('gray')" class="btn btn-secondary border-0 active col" type="button" >
                                <font-awesome-icon v-show="isColorMode('gray')" icon="check" size="lg" /> Gray
                            </button>
                            <button v-on:click="changeColorMode('dark')" class="btn btn-dark border-0 active col" type="button">
                                <font-awesome-icon v-show="isColorMode('dark')" icon="check" size="lg" /> Dark
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h5 mb-3"><font-awesome-icon icon="text-height" class="mr-2" />Text size</div>
                        <hr class="border-top">
                        <div class="btn-group d-flex mb-sm-5" role="group" aria-label="Color model">
                            <button v-on:click="changeTextSize('normal')" class="btn p-0 btn-transparent col" type="button">
                                <font-awesome-icon v-show="isTextSize('normal')" icon="check" size="lg" /> Normal
                            </button>
                            <button v-on:click="changeTextSize('middle')" class="btn p-0 btn-transparent col font-size-125" type="button">
                                <font-awesome-icon v-show="isTextSize('middle')" icon="check" size="lg" /> Middle
                            </button>
                            <button v-on:click="changeTextSize('big')" class="btn p-0 btn-transparent col font-size-150" type="button">
                                <font-awesome-icon v-show="isTextSize('big')" icon="check" size="lg" /> Big
                            </button>
                        </div>
                    </div>
                    <div class="col-12 d-none d-sm-block">
                        <div class="h5 mb-3"><font-awesome-icon icon="arrows-alt-h" class="mr-2" />Page width</div>
                        <hr class="border-top">
                        <div class="btn-group d-flex" role="group" aria-label="Color model">
                            <button v-on:click="changePageWidth('responsive')" class="btn btn-transparent border-0 active col" type="button">
                                <font-awesome-icon v-show="isPageWidth('responsive')" icon="check" size="lg" /> Responsive
                            </button>
                            <button v-on:click="changePageWidth('full')" class="btn btn-transparent border-0 active col" type="button" >
                                <font-awesome-icon v-show="isPageWidth('full')" icon="check" size="lg" /> Full width
                            </button>
                        </div>
                    </div>
                </div>
            </b-collapse>
        </div>
    </header>
</template>

<script>
    import client from 'api-client'

    import { mapActions } from 'vuex'
    import { AUTH_LOGOUT } from "@/store/actions/auth";

    export default {
        name: 'Header',
        data() {
            return {
                book: null,
                scroll: {
                    delta: 5,
                    value: 0,
                    direction: 0
                },
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        computed: {
            isAuthenticated() { return this.$store.getters.isCurrentUserLoaded },
            bookCoverPreviewUrl() {
                const id = this.book ? this.book.id : 0
                return `https://noveli.st/images/books/${id}/preview.jpg`
            },
            discountPrice(){
                if(this.book.discount)
                    return (this.book.price * (100 - this.book.discount) / 100).toFixed(2)
                else
                    return this.book.price
            },
            isBookmarked(){
                return this.$store.getters.currentUser.library.bookmarks.some( bmbook => bmbook.id === this.book.id )
            },

            // bookId() { return this.$route.params.id }
        },
        async mounted() {
            this.book = await client.findBook(this.$route.params.id)
        },
        methods: {
            ...mapActions({ logout: AUTH_LOGOUT }),
            signOut() {
                this.closeMainMenu();
                this.logout();
            },
            closeBookInfo(ev) {
                if (!ev || !this.$refs.buttonBookInfo.contains(ev.target))
                    this.$refs.collapseBookInfo.show = false
            },
            closeTableLists(ev) {
                if (!ev || !this.$refs.buttonTableLists.contains(ev.target))
                    this.$refs.collapseTableLists.show = false
            },
            closeViewSettings(ev) {
                if (!ev || !this.$refs.buttonViewSettings.contains(ev.target))
                    this.$refs.collapseViewSettings.show = false
            },
            closeMainMenu(ev) {
                if (!ev || !this.$refs.inputUserMainMenu.contains(ev.target))
                    this.$refs.userMainMenu.show = false
            },
            changeColorMode(mode) { return this.$parent.settings.reader.colorMode = mode },
            isColorMode(mode) { return this.$parent.settings.reader.colorMode === mode ? true : false },
            changeTextSize(size) { return this.$parent.settings.reader.textSize = size },
            isTextSize(size) { return this.$parent.settings.reader.textSize === size ? true : false },
            changePageWidth(width) { return this.$parent.settings.reader.pageWidth = width },
            isPageWidth(width) { return this.$parent.settings.reader.pageWidth === width ? true : false },
            setBook(book) {
                this.book = book
            },

            handleScroll() {
                if( Math.abs(this.scroll.value - window.scrollY) <= this.scroll.delta ) return
                this.scroll.direction = this.scroll.value - window.scrollY < 0 ? 1 : -1
                this.scroll.value = window.scrollY
            }
        }
    }
</script>
