<template>
	<b-modal id="modalSignUp" v-bind:header-bg-variant="'light'" v-on:ok="handleOk" centered no-stacking>
		<template v-slot:modal-header="{ close }">
			<div class="h5 modal-title">Sign up</div>
            <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
		</template>
		<template v-slot:default>
            <form ref="form" v-on:submit.prevent="submitSignUp">
                <label for="inputRegisterEmail" class="sr-only">eMail address</label>
                <input id="inputRegisterEmail" class="form-control" placeholder="eMail address" type="email"
                    v-bind:class="{'is-invalid': $v.registerEmail.$error}"
                    v-model="registerEmail"
                    v-on:input="$v.registerEmail.$touch()">
                <div class="invalid-feedback" v-if="!$v.registerEmail.required">Email field is required</div>
                <div class="invalid-feedback" v-if="!$v.registerEmail.email">This field should be an eMail</div>
                <!-- <div class="invalid-feedback" v-if="!$v.registerEmail.uniqEmail">This eMail is already exists</div> -->

                <div class="custom-control custom-checkbox mt-3 mb-1">
                    <input id="checkUserAgreed" class="custom-control-input" v-model="hasUserAgreed" type="checkbox">
                    <label class="custom-control-label" for="checkUserAgreed">By registering you agree to the conditions:</label> <a href="agreements-policies.html" target="_blank">User agreement...</a>, <a href="agreements-policies.html#PrivacyPolicy" target="_blank">Privacy policy...</a> and <a href="agreements-policies.html#CookiePolicy" target="_blank">Cookie policy...</a>
                </div>
            </form>
		</template>	
        <template v-slot:modal-footer="{cancel, ok}">
            <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
            <button class="btn btn-success" v-on:click="ok()" v-bind:disabled="$v.$invalid || !hasUserAgreed" type="submit"><font-awesome-icon icon="user-plus" class="mr-2" />Create account</button>
        </template>
	</b-modal>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'

	export default {
        name: 'ModalSignUp',
        data(){
            return{
                registerEmail: '',
                hasUserAgreed: false
            }
        },
        methods: {
            handleOk(){
                console.log('Ok!')
                this.submitSignUp()
            },
            submitSignUp(){
                
                console.log('Submit!')
            }
        },
        validations:{
            registerEmail: {
                required,
                email
            }
        }
	}
</script>
