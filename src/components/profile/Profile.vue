<template>
    <main class="min-vh-100" v-if="userProfile">
        <div class="py-3 py-sm-5 px-0 px-sm-3">
            <div class="container mx-auto text-dark">
                <div class="row">
                    <div class="col-md-5 col-lg-4 text-center">
                        <img class="broken img-fluid rounded-circle shadow-sm" v-bind:src="userAvatarUrl" @error="userAvatarUrlError" alt="User name">
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h1 class="my-3 mt-md-0">{{ userProfile.name }}</h1>
                        <span v-if="userProfile.books" class="badge badge-dark mb-3 mr-1" v-b-tooltip.hover title="... has written a book">
                            <font-awesome-icon icon="pen-alt" class="mr-1"></font-awesome-icon>Writer
                        </span>
                        <span v-if="userProfile.reviews" class="badge badge-dark mb-3 mr-1" v-b-tooltip.hover title="... has given review of a book">
                            <font-awesome-icon icon="glasses" class="mr-1"></font-awesome-icon>Reviewer
                        </span>
                        <span class="badge badge-dark mb-3 mr-1" v-b-tooltip.hover title="... had read a book">
                            <font-awesome-icon icon="book-reader" class="mr-1"></font-awesome-icon>Reader
                        </span>
                        <p>
                            {{ userProfile.status }}
                        </p>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="calendar-day" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Joined:</b>
                                    <time class="col-8 col-lg-9 pl-0" v-bind:datetime="userProfile.created">{{ (new Date(userProfile.created)).toLocaleString() }}</time>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="directions" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Type:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="mr-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="#">Name of a book type</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Genre:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="mr-1 px-1 bg-primary rounded text-white text-nowrap text-decoration-none" href="#">Name of a book genre</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="map-marker-alt" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Address:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        {{ userProfile.location }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="phone" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">Phone:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="text-nowrap text-decoration-none" v-bind:href="`tel:${userProfile.phone}`">{{ userProfile.phone }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small mb-2">
                            <div class="position-absolute"><font-awesome-icon icon="at" class="mr-1"></font-awesome-icon></div>
                            <div class="ml-2 pl-3">
                                <div class="row">
                                    <b class="col-4 col-lg-3 pr-0">eMail:</b>
                                    <div class="col-8 col-lg-9 pl-0">
                                        <a class="text-nowrap text-decoration-none" v-bind:href="`mailto:${userProfile.email}`">{{ userProfile.email }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-5 col-lg-4">
                        <div class="d-flex mb-2 mb-md-0">
                            <button class="btn flex-grow-1 btn-primary" type="button">
                                <font-awesome-icon icon="hand-holding-usd" class="mr-2"></font-awesome-icon>Make a donation
                            </button>
                        </div>
                        <hr class="d-md-none">
                    </div>
                    <div class="col-md-7 col-lg-8 mt-auto text-center text-md-right">

                        <b-dd id="userShareDropMenu" no-caret size="sm" variant="primary" menu-class="p-0 overflow-hidden" class="mr-1">
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
                            <button class="btn btn-sm btn-outline-primary mr-1" type="button"><font-awesome-icon icon="user-check" class="mr-2"></font-awesome-icon>Follow</button>
<!--                        <button class="btn btn-sm btn-primary" type="button"><i class="fas fa-user-minus mr-2"></i>Unfollow</button>-->
                        </template>
                        <span v-else class="d-inline-block" tabindex="0" v-b-tooltip.hover.v-info title="Only registered users can follow! Please Sign in...">
                            <button class="btn btn-sm btn-outline-primary mr-1" type="button" disabled><font-awesome-icon icon="user-check" class="mr-2"></font-awesome-icon>Follow</button>
                        </span>
                        <button class="btn btn-sm btn-danger" v-b-tooltip.hover.focus title="Report a violation" type="button"><font-awesome-icon icon="ban"></font-awesome-icon></button> <!-- disabled если на своей странице -->
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-6 col-sm-5 col-lg-4 text-md-center">
                        <span class="font-weight-bold d-none d-md-inline-block">User rating:</span>
                        <!--span id="userRating" class='starrr text-nowrap'
                        data-toggle="popover" data-trigger="focus" data-placement="top"
                        title="Как проголосовать?"
                        data-content="Никак! Рейтинг пользователя формируется автоматически."></span-->
                    </div>
                    <div class="col-6 col-sm-7 col-lg-8 text-right">
                        <div class="mx-n1">
                            <a v-if="userProfile.website" class="mx-2" v-bind:href="userProfile.website" v-b-tooltip.hover.focus title="Website"><font-awesome-icon icon="globe" size="lg"></font-awesome-icon></a>
                            <a v-if="userProfile.facebook" class="mx-2" v-bind:href="userProfile.facebook" v-b-tooltip.hover.focus title="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" size="lg"></font-awesome-icon></a>
                            <a v-if="userProfile.instagram" class="mx-2" v-bind:href="userProfile.instagram" v-b-tooltip.hover.focus title="Twitter"><font-awesome-icon :icon="['fab', 'instagram']" size="lg"></font-awesome-icon></a>
                            <a v-if="userProfile.twitter" class="mx-2" v-bind:href="userProfile.twitter" v-b-tooltip.hover.focus title="Instagram"><font-awesome-icon :icon="['fab', 'twitter']" size="lg"></font-awesome-icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="nav-scroller position-relative overflow-hidden border-bottom bg-light shadow-sm mb-4">
            <nav class="nav d-flex flex-nowrap overflow-auto pb-0 container">
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'info'">
                    <font-awesome-icon icon="id-card"></font-awesome-icon>
                </router-link >
                <span class="nav-link border-left px-0"></span>
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'books'">
                    Books<span class="badge badge-pill ml-1 bg-secondary text-light">7</span>
                </router-link><!-- мои книги -->
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'cycles'">
                    Cycles<span class="badge badge-pill ml-1 bg-secondary text-light">2</span>
                </router-link><!-- мои циклы -->
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'reviews'">
                    Reviews<span class="badge badge-pill ml-1 bg-secondary text-light">189&#8226;16</span>
                </router-link ><!-- мои подписчики * я подписан -->
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'library'">
                    Library<span class="badge badge-pill ml-1 bg-secondary text-light">2&#8226;3&#8226;3</span>
                </router-link ><!-- я читаю * я прочел * в закладках -->
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'follows'">
                    Follows<span class="badge badge-pill ml-1 bg-secondary text-light">127&#8226;6</span>
                </router-link ><!-- я слежу * за мной следят -->
                <router-link class="nav-link text-nowrap" active-class="disabled" v-bind:to="'activity'">
                    Activity
                </router-link>
            </nav>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
    import client from 'api-client';
    import toast from '../../util/toast';

    export default {
        name: 'Profile',
        data() {
            return {
                userProfile: null
            }
        },
        computed: {
            isAuthenticated() { return this.$store.getters.isCurrentUserLoaded; },
            userAvatarUrl() {
                const id = this.userProfile ? this.userProfile.id : 0; 
                return `http://mobitoon.ru/novelist/images/users/${id}/preview.jpg`;
            }
        },
        methods: {
            userAvatarUrlError(event) {
                event.target.src = "http://mobitoon.ru/novelist/images/users/0/preview.svg"
            },
            setProfile(userProfile) {
                toast.success('Profile loaded');
                this.userProfile = userProfile;
            }
        },
        beforeRouteEnter(to, from, next) {
            toast.info(`Loading ${to.params.id} profile`);
            client.findProfile(to.params.id).then(profile =>
                next(vm => vm.setProfile(profile)));
        }
    }
</script>
