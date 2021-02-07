<template>
    <div class="d-flex mb-3">
        <button
            v-if="!showCreateForm"
            v-on:click="showCreateForm = true"
            class="btn btn-success btn-block mx-auto" type="button"
        >
            <font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Create new book
        </button>
        <div v-else class="px-0 flex-fill d-flex" >
            <input
                v-model="newBookTitle"
                class="form-control mr-2"
                placeholder="Type new book title"
                type="text"
            >
            <button
                v-on:click="createNewBook"
                class="btn btn-success text-nowrap mr-2"
                type="button"
                v-bind:disabled="newBookTitle===''"
            >
                <font-awesome-icon icon="check" class="mr-2"></font-awesome-icon>Create
            </button>
            <button
                v-on:click="showCreateForm = false"
                class="btn btn-secondary"
                type="button"
            >
                <font-awesome-icon icon="times"></font-awesome-icon>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateNewBook',
        data() {
            return {
                showCreateForm: false,
                newBookTitle: ''
            }
        },
        methods: {
            createNewBook() {
                console.log(this.newBookTitle)
                
                // here will be create new book actions

                this.newBookTitle = ''
                this.showCreateForm = false
            }
        },
        computed:{
        }
    }
</script>