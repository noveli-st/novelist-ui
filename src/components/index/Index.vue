<template>
    <main class="min-vh-100">
        <slider-wide />
        <section class="container my-5">
            <header class="d-flex flex-nowrap">
                <span class="mb-0 flex-grow-1 h2" role="heading" aria-level="2">Fast grown <span class="h6 text-muted">books</span></span>
            </header>
            <hr class="border-top">
            <carousel
                :autoplay="true"
                :autoplayTimeout="6000"
                :loop="true"
                :mouseDrag="false"
                :navigationEnabled="true"
                :navigationNextLabel="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 320 512&quot;><path fill=&quot;#e7e9eb&quot; d=&quot;M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z&quot;></path></svg>'"
                :navigationPrevLabel="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 320 512&quot;><path fill=&quot;#e7e9eb&quot; d=&quot;M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z&quot;></path></svg>'"
                :perPageCustom="[[0, 1], [576, 2], [992, 3], [1200, 4]]"
                :scrollPerPage="true"
                :paginationActiveColor="'#007bff'"
                :paginationColor="'#D6D6D6'"
                :paginationSize="12"
                class="card-deck"
            >
                <template v-for="(book, index) in books.slice(0, 8)">
                    <slide v-bind:key="index">
                        <cmp-card v-bind:book="book" class="mb-0"></cmp-card>
                    </slide>
                </template>
            </carousel>
            <footer class="border-top pt-1 text-right">
                <router-link v-bind:to="'/book'" class="btn btn-link">View more<font-awesome-icon icon="arrow-alt-circle-right" class="ml-2"></font-awesome-icon></router-link>
            </footer>
        </section>
        <cmp-cardeiner
            v-bind:cardainer-header="2"
            v-bind:cardainer-title="'Best-sellers'"
            v-bind:cardainer-subtitle="'Books'"
            v-bind:cardainer-style="'deck'"
            v-bind:cardainer-link="'/books'"
        >
            <cmp-card
                v-for="(book, index) in books.slice(0, 3)"
                v-bind:key="index"
                v-bind:book="book"
                class="mb-4"
            ></cmp-card>
        </cmp-cardeiner>
    </main>
</template>

<script>
    import client from 'api-client'
    import SliderWide from '../assets/SliderWide'
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        name: 'Index',
        components: {
            SliderWide,
            Carousel, Slide
        },
        data() {
            return {
                books: []
            }
        },
        mounted() {
            client.findBooks()
                .then(books => (this.books = books.list))
        }
    }
</script>

<style>
    .VueCarousel-slide {
        overflow: hidden;
    }
    .VueCarousel-slide .card {
        max-width: none !important;
    }
</style>