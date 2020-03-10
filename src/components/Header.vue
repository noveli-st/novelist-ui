<template>
    <header>
        <div class="p-2 bg-dark text-light d-flex flex-nowrap align-items-center">
            <router-link v-bind:to="'/'" title="Novelist - share your impressions">
                <img class="d-sm-none" src="../assets/images/logo/logo.svg" height="40" alt="Novelist">
                <img class="d-none d-sm-block " src="../assets/images/logo/logoname.svg" height="40" alt="Novelist">
            </router-link>
            <div class="ml-auto d-flex align-items-center">
                <button ref="buttonGlobalSearch" v-b-toggle.collapseGlobalSearch class="btn btn-sm text-light mx-2" type="button"><font-awesome-icon icon="search" size="lg" /></button>
                <div v-if="isAuthorized" class="position-relative d-inline-block mx-2">
                    <input ref="inputUserMainMenu" v-b-toggle.userMainMenu class="btn text-light p-0 rounded-circle shadow-sm" style="width: 40px; height: 40px; background:url(http://mobitoon.ru/novelist/images/users/0/preview.svg) no-repeat center / 40px;" type="button">
                    <b-collapse ref="userMainMenu" id="userMainMenu" class="position-absolute r-0 mt-1 rounded overflow-hidden shadow-sm bg-white z-index-1" style="min-width: 320px; max-width: 320px;" v-on-click-outside="closeMainMenu">
                        <router-link class="d-flex btn btn-light btn-block border-0 rounded-0 m-0 p-3 text-decoration-none disable-events" active-class="active" v-bind:to="'Profile'">
                            <font-awesome-icon icon="id-card" class="my-auto" /><span class="ml-auto pl-2 text-truncate">{{ this.$store.state.me.name }}</span>
                        </router-link>
                        <hr class="my-0">
                        <router-link class="btn btn-outline-secondary btn-block border-0 rounded-0 text-left text-nowrap m-0 px-3 py-3 disable-events" active-class="active" v-bind:to="'Wallet'"><font-awesome-icon icon="wallet" class="mr-2" />Wallet <span class="float-right">$201.00</span></router-link>
                        <div class="d-flex flex-wrap">
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'MyLibrary'"><font-awesome-icon icon="book-reader" size="2x" /><div class="small">Library</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'MyReviews'"><font-awesome-icon icon="glasses" size="2x" /><div class="small">Reviews</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'MyBooks'"><font-awesome-icon icon="pen-alt" size="2x" /><div class="small">Workroom</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'Comments'"><font-awesome-icon icon="comments" size="2x" /><div class="small">Comments</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-3 col-4 disable-events" active-class="active" v-bind:to="'Statistics'"><font-awesome-icon icon="chart-area" size="2x" /><div class="small">Stats</div></router-link>
                        </div>
                        <hr class="my-0">
                        <div class="d-flex flex-wrap">
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'Inbox'"><font-awesome-icon icon="inbox" size="lg" /><div class="small text-truncate">Inbox</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'Account'"><font-awesome-icon icon="user-cog" size="lg" /><div class="small">Account</div></router-link>
                            <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'GetHelp'"><font-awesome-icon icon="question-circle" size="lg" /><div class="small text-truncate">Get help</div></router-link>
                        </div>
                        <hr class="my-0">
                        <button class="btn btn-light btn-block border-0 rounded-0 text-right px-3 py-2" type="button">Sign out<font-awesome-icon icon="sign-out-alt" class="ml-2" /></button>
                    </b-collapse>
                </div>
                <div v-else class="btn-group btn-group-sm mx-2">
                    <button class="btn btn-sm btn-primary" v-b-modal.modalSignIn type="button"><font-awesome-icon icon="sign-in-alt" /><span class="d-none d-md-inline ml-md-2">Sign in</span></button>
                    <button class="btn btn-sm btn-success" v-b-modal.modalSignUp type="button" data-toggle="modal" data-target="#modalSignUp"><font-awesome-icon icon="user-plus" /><span class="d-none d-md-inline ml-md-2">Sign up</span></button>
                </div>
            </div>
        </div>
        <div class="nav-scroller position-absolute w-100 bg-light shadow-sm z-index-1">
            <b-collapse ref="collapseGlobalSearch" id="collapseGlobalSearch" class="py-3 py-sm-5 px-0 px-sm-3" v-on-click-outside="closeGlobalSearch">
                <div class="container">
                    <div class="mx-auto">
                        <cmp-cls-input type="search" placeholder="Search" aria-label="Search"/>
                        <div class="row">
                            <div class="col mt-3">
                                <span class="text-muted"><font-awesome-icon class="mx-2" icon="pen-nib" />Content</span>
                                <hr class="mt-2 mb-0">
                                <router-link class="d-inline-block text-decoration-none text-nowrap p-2 disable-events" active-class="text-muted" v-bind:to="'/books'" v-on:click.native="closeGlobalSearch">Books <span class="badge badge-pill bg-secondary text-light">4201</span></router-link>
                                <router-link class="d-inline-block text-decoration-none text-nowrap p-2 disable-events" active-class="text-muted" v-bind:to="'/reviews'" v-on:click.native="closeGlobalSearch">Reviews <span class="badge badge-pill bg-secondary text-light">137</span></router-link>
                            </div>
                            <div class="col mt-3">
                                <span class="text-muted"><font-awesome-icon class="mx-2" icon="users" />Community</span>
                                <hr class="mt-2 mb-0">
                                <router-link class="d-inline-block text-decoration-none text-nowrap p-2 disable-events" active-class="text-muted" v-bind:to="'/writers'" v-on:click.native="closeGlobalSearch">Writers <span class="badge badge-pill bg-secondary text-light">201</span></router-link>
                                <router-link class="d-inline-block text-decoration-none text-nowrap p-2 disable-events" active-class="text-muted" v-bind:to="'/reviewers'" v-on:click.native="closeGlobalSearch">Reviewers <span class="badge badge-pill bg-secondary text-light">731</span></router-link>
                                <!-- <a class="d-inline-block text-decoration-none text-nowrap p-2" href="#">Readers <span class="badge badge-pill bg-secondary text-light">1186</span></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </b-collapse>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            isAuthorized() { return this.$store.getters.isAuthorized; }
        },
        methods: {
            closeGlobalSearch(ev) {
                if (!this.$refs.buttonGlobalSearch.contains(ev.target)) {
                    this.$refs.collapseGlobalSearch.show = false
                }
            },
            closeMainMenu(ev) {
                if (!this.$refs.inputUserMainMenu.contains(ev.target)) {
                    this.$refs.userMainMenu.show = false
                }
            }
        },
        // mounted() {
        //     this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
        //         if( collapseId == 'collapseGlobalSearch' && isJustShown)
        //             document.querySelector("#collapseGlobalSearch input").focus();
        //     })
        // }
    }
</script>
