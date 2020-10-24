<template>
    <div class="position-relative">
        <input class="form-control"
			ref="input"
			v-model="input"
			v-bind:type="type"
			v-bind:placeholder="placeholder"
			v-bind:value="value"
			v-bind:aria-label="ariaLabel">
        <button v-show="input.length" v-on:click="clearInput" class="btn btn-link btn-link-focus position-absolute t-0 r-0 px-2 bg-white bg-clip-padding border-transparent" data-action="clear"><font-awesome-icon icon="backspace" size="lg" /></button>
    </div>
</template>

<script>
	export default {
		name: 'ClsInput',
		props: {
			type: {
				default: 'text'
			},
			placeholder: String,
			value: {
				default: ''
			},
			ariaLabel: String
		},
		data(){
			return {
				input: this.value,
				isButtonActive: false
			}
		},
		methods: {
			focus(){
				this.$refs.input.focus()
			},
			clearInput(){
				this.input = ''
				this.focus()
			}
		}
	}
</script>