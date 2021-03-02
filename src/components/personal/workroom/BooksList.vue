<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1" role="heading" aria-level="1">My books</div>
            </header>
            <hr class="border-top">
            <cmp-create-new-book class="col-md-6 mx-auto px-0"></cmp-create-new-book>
            <div id="myBooksList" class="card-list">
                <cmp-card-book-info v-for="book in books" v-bind:key="book.index" v-bind:book="book"></cmp-card-book-info>
            </div>
        </div>
    </main>
</template>

<script>
    import client from 'api-client'
    import cmpCardBookInfo from '@/components/assets/CardBookInfo'
    import cmpCreateNewBook from '@/components/assets/CreateNewBook'

    
	export default {
        name: 'MyBooks',
        data() {
            return {
                books: []
            }
        },
        components: {
            cmpCardBookInfo,
            cmpCreateNewBook
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
