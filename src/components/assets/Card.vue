<template>
    <div class="card border-0 mb-4 shadow-sm">
        <div class="card-header">
            <router-link class="d-flex align-items-center text-decoration-none" v-bind:to="'/profile'">
                <img class="image-42 mr-3 rounded-circle shadow-sm overflow-hidden" alt="Имя пользователя" src="http://mobitoon.ru/novelist/images/users/0/preview.svg">
                <span class="text-truncate">
                    Book's author Name
                    <time class="d-block text-muted small mb-1" datetime="2019-10-22T21:30"><font-awesome-icon icon="calendar-day" class="mr-2"></font-awesome-icon> October 2019</time>
                </span>
            </router-link>
        </div>
        <router-link v-bind:to="'/book'" class="card-body h6 mb-0 text-truncate py-3" v-b-tooltip.hover title="The long title of the book: chapter one">
            The long title of the book: chapter one
        </router-link>
        <div v-on:click="$store.commit('expandContainer', bookId)" class="position-relative cursor-pointer expand-image"
            v-bind:style="{'background' : 'url(http://mobitoon.ru/novelist/images/books/' + bookId + '/preview.jpg) no-repeat scroll center center / cover'}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
                <title>Название книги - сейчас со скидкой 70%</title>
                <polygon fill="#ec4079" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
                <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">70%</text>
            </svg>
        </div>
        <div class="card-footer mt-auto">
            <router-link class="btn btn-block btn-warning" v-bind:to="'/reader'">Read for $0.99 <del class="text-muted">$2.99</del></router-link>
        </div>
        
    </div>
</template>

<script>
	export default {
        name: 'Card',
        props: ['bookId']
	}
</script>