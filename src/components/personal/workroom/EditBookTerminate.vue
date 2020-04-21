<template>
    <div>
        <header>
            <div class="h2 mb-4" role="heading" aria-level="2">Terminate book</div>
        </header>
        <div class="alert alert-danger border-0">
            <div class="h6 font-weight-bold"><font-awesome-icon icon="exclamation-circle" size="lg" class="mr-3"></font-awesome-icon>Внимание</div>
            <hr class="my-2">
            Книга "Название книги" не имеет финансовых обременений и может быть безвозвратно удалена.
        </div>
        <div class="alert alert-warning border-0">
            <div class="h6 font-weight-bold"><font-awesome-icon icon="exclamation-triangle" size="lg" class="mr-3"></font-awesome-icon>Внимание</div>
            <hr class="my-2">
            Книга "Название книги" имеет финансовых обременений и не может быть безвозвратно удалена. Данную книгу можно скрыть сделав приватной. Читатели купившие книгу смогут продолжить ей пользоваться.
        </div>
        <hr class="border-top">
        <div class="clearfix">
            <!-- <button class="btn btn-danger float-right" data-toggle="modal" type="button"><font-awesome-icon icon="trash" class="mr-2"></font-awesome-icon>Delete</button> -->
            <button class="btn btn-warning float-right" data-toggle="modal" type="button"><font-awesome-icon icon="eye-slash" class="mr-2"></font-awesome-icon>Hide</button>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'EditBookTerminate'
	}
</script>