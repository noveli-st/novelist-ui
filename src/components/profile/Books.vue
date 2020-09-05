<template>
    <cmp-cardeiner
        v-bind:cardainer-header="2"
        v-bind:cardainer-title="'Books'"
        v-bind:cardainer-style="'deck'"
    >
        <cmp-card
            v-for="(bookId, index) in $parent.userProfile.books.map(book => book.id)"
            v-bind:key="index"
            v-bind:book="books.filter(book => book.id === bookId)[0]"
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
            client.findBooks().then(books => (this.books = books.list))
        }
	}
</script>