<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 col-xl-9">
                <div class="card border-0 mb-4 shadow-sm">
                    <div class="card-header">
                        <h2 class="h5 my-0">Annotation</h2>
                    </div>
                    <div class="card-body">
                        {{ this.$parent.book.annotation }}
                    </div>
                </div>
                <div class="card border-0 mb-4 shadow-sm">
                    <div class="card-header">
                        <h2 class="h5 my-0">Table of contents</h2>
                    </div>
                    <div class="card-body px-3">
                        <div v-if="this.$parent.book.status" class="alert alert-success border-0"><font-awesome-icon icon="check-square" class="mr-2"></font-awesome-icon>The book is completed.</div>
                        <div v-else class="alert alert-secondary border-0"><font-awesome-icon icon="pen-square" class="mr-2"></font-awesome-icon>The book is still underway...</div>
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

                                <!--div v-for="book in this.$parent.userProfile.books" v-bind:key="book.id" class="d-flex flex-row mt-3">
                                    <div class="pr-4">
                                        <span class="position-absolute">{{ book.id }}</span>
                                    </div>
                                    <div class="flex-grow-1 px-1 text-ellipsis">
                                        <a href="reader.html">...</a>
                                    </div>
                                    <div class="px-1 text-success">...</div>
                                    <time class="d-none d-md-block text-nowrap w-25 text-right" datetime="2019-01-1">...</time>
                                </div-->


                                <div v-for="chapter in this.$parent.book.chapters" v-bind:key="chapter.order" class="d-flex flex-row mt-3">
                                    <div class="pr-4">
                                        <span class="position-absolute">{{ chapter.order }}</span>
                                    </div>
                                    <div class="flex-grow-1 px-1">
										<template v-if="!chapter.price || chapter.order >= 2">
											<font-awesome-icon icon="unlock" size="sm" class="mr-2 text-success"></font-awesome-icon><a href="reader.html">{{ chapter.title }}</a>
										</template>
										<template v-else>
											<font-awesome-icon icon="lock" size="sm" class="mr-2 text-muted"></font-awesome-icon><a href="reader.html">{{ chapter.title }}</a>
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
				..
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'BookInfo'
	}
</script>