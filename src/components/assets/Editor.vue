<template>
    <div v-bind:class="[isCompressed ? 'editor-compress' : 'editor-expand']" class="editor d-flex flex-column bg-white">
        <header class="editor-header d-flex">
            <button class="btn btn-link btn-sm" type="button" v-b-tooltip.hover title="Save text">
                <font-awesome-icon icon="save"></font-awesome-icon>
            </button>
            <div class="mx-2 border-right border-light"></div>
            <button class="btn btn-link btn-sm" type="button" v-b-tooltip.hover title="Insert image" disabled>
                <font-awesome-icon icon="image"></font-awesome-icon>
            </button>
            <button v-if="isCompressed" v-on:click="resizeEditor(false)" v-b-tooltip.hover title="Expand editor" class="btn btn-link btn-sm ml-auto" type="button">
                <font-awesome-icon icon="expand"></font-awesome-icon>
            </button>
            <button v-else v-on:click="resizeEditor(true)" v-b-tooltip.hover title="Compress editor" class="btn btn-link btn-sm ml-auto" type="button">
                <font-awesome-icon icon="compress"></font-awesome-icon>
            </button>
        </header>
        <div
            v-bind:id="`editor-${id}`"
            class="editor-body mt-3 mb-2 py-3 border-top border-bottom border-light outline-none flex-grow-1 overflow-auto"
            role="textbox"
            aria-multiline="true"
            spellcheck="true"
            contenteditable="true"
            v-on:input="pushInputEvent"
        ></div>
        <footer class="editor-footer mt-auto">
            <span class="small text-black-50">Symbols: ~{{content.length}}</span>
        </footer>
    </div>
</template>

<script>
	export default {
        name: 'Editor',
        props: {
            content: {
                type: String,
                default: ``
            },
            id: {
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                isCompressed: true
            }
        },
        watch: {
            content: {
                handler (val) {
                    if (val) {
                        setTimeout(() => {
                            if (!document.getElementById(`editor-${this.id}`).innerHTML) {
                                document.getElementById(`editor-${this.id}`).innerHTML = val;
                            }
                        }, 100);
                    }
                },
                immediate: true
            }
        },
        methods: {
            pushInputEvent () {
                this.$emit('input', document.getElementById(`editor-${this.id}`).innerHTML);
            },
            resizeEditor(status){
                this.isCompressed = status
                if(this.isCompressed) {
                    document.body.style.paddingRight = '';
                    document.body.classList.remove('overflow-hidden');
                } else {
                    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
                    document.body.classList.add('overflow-hidden');
                }
            }
        },
        computed:{
        }
    }
</script>
