<template>
    <div id="app">
        <cmp-header v-if="$route.meta.layout != 'reader'" />
        <cmp-header-reader v-else ref="reader" />
        <router-view />
        <cmp-footer v-if="$route.meta.layout != 'reader'" />

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
    import cmpHeaderReader from './components/HeaderReader'
    import cmpFooter from './components/Footer'
    import cmpModalSignUp from './components/modals/SignUp'
    import cmpModalSignIn from './components/modals/SignIn'
    import cmpModalRememberMe from './components/modals/RememberMe'
    import cmpExpandContainer from './components/assets/ExpandContainer'
    import cmpJumpToTop from './components/assets/JumpToTop'

    export default {
        name: 'App',
        data() {
            return {
                settings: {
                    "reader": {
                        colorMode : "light",
                        textSize : "normal",
                        pageWidth : "responsive"
                    }
                }
            }
        },
        components: {
            cmpHeader,
            cmpHeaderReader,
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
