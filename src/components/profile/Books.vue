<template>
    <cmp-cardeiner
        v-bind:cardainer-header="2"
        v-bind:cardainer-title="'Books'"
        v-bind:cardainer-style="'deck'"
    >
        <!--template slot="underheader">
            <cmp-cls-input class="mt-3" type="search" placeholder="Search" aria-label="Search"/>
            <div class="position-relative overflow-hidden small mb-n3">
                <div class="nav d-flex flex-nowrap container overflow-auto pb-0">
                    <span class="nav-link text-nowrap text-dark">Sort by:</span>
                    <a class="nav-link text-nowrap" href="#">Date<i class="fas fa-sort-amount-up ml-1"></i></a>
                    <a class="nav-link text-nowrap" href="#">Popular</a>
                    <a class="nav-link text-nowrap" href="#">Rating</a>
                    <a class="nav-link text-nowrap" href="#">Comments</a>
                </div>
            </div>
        </template-->
        <cmp-card
            slot="cardeiner"
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
