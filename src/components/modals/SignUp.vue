<template>
  <b-modal
        id="modalSignUp"
        v-bind:header-class="'border-bottom-0'"
        v-bind:footer-class="'border-top-0'"
        v-bind:header-bg-variant="'light'"
        v-bind:content-class="'border-0'"
        v-on:ok="handleOk"
        centered
        no-stacking
    >
    <template v-slot:modal-header="{ close }">
      <div class="h5 modal-title">Sign up</div>
            <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
    </template>
    <template v-slot:default>
            <form ref="form" v-on:submit.prevent="handleOk">
                <label for="inputRegisterEmail" class="sr-only">eMail address</label>
                <input id="inputRegisterEmail" class="form-control" placeholder="eMail address" type="email"
                    v-bind:class="{'is-invalid': $v.registerEmail.$error}"
                    v-model="registerEmail"
                    v-on:input="$v.registerEmail.$touch()">
                <div class="invalid-feedback" v-if="!$v.registerEmail.required">Email field is required</div>
                <div class="invalid-feedback" v-if="!$v.registerEmail.email">This field should be an eMail</div>
                <!-- <div class="invalid-feedback" v-if="!$v.registerEmail.uniqEmail">This eMail is already exists</div> -->

                <input class="form-control" v-model="registerPassword" placeholder="Password" type="password"/>

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
import client from 'api-client'

export default {
  name: 'ModalSignUp',
  data() {
    return {
      registerEmail: '',
      registerPassword: '',
      hasUserAgreed: false
    }
  },
  methods: {
    handleOk() {
      // should be re-routed to a proper component!
      // possible statuses:
      //
      // * success -- user is registered and mail has been sent
      // * invalid-data -- if the data is not accepted by djoser
      // * unknown -- if unknown error occured
      client.registerUser(this.registerEmail, this.registerPassword).then(console.log)
    }
  },
  validations: {
    registerEmail: {
      required,
      email
    }
  }
}
</script>
