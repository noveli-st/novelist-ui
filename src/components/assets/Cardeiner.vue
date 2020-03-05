<template>
    <main class="min-vh-100">
		<section class="container my-5">
			<header class="mb-4 pb-3 border-bottom d-flex flex-nowrap">
				<span class="mb-0 flex-grow-1" v-bind:class="'h' + cardainerHeader" role="heading" v-bind:aria-level="cardainerHeader">{{ cardainerTitle }} <span v-if="cardainerSubtitle" class="h6 text-muted">{{cardainerSubtitle}}</span></span>
                <template v-if="cardainerStyle">
                    <button ref="deck" class="d-none d-md-inline-block mt-auto mb-n1 p-2 btn btn-link" v-bind:class="{'disabled': cardainerStyle == 'deck'}" v-on:click="changeCardainerStyle" type="button" v-b-tooltip.hover title="Gallery view"><font-awesome-icon icon="th" size="lg"></font-awesome-icon></button>
                    <button ref="list" class="d-none d-md-inline-block mt-auto mb-n1 p-2 btn btn-link" v-bind:class="{'disabled': cardainerStyle == 'list'}" v-on:click="changeCardainerStyle" type="button" v-b-tooltip.hover title="List view"><font-awesome-icon icon="th-list" size="lg"></font-awesome-icon></button>
                </template>
			</header>
            <div v-bind:class="cardainerStyleClass">
                <slot></slot>
			</div>
			<footer v-if="cardainerLink" class="border-top pt-1 text-right">
				<router-link v-bind:to="cardainerLink" class="btn btn-link">View more<font-awesome-icon icon="arrow-alt-circle-right" class="ml-2"></font-awesome-icon></router-link>
			</footer>
		</section>
    </main>
</template>

<script>
	export default {
        name: 'Cardainer',
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
                    '': this.cardainerStyle == '',
                    'card-deck': this.cardainerStyle == 'deck',
                    'card-list': this.cardainerStyle == 'list'
                }
            }
        },
        methods: {
            changeCardainerStyle(){
                if(this.cardainerStyle == 'deck')
                    this.cardainerStyle = 'list'
                else
                    this.cardainerStyle = 'deck'
                    
                this.$root.$emit('bv::hide::tooltip')
            }
        }
	}
</script>