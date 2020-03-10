<template>
    <transition name="jump-to-top-fade">
        <button v-show="visible" @click="backToTop" class="btn-jump-to-top btn btn-primary p-1 border-0 rounded-circle shadow" title="В начало страницы"><font-awesome-icon icon="arrow-alt-circle-up" size="3x"></font-awesome-icon></button>
    </transition>
</template>
<!-- https://github.com/caiofsouza/vue-backtotop/tree/master/src -->

<script>
    export default {
        name: 'JumpToTop',
        props: {
            visibleoffset: {
                type: [String, Number],
                default: '100hv',
            },
            visibleoffsetbottom: {
                type: [String, Number],
                default: 0,
            }
        },
        data () {
            return {
                visible: false
            }
        },
        mounted () {
            window.smoothscroll = () => {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
                if (currentScroll > 0) {
                    window.requestAnimationFrame(window.smoothscroll)
                    window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
                }
            }
            window.addEventListener('scroll', this.catchScroll)
        },
        destroyed () {
            window.removeEventListener('scroll', this.catchScroll)
        },
        methods: {
            catchScroll () {
                const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
                const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
                this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
            },
            backToTop () {
                window.smoothscroll()
                this.$emit('scrolled')
            }
        },
    }
</script>