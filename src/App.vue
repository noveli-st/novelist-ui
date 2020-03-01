<template>
	<div id="app">
		<cmp-header />
		<router-view />
		<cmp-footer />

        <cmp-modal-sign-up />
        <cmp-modal-sign-in />
        <cmp-modal-remember-me />

		<cmp-expand-container />
	</div>
</template>

<script>
	import cmpHeader from './components/Header'
	import cmpFooter from './components/Footer'
	import cmpModalSignUp from './components/modals/SignUp'
	import cmpModalSignIn from './components/modals/SignIn'
	import cmpModalRememberMe from './components/modals/RememberMe'
	import cmpExpandContainer from './components/assets/ExpandContainer'

	export default {
		name: 'App',
		components: {
			cmpHeader,
            cmpFooter,
            cmpModalSignUp,
            cmpModalSignIn,
			cmpModalRememberMe,
			cmpExpandContainer
		}
	}
</script>
