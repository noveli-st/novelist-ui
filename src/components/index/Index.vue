<template>
    <main class="min-vh-100">
        <cmp-cardeiner
            v-bind:cardainer-header="2"
            v-bind:cardainer-title="'Best-sellers'"
            v-bind:cardainer-subtitle="'Books'"
            v-bind:cardainer-style="'deck'"
            v-bind:cardainer-link="'/books'">
            <cmp-card v-for="(book, index) in books.slice(0, 4)" v-bind:key="index" v-bind:book="book"></cmp-card>
        </cmp-cardeiner>
    </main>
</template>

<script>
    import client from 'api-client'

    export default {
        name: 'Index',
        data() {
            return {
                books: []
            }
        },
        mounted() {
            client.findBooks()
                .then(books => (this.books = books.list));
        }
    }
</script>
