<template>

    <div class="card border-0 mb-4 shadow-sm">
        <div class="card-header">
            <router-link class="d-flex align-items-center text-decoration-none" v-bind:to="`/profile/${book.author.id}/info`">
                <img class="image-42 mr-3 rounded-circle shadow-sm overflow-hidden" :alt="book.author.name" :src="userAvatarUrl" @error="userAvatarUrlError">
                <span class="text-truncate">
                    {{ book.author.name }}
                    <time class="d-block text-muted small mb-1-" :datetime="book.published"><font-awesome-icon icon="calendar-day" class="mr-2"></font-awesome-icon>{{ (new Date(book.published)).toLocaleDateString() }}</time>
                </span>
            </router-link>
        </div>
        <router-link v-bind:to="`/book/${book.id}`" class="card-body h6 mb-0 text-truncate py-3" v-b-tooltip.hover.top :title="book.title">
            {{ book.title }}
        </router-link>
        <div class="d-flex align-items-start">
            <div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer w-tmp expand-image"
                v-bind:style="{'background' : `url(${bookCoverPreviewUrl}) no-repeat scroll center center / cover`}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                    <title>{{ book.title}}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title>
                    <template v-if="book.discount">
                        <polygon fill="#D4145A" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                        <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                    </template>
                </svg>
            </div>
            <div class="card-body card-status py-0 text-muted">
                <div class="mb-2">
                    <rate v-bind:length="5" v-bind:value="book.rate" v-bind:showcount="true" v-bind:readonly="true"></rate>
                </div>
                <div class="small mb-2">
                    <span class="position-absolute"><font-awesome-icon icon="directions"></font-awesome-icon></span>
                    <div class="ml-1 pl-3">
                        <router-link v-bind:to="`/book/#${book.type.name}`"  class="px-1 bg-primary rounded text-white text-nowrap text-decoration-none d-inline-block mb-1">{{ book.type.name }}</router-link>
                        <br>
                        <router-link v-for="genre in book.genres" v-bind:key="genre.id" v-bind:to="`/book/#${genre.name}`" class="px-1 bg-primary rounded text-white text-nowrap text-decoration-none d-inline-block mb-1 mr-1">{{ genre.name }}</router-link>
                    </div>
                </div>
                <div v-if="book.cycle.name" class="small mb-2">
                    <span class="position-absolute"><font-awesome-icon icon="link"></font-awesome-icon></span>
                    <div class="ml-1 pl-3">
                        <router-link v-bind:to="`/book/#${book.cycle.name}`"  class="px-1 bg-primary rounded text-white text-nowrap text-decoration-none d-inline-block mb-1">{{ book.cycle.name }}</router-link>
                    </div>
                </div>
                <div class="small mb-2">
                    <span class="mb-2 pr-3 cursor-default">
                        <span class="position-absolute"><font-awesome-icon icon="book"></font-awesome-icon></span>
                        <span v-if="book.status" class="ml-1 pl-3 text-success">Completed book</span>
                        <span v-else class="ml-1 pl-3 text-secondary">Still underway...</span>
                    </span>
                    <span class="mb-2 pr-3 cursor-default" data-toggle="tooltip" data-placement="top" title="Last edited: 22 October 2019">
                        <span class="position-absolute"><font-awesome-icon icon="edit"></font-awesome-icon></span>
                        <time class="ml-1 pl-3" v-bind:datetime="book.lastEdited">{{ (new Date(book.lastEdited)).toLocaleDateString() }}</time>
                    </span>
                    <span class="mb-2 cursor-default">
                        <span class="position-absolute"><font-awesome-icon icon="book-open"></font-awesome-icon></span>
                        <span class="ml-1 pl-3">{{ book.pages }} &bull; {{ book.symbols }}</span>
                    </span>
                </div>
                <div class="small mb-2">
                    <span class="mb-2 pr-3 cursor-default" v-b-tooltip.hover.top title="Images">
                        <span class="position-absolute"><font-awesome-icon icon="images"></font-awesome-icon></span>
                        <span class="ml-1 pl-3">{{ book.illustrations.length }}</span>
                    </span>
                    <span class="mb-2 pr-3 cursor-default" v-b-tooltip.hover.top title="Mention">
                        <span class="position-absolute"><font-awesome-icon icon="paperclip"></font-awesome-icon></span>
                        <span class="ml-1 pl-3">{{ book.mentions.length }}</span>
                    </span>
                    <span class="mb-2 pr-3 cursor-default" v-b-tooltip.hover.top title="Comments">
                        <span class="position-absolute"><font-awesome-icon icon="comments"></font-awesome-icon></span>
                        <span class="ml-1 pl-3">{{ book.comments }}</span>
                    </span>
                    <span class="mb-2 pr-3 cursor-default" v-b-tooltip.hover.top title="Bookmarked">
                        <span class="position-absolute"><font-awesome-icon icon="bookmark"></font-awesome-icon></span>
                        <span class="ml-1 pl-3">{{ book.bookmarkers.length }}</span>
                    </span>
                    <span class="mb-2 cursor-default" v-b-tooltip.hover.top title="Reviews">
                        <span class="position-absolute"><font-awesome-icon icon="glasses"></font-awesome-icon></span>
                        <span class="ml-1 pl-3">{{ book.reviews.length }}</span>
                    </span>
                </div>
            </div>
        </div>
        <!--div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer expand-image"
            v-bind:style="{'background' : `url(${bookCoverPreviewUrl}) no-repeat scroll center center / cover`}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                <title>{{ book.title}}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title>
                <template v-if="book.discount">
                    <polygon fill="#D4145A" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                    <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                </template>
            </svg>
        </div-->
        <div class="card-footer mt-auto">
            <router-link v-if="book.price" class="btn btn-block btn-warning" v-bind:to="`/reader/${book.id}`">Read for ${{ discountPrice }}<del v-if="book.discount" class="text-muted ml-2">${{ book.price.toFixed(2) }}</del></router-link>
            <router-link v-else class="btn btn-block btn-success" v-bind:to="`/reader/${book.id}`">Read for free</router-link>
        </div>
    </div>
</template>

<script>
    import rate from '../../components/assets/Rate'

    export default {
        name: 'Card',
        data(){
            return {
                userAvatarUrl: `http://mobitoon.ru/novelist/images/users/${this.book.author.id}/preview.jpg`,
                bookCoverPreviewUrl: `http://mobitoon.ru/novelist/images/books/${this.book.id}/preview.jpg`
            }
        },
        components: {
            rate
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
