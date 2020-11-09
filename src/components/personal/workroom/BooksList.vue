<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1" role="heading" aria-level="1">My books</div>
            </header>
            <hr class="border-top">
            <div class="row justify-content-center">
                <p class="col-sm-8 col-md-6">
                    <button id="buttonCreateNewBook" class="btn btn-success btn-block" type="button"><font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Create new book</button>
                </p>
            </div>
            <div id="myBooksList" class="card-list">
                <cmp-card-book-info v-for="book in books" v-bind:key="book.index" v-bind:book="book"></cmp-card-book-info>
            </div>
        </div>
    </main>
</template>

<script>
    import client from 'api-client'
    import cmpCardBookInfo from '../../../components/assets/CardBookInfo'
    
	export default {
        name: 'MyBooks',
        data() {
            return {
                books: []
            }
        },
        components: {
            cmpCardBookInfo
        },
        mounted() {
            client.findMyBooks().then(books => {
                this.books = books.list
            })
        },
        computed: {
            bookCoverPreviewUrl() {
                // const id = this.book ? this.book.id : 0
                const id = 1
                return `https://noveli.st/images/books/${id}/preview.jpg`
            }
        }
	}
</script>
