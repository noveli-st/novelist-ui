<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 col-xl-9">
                <div class="card border-0 mb-4 shadow-sm">
                    <div class="card-header">
                        <div class="my-0 h5" role="heading" aria-level="2">Annotation</div>
                    </div>
                    <div class="card-body">
                        {{ this.$parent.book.annotation }}
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
                                    <div class="flex-grow-1 px-1">
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
                                <span class="ml-2" data-toggle="tooltip" data-placement="top" title="Followers"><sup><i class="fas fa-long-arrow-alt-down"></i></sup><i class="fas fa-user mr-1"></i>29</span>
                                <span class="ml-2" data-toggle="tooltip" data-placement="top" title="Following"><sup><i class="fas fa-long-arrow-alt-up"></i></sup><i class="fas fa-user mr-1"></i>174</span>
                            </div>
<!--                            <button class="btn btn-sm btn-primary ml-auto" type="button"><i class="fas fa-user-minus mr-2"></i>Unfollow</button>-->
                            <button class="btn btn-sm btn-outline-primary ml-auto" type="button"><i class="fas fa-user-check mr-2"></i>Follow</button>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <div class="pl-4 pt-4 pr-4 pb-2">
                            <div class="rounded-circle shadow-sm" style="background: url(images/users/0/preview.svg) no-repeat scroll center center / cover;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><title>Имя пользователя не слабое</title></svg>
                            </div>
                        </div>
                        <span class="h5 text-center text-ellipsis mb-2">Имя писателя книги</span>
                        <div class="mb-2">
                            <span class="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title="... has written a book"><i class="fas fa-pen-alt mr-1"></i>3</span>
                            <span class="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title="... has given review of a book"><i class="fas fa-glasses mr-1"></i>32</span>
                            <span class="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title="... had read a book"><i class="fas fa-book-reader mr-1"></i>180</span>
                        </div>
                        <time class="d-block small text-muted" datetime="2019-10-22T21:30"><i class="fas fa-calendar-day mr-2"></i><span class="font-weight-bold">Joined:</span> 22 October 2018</time>
                        <hr>
                        <div>
                            <a class="mx-1" href="#" data-toggle="tooltip" data-placement="top" title="Website"><i class="fas fa-globe fa-lg"></i></a>
                            <a class="mx-1" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fab fa-facebook fa-lg"></i></a>
                            <a class="mx-1" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fab fa-twitter fa-lg"></i></a>
                            <a class="mx-1" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fab fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div class="card-footer mt-auto">
                        <a class="btn btn-block btn-primary" href="profile.html">View profile</a>
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
                bookPrice: this.$parent.book.price 
            }
        }
	}
</script>