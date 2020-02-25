<template>
	<div id="app">
		<cmp-header />
		<main class="min-vh-100">
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
		components: {
			cmpHeader,
			cmpIndex,
			cmpFooter
		}
	}
</script>
