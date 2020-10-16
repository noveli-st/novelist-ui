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
        <!--div
            v-html="content"
            v-on:blur="onFocusOut($event)"
            class="editor-body mt-3 mb-2 py-3 border-top border-bottom border-light outline-none flex-grow-1 overflow-auto"
            role="textbox"
            aria-multiline="true"
            spellcheck="true"
            contenteditable="true"
        ></div-->
        <div
            id="editor"
            class="editor-body mt-3 mb-2 py-3 border-top border-bottom border-light outline-none flex-grow-1 overflow-auto"
            role="textbox"
            aria-multiline="true"
            spellcheck="true"
            contenteditable="true"
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
            }
        },
        data(){
            return {
                // contentCurent: ``,
                isCompressed: true
            }
        },
        mounted () {
            let that = this
            this.$nextTick(() => {
                document.getElementsByClassName('editor-body')[0].addEventListener('input', function() {
                    that.getValue();
                }, false);
            });
        },
        watch: {
            content: {
                handler (val) {
                    if (val) {
                        setTimeout(() => {
                            if (!document.getElementsByClassName('editor-body')[0].innerHTML) {
                                document.getElementsByClassName('editor-body')[0].innerHTML = val;
                            }
                        }, 100);
                    }
                },
                immediate: true
            }
        },
        methods: {
            getValue () {
                this.$emit('input', document.getElementsByClassName('editor-body')[0].innerHTML);
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
            },
            // onFocusOut(e) {
            //     this.contentCurent = e.target.innerHTML
            //     this.$emit('updateContent', this.contentCurent)
            // }
        },
        computed:{
        }
    }
</script>
