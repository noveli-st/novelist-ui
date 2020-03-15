<template>
    <div v-if="$store.state.imageExpand.isImageExpanded" v-on:click="closeExpandContainer" class="expand-container cursor-pointer">
        <span class="position-absolute lt-0 p-2 text-white-50">Click or tap to close</span>
        <img v-bind:src="$store.state.imageExpand.imageExpanderPath" alt="Author: Book title">
    </div>
</template>

<script>
	export default {
        name: 'ExpandContainer',
        methods:{
            closeExpandContainer(){
                this.$store.state.imageExpand.isImageExpanded = false
                // this.$store.state.imageExpanderPath = ''
                document.body.style.paddingRight = ''
                document.body.classList.remove('overflow-hidden')
            }
        }
    }
</script>