<template>
    <div class="card border-0 mb-4 shadow-sm">
        <div class="card-header">
            <router-link class="d-flex align-items-center text-decoration-none" v-bind:to="'/profile/' + book.author.id">
                <img class="image-42 mr-3 rounded-circle shadow-sm overflow-hidden" :alt="book.author.name" :src="userAvatarUrl" @error="userAvatarUrlError">
                <span class="text-truncate">
                    {{ book.author.name }}
                    <time class="d-block text-muted small mb-1" :datetime="book.published"><font-awesome-icon icon="calendar-day" class="mr-2"></font-awesome-icon>{{ (new Date(book.published)).toLocaleDateString() }}</time>
                </span>
            </router-link>
        </div>
        <router-link v-bind:to="'/book/' + book.id" class="card-body h6 mb-0 text-truncate py-3" v-b-tooltip.hover.bottom
            :title="book.title">
            {{ book.title }}
        </router-link>
        <div v-on:click="$store.commit('expandContainer', book.id)" class="position-relative cursor-pointer expand-image"
            v-bind:style="{'background' : 'url(' + bookCoverPreviewUrl + ') no-repeat scroll center center / cover'}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                <title>{{ book.title}}: {{ book.author.name }}<text v-if="book.discount"> - discount {{ book.discount }}%</text></title>
                <template v-if="book.discount">
                    <polygon fill="#ec4079" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                    <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ book.discount }}%</text>
                </template>
            </svg>
        </div>
        <div class="card-footer mt-auto">
            <router-link v-if="book.price" class="btn btn-block btn-warning" v-bind:to="'/reader/' + book.id">Read for ${{ discountPrice }}<del v-if="book.discount" class="text-muted ml-2">${{ book.price.toFixed(2) }}</del></router-link>
            <router-link v-else class="btn btn-block btn-success" v-bind:to="'/reader/' + book.id">Read for free</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        data(){
            return {
                userAvatarUrl: `http://mobitoon.ru/novelist/images/users/${this.book.author.id}/preview.jpg`,
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
