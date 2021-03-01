<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1" role="heading" aria-level="1">Workroom</div>
            </header>
            <hr class="border-top">
            <section class="my-3">
                <header>
                    <div class="h2" role="heading" aria-level="2">My books</div>
                </header>
                <div class="mb-3">
                    <p>
                        All the works you have written are collected in one place. You can manage them easily - add, edit, settings, preview, delete and much more.
                    </p>

                    <cmp-create-new-book class="col-md-6 mx-auto px-0"></cmp-create-new-book>

                    <div class="h5" role="heading" aria-level="3">Last edited</div>
                    <ul class="list-group list-group-flush rounded overflow-hidden">
                        <li v-for="book in books" v-bind:key="book.index"
                            class="list-group-item d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1 my-auto text-truncate">
                                {{ book.title }}
                            </div>
                            <div class="mx-n2 d-md-flex">
                                <router-link v-bind:to="`/book/${book.id}/edit`" class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Edit book"><font-awesome-icon icon="edit"></font-awesome-icon></router-link>
                                <router-link v-bind:to="`/book/${book.id}/edit/settings`" class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Book settings"><font-awesome-icon icon="cog"></font-awesome-icon></router-link>
                                <router-link v-bind:to="`/book/${book.id}/edit/mentions`" class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Book mentions"><font-awesome-icon icon="paperclip"></font-awesome-icon></router-link>
                                <router-link v-bind:to="`/book/${book.id}/`" class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Book page"><font-awesome-icon icon="book"></font-awesome-icon></router-link>
                                <router-link v-bind:to="`/reader/${book.id}/`" target= "_blank" class="btn btn-sm btn-link" v-b-tooltip.hover.focus title="Reader page"><font-awesome-icon icon="book-open"></font-awesome-icon></router-link>
                                <router-link v-bind:to="`/book/${book.id}/edit/terminate`" class="btn btn-sm btn-link text-danger float-right ml-3" v-b-tooltip.hover.focus title="Delete"><font-awesome-icon icon="trash"></font-awesome-icon></router-link>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer class="text-center">
                    <router-link v-bind:to="'books/my'" class="col-md-6 d-inline-block btn btn-primary"><font-awesome-icon icon="book" class="mr-2"></font-awesome-icon>Books list</router-link>
                </footer>
            </section>
            <section class="my-3">
                <header>
                    <div class="h2" role="heading" aria-level="2">My cycles</div>
                </header>
                <div class="mb-3">
                    <p>
                        The cycles you created and the works contained in them are collected here. You can manage them easily like books.
                    </p>
                    <div class="h5" role="heading" aria-level="3">Last edited</div>
                    <ul class="list-group list-group-flush rounded overflow-hidden">
                        <li v-for="cycle in cycles" v-bind:key="cycle.id"
                            class="list-group-item d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1 my-auto text-truncate">
                                {{ cycle.name }}
                            </div>
                            <div class="mx-n2 d-md-flex">
                                <a class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Edit cycle" href="my-cycle.html"><font-awesome-icon icon="edit"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Cycle setting" href="my-cycle.html#CycleSettings"><font-awesome-icon icon="cog"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link" v-b-tooltip.hover.focus title="Cycle page" href="cycle.html" target="_blank"><font-awesome-icon icon="link"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link text-danger float-right ml-3" v-b-tooltip.hover.focus title="Delete" href="my-cycle.html#CycleDelete"><font-awesome-icon icon="trash"></font-awesome-icon></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer class="text-center">
                    <router-link class="col-md-6 d-inline-block btn btn-primary" v-bind:to="'my-cycles'"><font-awesome-icon icon="link" class="mr-2"></font-awesome-icon>Cycles list</router-link>
                </footer>
            </section>
        </div>
    </main>
</template>

<script>
    import client from 'api-client';

    import cmpCreateNewBook from '@/components/assets/CreateNewBook'

    export default {
        name: 'Workroom',
        data() {
            return {
                books: [],
                cycles: []
            }
        },
        components: {
            cmpCreateNewBook
        },
        mounted() {
            client.findMyBooks().then(books => {
                this.books = books.list;
                this.cycles = this._(this.books)
                    .map(book => book.cycle)
                    .filter(cycle => !!cycle)
                    .uniqBy(cycle => cycle.name)
                    .value();
            });
        }
    }
</script>
