<template>
	<div id="app">
		<cmp-header />
		<main class="min-vh-100">
			<router-view />
		</main>
		<cmp-footer />
	</div>
</template>

<script>
	import cmpHeader from './components/Header'
	import cmpFooter from './components/Footer'

	export default {
		name: 'App',
		components: {
			cmpHeader,
			cmpFooter
		}
	}
</script>
