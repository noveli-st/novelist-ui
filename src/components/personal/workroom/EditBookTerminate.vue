<template>
    <div>
        <header>
            <div class="h2 mb-4" role="heading" aria-level="2">Terminate book</div>
        </header>
        <div v-if="$parent.book.terminate" class="alert alert-danger border-0">
            <div class="h6 font-weight-bold"><font-awesome-icon icon="exclamation-circle" size="lg" class="mr-3"></font-awesome-icon>Внимание</div>
            <hr class="my-2">
            Книга "{{ $parent.book.title }}" не имеет финансовых обременений и может быть безвозвратно удалена.
        </div>
        <template v-else>
            <div class="alert alert-warning border-0">
                <div class="h6 font-weight-bold"><font-awesome-icon icon="exclamation-triangle" size="lg" class="mr-3"></font-awesome-icon>Attention</div>
                <hr class="my-2">
                Книга "{{ $parent.book.title }}" имеет финансовых обременений и не может быть безвозвратно удалена! Данную книгу можно скрыть сделав приватной. Читатели купившие книгу смогут продолжить ей пользоваться.
            </div>
            <div v-if="$parent.book.visibility == 'private'" class="alert alert-info border-0">
                <div class="h6 font-weight-bold"><font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>Information</div>
                <hr class="my-2">
                You can make your book available again on the 
                <router-link v-bind:to="'settings'" exact-active-class="disabled"><font-awesome-icon icon="cog" class="mr-1"></font-awesome-icon><b>Settings</b></router-link>
                page - just in the <b>Publish settings</b> section change the <b>Visibility</b> to <b>Public</b>.
            </div>
        </template>
        <hr class="border-top">
        <div class="clearfix">
            <button v-if="$parent.book.terminate" v-on:click="terminateBook" class="btn btn-danger float-right" type="button">
                <font-awesome-icon icon="trash" class="mr-2"></font-awesome-icon>Delete
            </button>
            <template v-else>
                <button class="btn btn-warning float-right" type="button" v-on:click="$parent.book.visibility = 'private'" v-bind:disabled="$parent.book.visibility == 'private'">
                    <font-awesome-icon icon="eye-slash" class="mr-2"></font-awesome-icon>Hide
                </button>
            </template>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'EditBookTerminate',
        methods: {
            terminateBook(){
                console.log('удаляем книгу и переходим на страницу /#/books/my')
            }
        }
	}
</script>