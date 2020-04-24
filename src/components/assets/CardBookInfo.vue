<template>
    <div class="card border-0 mb-3 shadow-sm">
        <div class="card-header">
           <div class="mb-0 h5 text-truncate" role="heading" aria-level="2">{{ book.title }}</div>
        </div>
        <div class="d-flex align-items-start flex-column flex-md-row">
            <div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer w-tmp expand-image"
                v-bind:style="{'background' : `url(${bookCoverPreviewUrl}) no-repeat scroll center center / cover`}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                    <!-- <title>{{ book.title }}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title>
                    <template v-if="book.discount">
                        <polygon fill="#D4145A" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                        <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                    </template> -->
                </svg>
            </div>
            <div class="row p-3 flex-grow-1 text-muted">
                <div class="col-12 col-lg-6">
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="calendar-day"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Published:</b>
                                <time class="col-6 pl-0" :datetime="book.published">{{ (new Date(book.published)).toLocaleString() }}</time>
                            </div>
                            <div class="row">
                                <b class="col-6 pr-0">Last edited:</b>
                                <time class="col-6 pl-0" :datetime="book.lastEdited">{{ (new Date(book.lastEdited)).toLocaleString() }}</time>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="book"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Book status:</b>
                                <div class="col-6 pl-0">
                                    <span v-if="book.status" class="text-success">Completed book</span>
                                    <span v-else>Still underway...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="link"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Cycle:</b>
                                <div class="col-6 pl-0">
                                    {{ book.cycle.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="book-open"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Chapters:</b>
                                <div class="col-6 pl-0">{{ book.chapters.length }}</div>
                            </div>
                            <div class="row">
                                <b class="col-6 pr-0">Pages:</b>
                                <div class="col-6 pl-0">{{ book.pages }}</div>
                            </div>
                            <div class="row">
                                <b class="col-6 pr-0">Symbols:</b>
                                <div class="col-6 pl-0">{{ book.symbols }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="paperclip"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Mentions:</b>
                                <div class="col-6 pl-0">
                                    {{ book.mentions.length }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="images"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Illustrations:</b>
                                <div class="col-6 pl-0">
                                    {{ book.illustrations.length }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="download"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">eBook:</b>
                                <div class="col-6 pl-0">
                                    <span v-if="book.ebook" class="text-success">Avaliable</span>
                                    <span v-else class="text-warning" v-b-tooltip.hover.top title="Not good idea disable ebook">Disabled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="star-half-alt"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Rating:</b>
                                <div class="col-6 pl-0">{{ book.rate }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="money-bill"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Price:</b>
                                <div class="col-6 pl-0">
                                    <span v-if="book.price">${{ (book.price * (100 - book.discount) / 100).toFixed(2) }}<span v-if="book.discount" class="text-warning ml-2">Old: ${{ book.price.toFixed(2) }}</span></span>
                                    <span v-else class="text-success">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small mb-2">
                        <div class="position-absolute"><font-awesome-icon icon="percentage"></font-awesome-icon></div>
                        <div class="ml-2 pl-3">
                            <div class="row">
                                <b class="col-6 pr-0">Discount:</b>
                                <div class="col-6 pl-0">
                                    <span v-if="book.discount">{{ book.discount }}% </span>
                                    <span v-else>
                                        <template v-if="book.price">Full price</template>
                                        <template v-else>Not avaliable</template>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--div class="small mb-2">
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
                    </div-->
                </div>
            </div>
        </div>
        <div class="card-footer">
            <router-link v-bind:to="`/book/${book.id}/edit/content`" class="btn btn-sm btn-primary mr-1"><font-awesome-icon icon="edit"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Edit</span></router-link>
            <router-link v-bind:to="`/book/${book.id}/edit/settings`" class="btn btn-sm btn-primary mr-1"><font-awesome-icon icon="cog"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Settings</span></router-link>
            <router-link v-bind:to="`/book/${book.id}/edit/mentions`" class="btn btn-sm btn-primary mr-1"><font-awesome-icon icon="paperclip"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Mentions</span></router-link>
            <b-dd id="bookShareDropMenu" no-caret size="sm" variant="primary" menu-class="p-0 overflow-hidden shadow-sm" class="mr-1">
                <template slot="button-content"><font-awesome-icon icon="eye" class="mr-2"></font-awesome-icon>Preview</template>
                <b-dd-item variant="primary" v-bind:to="`/book/${book.id}/`">
                    <span class="d-block py-1"><font-awesome-icon icon="book" class="mr-2"></font-awesome-icon>Book page</span>
                </b-dd-item>
                <b-dd-item variant="primary" v-bind:to="`/reader/${book.id}/`" target="_blank">
                    <span class="d-block py-1"><font-awesome-icon icon="book-open" class="mr-2"></font-awesome-icon>Reader page</span>
                </b-dd-item>
            </b-dd>
            <router-link v-bind:to="`/book/${book.id}/edit/terminate`" class="btn btn-sm btn-danger float-right"><font-awesome-icon icon="trash"></font-awesome-icon><span class="ml-2 d-none d-sm-inline-block">Delete</span></router-link>
        </div>                            
    </div>

</template>

<script>

    export default {
        name: 'CardBookInfo',
        data(){
            return {
                bookCoverPreviewUrl: `http://mobitoon.ru/novelist/images/books/${this.book.id}/preview.jpg`
            }
        },
        methods: {
            userAvatarUrlError(event){
                event.target.src = "http://mobitoon.ru/novelist/images/users/0/preview.svg"
            }
        },
        computed:{
            discountPrice(){
                if(this.book.discount)
                    return (this.book.price * (100 - this.book.discount) / 100).toFixed(2)
                else
                    return this.book.price
            }
        },
        props: ['book']
    }
</script>
