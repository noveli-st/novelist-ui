<template>
	<b-modal
        id="modalRememberMe"
        v-bind:header-class="'border-bottom-0'"
        v-bind:footer-class="'border-top-0'"
        v-bind:header-bg-variant="'light'"
        v-bind:content-class="'border-0'"
        v-on:ok="handleOk"
        centered
        no-stacking
    >
		<template v-slot:modal-header="{ close }">
			<div class="h5 modal-title">Please remember me</div>
            <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
		</template>
		<template v-slot:default>
			<form ref="form" v-on:submit.prevent="submitRememberMe">
                <div class="alert alert-danger border-0">
                    <font-awesome-icon icon="exclamation-circle" size="lg" class="mr-3"></font-awesome-icon>
                    We didn't find a user with this email.
                </div>

				<div class="alert alert-info border-0"><font-awesome-icon icon="info-circle" class="mr-2"/> To reset a password for your account, you have to enter the eMail to which the account is linked.</div>
				<label for="inputEmail" class="sr-only">eMail</label>
				<input type="email" id="inputEmail" placeholder="eMail address" class="form-control"
					v-bind:class="{'is-invalid': $v.email.$error}"
                    v-model="email"
                    v-on:input="$v.email.$touch()">
                <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
                <div class="invalid-feedback" v-if="!$v.email.email">This field should be an eMail</div>
			</form>
		</template>	
        <template v-slot:modal-footer="{cancel, ok}">
            <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
            <button class="btn btn-primary" v-on:click="ok()" type="submit" v-bind:disabled="$v.$invalid"><font-awesome-icon icon="recycle" class="mr-2" />Reset password</button>
        </template>
	</b-modal>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'

	export default {
		name: 'ModalRememberMe',
        data(){
            return{
                email: ''
            }
        },
        methods: {
            handleOk(){
                this.submitRememberMe()
            },
            submitRememberMe(){
            }
        },
        validations:{
            email: {
                required,
                email
            }
        }
	}
</script>
