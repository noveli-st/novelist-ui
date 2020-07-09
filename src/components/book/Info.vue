<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 col-xl-9">
                <div class="card border-0 mb-4 shadow-sm">
                    <div class="card-header">
                        <div class="my-0 h5" role="heading" aria-level="2">Annotation</div>
                    </div>
                    <div class="card-body">
                        <l-html-text :text="$parent.book.annotation"/>
                    </div>
                </div>
                <div class="card border-0 mb-4 shadow-sm">
                    <div class="card-header">
                        <div class="my-0 h5" role="heading" aria-level="2">Table of contents</div>
                    </div>
                    <div class="card-body px-3">
                        <div v-if="this.$parent.book.status" class="alert alert-success border-0">
                            <font-awesome-icon icon="check-square" size="lg" class="mr-3"></font-awesome-icon>
                            The book is completed.
                        </div>
                        <div v-else class="alert alert-secondary border-0">
                            <font-awesome-icon icon="pen-square" size="lg" class="mr-3"></font-awesome-icon>
                            <template v-if="bookPrice">The book is still underway and you can it buy a subscription...</template>
                            <template v-else>The book is still underway...</template>
                        </div>
                        <div class="scroll-box scroll-box-y">
                            <header class="scroll-box-header t-0">
                                <div class="d-flex flex-row py-3 px-1 bg-white">
                                    <div class="pr-4">
                                        <span class="position-absolute">#</span>
                                    </div>
                                    <div class="flex-grow-1 px-1">Path name</div>
                                    <div>Published</div>
                                </div>
                                <hr class="my-0">
                            </header>
                            <div class="scroll-box-body px-1 small">
                                <div v-for="chapter in this.$parent.book.chapters" v-bind:key="chapter.order" class="d-flex flex-row mt-3">
                                    <div class="pr-4">
                                        <span class="position-absolute">{{ chapter.order }}</span>
                                    </div>
                                    <div class="d-flex align-items-center flex-grow-1 px-1">
                                        <template v-if="bookPrice">
                                            <font-awesome-icon v-if="chapter.order - 1" icon="lock" size="sm" class="mr-2 text-muted"></font-awesome-icon>
                                            <font-awesome-icon v-else icon="unlock" size="sm" class="mr-2 text-success"></font-awesome-icon>
                                            <a href="reader.html">{{ chapter.title }}</a>
                                        </template>
                                        <template v-else>
                                            <font-awesome-icon icon="unlock" size="sm" class="mr-2 text-success"></font-awesome-icon><a href="reader.html">{{ chapter.title }}</a>
                                        </template>
                                    </div>
                                    <time class="text-nowrap" v-bind:datetime="chapter.published">{{ (new Date(chapter.published)).toLocaleDateString() }}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 col-xl-3">
                <div class="card border-0 mb-4 shadow-sm d-none d-lg-flex">
                    <div class="card-header">
                        <div class="mb-0 h5" role="heading" aria-level="2">Author</div>
                    </div>
                    <div class="position-relative">
                        <div class="position-absolute d-flex w-100 p-2">
                            <div class="small text-muted my-auto">
                                <!-- <span class="ml-2" data-toggle="tooltip" data-placement="top" title="Followers"><sup><i class="fas fa-long-arrow-alt-down"></i></sup><i class="fas fa-user mr-1"></i>29</span>
                                <span class="ml-2" data-toggle="tooltip" data-placement="top" title="Following"><sup><i class="fas fa-long-arrow-alt-up"></i></sup><i class="fas fa-user mr-1"></i>174</span> -->
                            </div>
                            <template v-if="this.$parent.isAuthenticated">
                                <button class="btn btn-sm btn-outline-primary ml-auto" type="button"><font-awesome-icon icon="user-check" class="mr-2"></font-awesome-icon>Follow</button>
<!--                        <button class="btn btn-sm btn-primary" type="button"><i class="fas fa-user-minus mr-2"></i>Unfollow</button>-->
                            </template>
                            <span v-else class="d-inline-block ml-auto" tabindex="0" v-b-tooltip.hover.v-info title="Only registered users can follow! Please Sign in...">
                                <button class="btn btn-sm btn-outline-primary" type="button" disabled><font-awesome-icon icon="user-check" class="mr-2"></font-awesome-icon>Follow</button>
                            </span>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <div class="pl-4 pt-4 pr-4 pb-2">
                            <img class="rounded-circle shadow-sm overflow-hidden" :alt="this.$parent.book.author.name" :src="userAvatarUrl" @error="userAvatarUrlError">
                        </div>
                        <span class="h5 text-center text-ellipsis mb-2">{{ this.$parent.book.author.name }}</span>
                        <div class="mb-2">
                            <span v-if="this.$parent.book.author.books" class="badge badge-secondary mr-1 cursor-default" v-b-tooltip.hover title="... has written a book">
                                <font-awesome-icon icon="pen-alt" class="mr-1"></font-awesome-icon>{{ this.$parent.book.author.books }}
                            </span>
                            <span v-if="this.$parent.book.author.reviews" class="badge badge-secondary mr-1 cursor-default" v-b-tooltip.hover title="... has given review of a book">
                                <font-awesome-icon icon="glasses" class="mr-1"></font-awesome-icon>{{ this.$parent.book.author.reviews }}
                            </span>
                            <span v-if="this.$parent.book.author.reads" class="badge badge-secondary mr-1 cursor-default" v-b-tooltip.hover title="... had read a book">
                                <font-awesome-icon icon="book-reader" class="mr-1"></font-awesome-icon>{{ this.$parent.book.author.reads }}
                            </span>
                        </div>
                        <!-- <time class="d-block small text-muted" datetime="2019-10-22T21:30"><i class="fas fa-calendar-day mr-2"></i><span class="font-weight-bold">Joined:</span> 22 October 2018</time> -->
                        <time class="d-inline-block small text-muted" v-bind:datetime="this.$parent.book.author.created"><font-awesome-icon icon="calendar-day" class="mr-2"></font-awesome-icon><span class="font-weight-bold mr-1">Joined:</span>{{ (new Date(this.$parent.book.author.created)).toLocaleDateString() }}</time>
                        <div v-if="this.$parent.book.author.website || this.$parent.book.author.facebook || this.$parent.book.author.instagram || this.$parent.book.author.twitter">
                            <hr>
                            <a v-if="this.$parent.book.author.website" class="mx-2" v-bind:href="this.$parent.book.author.website" v-b-tooltip.hover.focus title="Website"><font-awesome-icon icon="globe" size="lg"></font-awesome-icon></a>
                            <a v-if="this.$parent.book.author.facebook" class="mx-2" v-bind:href="this.$parent.book.author.facebook" v-b-tooltip.hover.focus title="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" size="lg"></font-awesome-icon></a>
                            <a v-if="this.$parent.book.author.instagram" class="mx-2" v-bind:href="this.$parent.book.author.instagram" v-b-tooltip.hover.focus title="Twitter"><font-awesome-icon :icon="['fab', 'instagram']" size="lg"></font-awesome-icon></a>
                            <a v-if="this.$parent.book.author.twitter" class="mx-2" v-bind:href="this.$parent.book.author.twitter" v-b-tooltip.hover.focus title="Instagram"><font-awesome-icon :icon="['fab', 'twitter']" size="lg"></font-awesome-icon></a>
                        </div>
                    </div>
                    <div class="card-footer mt-auto">
                        <router-link class="btn btn-block btn-primary" v-bind:to="`/profile/${this.$parent.book.author.id}/info`">View profile</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookInfo',
        data () {
            return {
                bookPrice: this.$parent.book.price,
                userAvatarUrl: `http://mobitoon.ru/novelist/images/users/${this.$parent.book.author.id}/preview.jpg`
            }
        },
        methods: {
            userAvatarUrlError(event){
                event.target.src = "http://mobitoon.ru/novelist/images/users/0/preview.svg"
            }
        }
    }
</script>
