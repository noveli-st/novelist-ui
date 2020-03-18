<template>
    <div v-if="isImageExpanded" v-on:click="closeExpandContainer" class="expand-container cursor-pointer">
        <span class="position-absolute lt-0 p-2 text-white-50">Click or tap to close</span>
        <img :src="imageExpanderPath" alt="Author: Book title">
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'ExpandContainer',
        computed: {
            ...mapGetters(['isImageExpanded', 'imageExpanderPath'])
        },
        methods: {
            ...mapMutations(['collapseImage']),
            closeExpandContainer() {
                this.collapseImage();

                document.body.style.paddingRight = '';
                document.body.classList.remove('overflow-hidden');
            }
        }
    }
</script>
