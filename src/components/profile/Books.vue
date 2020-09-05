<template>
    <cmp-cardeiner
        v-bind:cardainer-header="2"
        v-bind:cardainer-title="'Books'"
        v-bind:cardainer-style="'deck'">
        <cmp-card
            v-for="(book, index) in books"
            v-bind:key="index"
            v-bind:book="book"
            class="mb-4"
        ></cmp-card>
    </cmp-cardeiner>
</template>

<script>
    import client from 'api-client'

    export default {
        name: 'ProfileBooks',
        data() {
            return {
                books: []
            }
        },
        mounted() {
            const profileId = this.$parent.userProfile.id
            client.findProfileBooks(profileId).then(books => this.books = books.list)
        }
    }
</script>
