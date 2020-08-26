<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 col-xl-9">

                <div id="profileAbout" class="card border-0 mb-4">
                    <div class="card-header border-bottom-0">
                        <h2 class="h5 my-0">About me</h2>
                    </div>
                    <div class="card-body">
                        <div v-if="!this.$parent.userProfile.about.length" class="alert alert-secondary border-0 mb-0">
                           <font-awesome-icon icon="frown" size="lg" class="mr-3"></font-awesome-icon>{{ this.$parent.userProfile.name }} chose not to tell anything about themselves.
                        </div>
                        {{ this.$parent.userProfile.about }}
                    </div>
                </div>

                <div v-if="this.$parent.userProfile.books.length" class="card border-0 mb-4">
                    <div class="card-header border-bottom-0">
                        <h2 class="h5 my-0">My books</h2>
                    </div>
                    <div class="card-body">
                        <div class="scroll-box scroll-box-y">
                            <header class="scroll-box-header t-0">
                                <div class="d-flex flex-row pb-3 px-1 bg-white">
                                    <div class="pr-4">
                                        <span class="position-absolute">#</span>
                                    </div>
                                    <div class="flex-grow-1 px-1">Book title</div>
                                    <div class="d-none d-md-block w-25 text-right">Last edited</div>
                                </div>
                                <hr class="my-0">
                            </header>
                            <div class="scroll-box-body px-1 small">
                                <div v-for="(book, index) in this.$parent.userProfile.books" v-bind:key="book.id" class="d-flex flex-row mt-3">
                                    <div class="pr-4">
                                        <span class="position-absolute">{{ index + 1 }}</span>
                                    </div>
                                    <div class="flex-grow-1 px-1 text-truncate">
                                        <router-link v-bind:to="`/book/${book.id}`" v-bind:class="[{ 'text-warning': book.price }, 'text-success']">{{ book.title }}</router-link>
                                    </div>
                                    <time class="d-none d-md-block text-nowrap w-25 text-right" v-bind:datetime="book.lastEdited">{{ (new Date(book.lastEdited)).toLocaleDateString() }}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-top-0 text-right">
                        <router-link v-bind:to="'books'" class="small">View all<font-awesome-icon icon="arrow-alt-circle-right" class="ml-2"></font-awesome-icon></router-link>
                    </div>
                </div>

            </div>
            <div class="col-12 col-lg-4 col-xl-3">
                <div class="card border-0 mb-4">
                    <div class="card-header border-bottom-0">
                        <h2 class="h5 my-0">Activity</h2>
                    </div>
                    <div class="card-body">
                        ...
                    </div>
                    <div class="card-footer bg-transparent border-top-0 text-right">
                        <router-link v-bind:to="'activity'" class="small">View all<font-awesome-icon icon="arrow-alt-circle-right" class="ml-2"></font-awesome-icon></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import client from 'api-client';
    // import toast from '../../util/toast';

    export default {
        name: 'ProfileInfo'
        // data() {
        //     return {
        //         userProfile: null
        //     }
        // },
        // computed: {
        //     isAuthenticated() { return this.$store.getters.isCurrentUserLoaded; }
        // },
        // methods: {
        //     setProfile(userProfile) {
        //         toast.success('Profile loaded');
        //         this.userProfile = userProfile;
        //     }
        // },
        // beforeRouteEnter(to, from, next) {
        //     toast.info(`Loading ${to.params.id} profile`);
        //     client.findProfile(to.params.id).then(profile =>
        //         next(vm => vm.setProfile(profile)));
        // }
    }
</script>
