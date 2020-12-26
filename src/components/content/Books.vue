<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header class="d-flex flex-nowrap">
                <div class="flex-grow-1 mb-0 h1" aria-level="1">Books</div>
                <button class="d-none d-md-inline-block mt-auto mb-n1 p-2 btn btn-link" v-bind:class="{'disabled': cardViewStyle == 'deck'}" v-on:click="changeCardainerStyle" type="button" v-b-tooltip.hover title="Gallery view"><font-awesome-icon icon="th" size="lg"></font-awesome-icon></button>
                <button class="d-none d-md-inline-block mt-auto mb-n1 p-2 btn btn-link" v-bind:class="{'disabled': cardViewStyle == 'list'}" v-on:click="changeCardainerStyle" type="button" v-b-tooltip.hover title="List view"><font-awesome-icon icon="th-list" size="lg"></font-awesome-icon></button>
            </header>
            <hr class="border-top">
            <div class="row">
                <div class="col-12 col-lg-8 col-xl-9">
                    <div v-bind:class="cardainerStyleClass">
                        <cmp-card v-for="(book, index) in books.slice(0, booksLoadNumb)" v-bind:key="index" v-bind:book="book" class="mb-4"></cmp-card>
                    </div>
                    <button class="btn btn-block btn-outline-primary" type="button" v-on:click="booksLoadNumb += booksLoadNumb" v-bind:class="{'disabled': booksLoadNumb >= books.length}">
                        <template v-if="booksLoadNumb < books.length">
                            <font-awesome-icon icon="arrow-alt-circle-down" class="mr-2"></font-awesome-icon>Load more books...
                        </template>
                        <template v-else>
                            No more books<font-awesome-icon icon="frown" class="ml-2"></font-awesome-icon>
                        </template>
                    </button>
                </div>
                <div id="asideBlock" class="col-12 col-lg-4 col-xl-3 d-none d-lg-block" role="region" aria-label="Filters for books search">
                    <div class="h3">Filters</div>
                    <hr class="border-top">
                    <div class="alert alert-info border-0">
                        <font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>
                        The section will be soon.
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import client from 'api-client'

	export default {
		name: 'Books',
        data() {
            return {
                cardViewStyle: "list",
                books: [],
                booksLoadNumb: 6
            }
        },
        computed: {
            cardainerStyleClass(){
                return {
                    'card-deck': this.cardViewStyle == 'deck',
                    'card-list': this.cardViewStyle == 'list'
                }
            }
        },
        methods: {
            changeCardainerStyle(){
                this.cardViewStyle == 'deck' ? this.cardViewStyle = 'list' : this.cardViewStyle = 'deck'
                this.$root.$emit('bv::hide::tooltip')
            }
        },
        mounted() {
            client.findBooks().then(books => (this.books = books.list))
        }
	}
</script>