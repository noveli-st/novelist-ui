<template>
    <section class="container my-5">
        <header class="d-flex flex-nowrap">
            <span class="mb-0 flex-grow-1" v-bind:class="'h' + cardainerHeader" role="heading" v-bind:aria-level="cardainerHeader">{{ cardainerTitle }} <span v-if="cardainerSubtitle" class="h6 text-muted">{{cardainerSubtitle}}</span></span>
            <template v-if="cardViewStyle">
                <button class="d-none d-md-inline-block mt-auto mb-n1 p-2 btn btn-link" v-bind:class="{'disabled': cardViewStyle == 'deck'}" v-on:click="changeCardainerStyle" type="button" v-b-tooltip.hover title="Gallery view"><font-awesome-icon icon="th" size="lg"></font-awesome-icon></button>
                <button class="d-none d-md-inline-block mt-auto mb-n1 p-2 btn btn-link" v-bind:class="{'disabled': cardViewStyle == 'list'}" v-on:click="changeCardainerStyle" type="button" v-b-tooltip.hover title="List view"><font-awesome-icon icon="th-list" size="lg"></font-awesome-icon></button>
            </template>
        </header>
        <slot name="underheader"></slot>
        <hr class="border-top">
        <div v-bind:class="cardainerStyleClass">
            <slot name="cardeiner"></slot>
        </div>
        <footer v-if="cardainerLink" class="border-top pt-1 text-right">
            <router-link v-bind:to="cardainerLink" class="btn btn-link">View more<font-awesome-icon icon="arrow-alt-circle-right" class="ml-2"></font-awesome-icon></router-link>
        </footer>
    </section>
</template>

<script>
    export default {
        name: 'Cardainer',
        data (){
            return {
                cardViewStyle: this.cardainerStyle
            }
        },
        props: {
            cardainerHeader: {
                default: 1,
                type: Number
            },
            cardainerTitle: {
                default: '',
                type: String
            },
            cardainerSubtitle: {
                default: '',
                type: String
            },
            cardainerStyle: {
                default: '', //deck or list
                type: String
            },
            cardainerLink: {
                default: '',
                type: String
            },
        },
        computed: {
            cardainerStyleClass(){
                return {
                    '': this.cardViewStyle == '',
                    'card-deck': this.cardViewStyle == 'deck',
                    'card-list': this.cardViewStyle == 'list'
                }
            }
        },
        methods: {
            changeCardainerStyle(){
                this.cardViewStyle == 'deck' ? this.cardViewStyle = 'list' : this.cardViewStyle = 'deck'
                this.$root.$emit('bv::hide::tooltip')
            }
        }
    }
</script>