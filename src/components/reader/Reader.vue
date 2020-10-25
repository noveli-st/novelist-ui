<template>
    <main class="min-vh-100">
        reader for book id = {{ bookId }}
    </main>
</template>

<script>
    export default {
        name: 'Reader',
        computed: {
            bookId () { return this.$route.params.id }
        }
    }
</script>

<style>

</style>