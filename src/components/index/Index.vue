<template>
    <main class="min-vh-100">
		<section class="container my-5">
			<header class="mb-4 pb-3 border-bottom">
				<h2 class="mb-0">Best-sellers <span class="h6 text-muted">Books</span></h2>
			</header>
			<div class="card-deck">
                <cmp-card v-for="(id, index) in ids.slice(0, 4)" v-bind:key="index" v-bind:book-id=id />
			</div>
			<footer class="border-top pt-1 text-right">
				<router-link v-bind:to="'/books'" class="btn btn-link">View more<font-awesome-icon icon="arrow-alt-circle-right" class="ml-2"></font-awesome-icon></router-link>
			</footer>
		</section>
    </main>
</template>

<script>
	export default {
        name: 'Index',
		data() {
			return {
				// template array
				ids: ['2', '8', '1', '3', '9', '5', '6', '7', '10', '12', '11', '4']
			}
		}
	}
</script>