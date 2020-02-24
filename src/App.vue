<template>
	<div id="app">
		<cmp-header />
		<main class="min-vh-100" v-on:click="onClickMain">
			<cmp-index />
		</main>
		<cmp-footer />
	</div>
</template>

<script>
	import cmpHeader from './components/Header'
	import cmpIndex from './components/index/Index'
	import cmpFooter from './components/Footer'

	export default {
		name: 'App',
		data(){
			return {

			}
		},
		components: {
			cmpHeader,
			cmpIndex,
			cmpFooter
		},
		methods: {
			onClickMain(){
                this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                    this.$store.state.isCollapseSearch = isJustShown
                })
                if(this.$store.state.isCollapseSearch)
                    this.$root.$emit('bv::toggle::collapse', 'collapseSearch')
			}
		}

	}
</script>