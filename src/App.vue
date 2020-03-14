<template>
    <div id="app">
        <cmp-header />
        <router-view />
        <cmp-footer />

        <cmp-modal-sign-up />
        <cmp-modal-sign-in />
        <cmp-modal-remember-me />

        <cmp-expand-container />

        <cmp-jump-to-top />
    </div>
</template>

<script>
    import { CURRENT_USER_REQUEST } from "./store/actions/user"

    import cmpHeader from './components/Header'
    import cmpFooter from './components/Footer'
    import cmpModalSignUp from './components/modals/SignUp'
    import cmpModalSignIn from './components/modals/SignIn'
    import cmpModalRememberMe from './components/modals/RememberMe'
    import cmpExpandContainer from './components/assets/ExpandContainer'
    import cmpJumpToTop from './components/assets/JumpToTop'

    export default {
        name: 'App',
        components: {
            cmpHeader,
            cmpFooter,
            cmpModalSignUp,
            cmpModalSignIn,
            cmpModalRememberMe,
            cmpExpandContainer,
            cmpJumpToTop
        },
        created() {
            if (this.$store.getters.isAuthenticated) {
                this.$store.dispatch(CURRENT_USER_REQUEST);
            }
        }
    }
</script>
