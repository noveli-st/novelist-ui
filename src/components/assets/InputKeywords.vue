<template>
    <input
        v-bind:value="render"
        v-on:blur="updateInput($event)"
    >
</template>

<script>
    export default {
        name: 'InputKeywords',
        props: {
            value: {type: Array}
        },
        data(){
            return {
                render: this.value ? this.value.join(', ') : ""
            }
        },
        methods: {
            updateInput(e) {
                this.$emit('input', e.target.value.split(/(\s*,)+\s*/))
            }
        }
    }
</script>
