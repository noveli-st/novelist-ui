<template>
    <header class="position-fixed z-index-1 w-100">
        <div class="p-2 bg-dark text-light d-flex flex-nowrap align-items-center">
            <router-link v-bind:to="'/'" title="Novelist - share your impressions">
                <img class="d-sm-none" src="../assets/images/logo/logo.svg" height="40" alt="Novelist">
                <img class="d-none d-sm-block " src="../assets/images/logo/logoname.svg" height="40" alt="Novelist">
            </router-link>
            <div class="ml-auto d-flex align-items-center">
                <!-- <button ref="buttonGlobalSearch" v-b-toggle.collapseGlobalSearch class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="info-circle" size="lg" /></button> -->
                <button ref="buttonBookInfo" v-on:click="showBookInfo()" v-b-toggle.collapseBookInfo class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="info-circle" size="lg" /></button>
                <button ref="buttonTableLists" v-b-toggle.collapseTableLists class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="list-alt" size="lg" /></button>
                <button ref="buttonViewSettings" v-b-toggle.collapseViewSettings class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="cog" size="lg" /></button>
                <div v-if="isAuthenticated" class="position-relative d-inline-block mx-2">
                    <input ref="inputUserMainMenu" v-b-toggle.userMainMenu class="btn text-light p-0 rounded-circle shadow-sm" style="width: 40px; height: 40px; background:url(http://mobitoon.ru/novelist/images/users/0/preview.svg) no-repeat center / 40px;" type="button">
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
                    <button class="btn btn-sm btn-success" v-b-modal.modalSignUp type="button" data-toggle="modal" data-target="#modalSignUp"><font-awesome-icon icon="user-plus" /><span class="d-none d-md-inline ml-md-2">Sign up</span></button>
                </div>
            </div>
        </div>
        <div class="nav-scroller position-absolute w-100 bg-light shadow-sm z-index-1">
            <b-collapse ref="collapseBookInfo" id="collapseBookInfo" class="py-3 py-sm-5 px-0 px-sm-3" v-click-outside="closeBookInfo">
                <div class="container">
                    <div class="mx-auto">
                        {{ bookId }}
                        <hr>
                        {{ book === null ? 'null' : book  }}
                        <h1>collapseBookInfo</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit ipsa at? Consequatur molestias debitis iste optio suscipit neque vero tempora autem quae alias rerum dignissimos, ad fuga tempore nihil.
                    </div>
                </div>
            </b-collapse>
            <b-collapse ref="collapseTableLists" id="collapseTableLists" class="py-3 py-sm-5 px-0 px-sm-3" v-click-outside="closeTableLists">
                <div class="container">
                    <div class="mx-auto">
                        <h1>collapseTableLists</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit ipsa at? Consequatur molestias debitis iste optio suscipit neque vero tempora autem quae alias rerum dignissimos, ad fuga tempore nihil.
                    </div>
                </div>
            </b-collapse>
            <b-collapse ref="collapseViewSettings" id="collapseViewSettings" class="py-3 py-sm-5 px-0 px-sm-3" v-click-outside="closeViewSettings">
                <div class="container">
                    <span class="h5 d-inline-block mb-3"><i class="fas fa-adjust mr-2"></i>Color mode</span>
                    <div class="btn-group d-flex" role="group" aria-label="Color model">
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
                    <span class="h5 d-inline-block my-3"><i class="fas fa-text-height mr-2"></i>Text size</span>
                    <div class="btn-group d-flex" role="group" aria-label="Color model">
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
                book: null
            }
        },
        computed: {
            isAuthenticated() { return this.$store.getters.isCurrentUserLoaded },
            bookId() { return this.$route.params.id }
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
            changeColorMode(mode) {
                return this.$parent.settings.reader.colorMode = mode
            },
            isColorMode(mode) {
                return this.$parent.settings.reader.colorMode === mode ? true : false
            },
            changeTextSize(size) {
                return this.$parent.settings.reader.textSize = size
            },
            isTextSize(size) {
                return this.$parent.settings.reader.textSize === size ? true : false
            },

            setBook(book) { this.book = book },
            showBookInfo() {
                console.log(client.findBook(this.bookId))
                // client.findBook(to.params.id).then(book => {
                //     next(vm => vm.setBook(book))
                // })
            }
        }
    }
</script>
