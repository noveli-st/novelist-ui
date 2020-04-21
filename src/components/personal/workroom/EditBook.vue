<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1 text-truncate" role="heading" aria-level="1">{{ book.title }}</div>
                <ul class="nav my-md-n2">
                    <li class="nav-item">
                        <router-link v-bind:to="'content'" class="nav-link" active-class="disabled">
                            <font-awesome-icon icon="edit"></font-awesome-icon><span class="d-none d-md-inline-block ml-2">Content</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-bind:to="'mentions'" class="nav-link" active-class="disabled">
                            <font-awesome-icon icon="paperclip"></font-awesome-icon><span class="d-none d-md-inline-block ml-2">Mentions</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-bind:to="'settings'" class="nav-link" exact-active-class="disabled">
                            <font-awesome-icon icon="cog"></font-awesome-icon><span class="d-none d-md-inline-block ml-2">Settings</span>
                        </router-link>
                    </li>
                    <ul class="nav ml-auto bg-light rounded">
                        <li class="nav-item">
                            <router-link v-bind:to="`/book/${book.id}/`" class="nav-link" v-b-tooltip.hover title="Open book's profile">
                                <font-awesome-icon icon="book"></font-awesome-icon>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-bind:to="`/reader/${book.id}/`" class="nav-link" v-b-tooltip.hover title="Open book in reader">
                                <font-awesome-icon icon="book-open"></font-awesome-icon>
                            </router-link>
                        </li>
                    </ul>
                    <li class="nav-item ml-2">
                        <router-link v-bind:to="'terminate'" class="nav-link text-danger" exact-active-class="disabled">
                            <font-awesome-icon icon="trash"></font-awesome-icon><span class="d-none d-md-inline-block ml-2">Delete</span>
                        </router-link>
                    </li>
                </ul>
            </header>
            <hr class="border-top">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    import client from 'api-client'

	export default {
        name: 'EditBook',
        data(){
            return {
                book: ""
            }
        },
        mounted() {
            client.findMyBooks().then(books => {
                this.book = books.list.find(book => book.id === 2)
            })
        }
	}
</script>