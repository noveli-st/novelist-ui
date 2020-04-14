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
                        All the works you have written are collected in one place. You can manage them easily - add, edit, setting, preview, delete and much more.
                    </p>
                    <div class="h5" role="heading" aria-level="3">Last edited</div>
                    <ul class="list-group list-group-flush rounded overflow-hidden">
                        <li v-for="book in books" v-bind:key="book.index"
                            class="list-group-item d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1 my-auto text-truncate">
                                {{ book.title }}
                            </div>
                            <div class="mx-n2 d-md-flex">
                                <a class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Edit book" href="my-book.html"><font-awesome-icon icon="edit"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Book setting" href="my-book.html#BookSettings"><font-awesome-icon icon="cog"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link mr-1" v-b-tooltip.hover.focus title="Book page" href="book.html" target="_blank"><font-awesome-icon icon="book"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link" v-b-tooltip.hover.focus title="Reader page" href="reader.html" target="_blank"><font-awesome-icon icon="book-open"></font-awesome-icon></a>
                                <a class="btn btn-sm btn-link text-danger float-right ml-3" v-b-tooltip.hover.focus title="Delete" href="my-book.html#BookDelete"><font-awesome-icon icon="trash"></font-awesome-icon></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer class="text-center">
                    <router-link class="col-md-6 d-inline-block btn btn-primary" v-bind:to="'my-books'"><font-awesome-icon icon="book" class="mr-2"></font-awesome-icon>Books list</router-link>
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

    export default {
        name: 'Workroom',
        data() {
            return {
                books: [],
                cycles: []
            }
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
