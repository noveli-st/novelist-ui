<template>
    <main class="min-vh-100">
		<cmp-cardeiner
			v-bind:cardainer-header="2"
			v-bind:cardainer-title="'Best-sellers'"
			v-bind:cardainer-subtitle="'Books'"
			v-bind:cardainer-style="'deck'"
			v-bind:cardainer-link="'/books'">
			<cmp-card v-for="(id, index) in ids.slice(0, 4)" v-bind:key="index" v-bind:book-id=id></cmp-card>
		</cmp-cardeiner>
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