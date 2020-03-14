<template>
    <b-modal id="modalSignIn" v-bind:header-bg-variant="'light'" v-on:ok="handleOk" centered no-stacking>
        <template v-slot:modal-header="{ close }">
            <div class="h5 modal-title">Please sign in</div>
            <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
        </template>
        <template v-slot:default>
            <form ref="form" v-on:submit.prevent="submitSignIn">
                <label for="inputEmail" class="sr-only">eMail</label>
                <input id="inputEmail" class="form-control" placeholder="eMail address" type="email"
                    v-bind:class="{'is-invalid': $v.email.$error}"
                    v-model="email"
                    v-on:input="$v.email.$touch()">
                <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
                <div class="invalid-feedback" v-if="!$v.email.email">This field should be an eMail</div>

                <label for="inputPassword" class="sr-only">Password</label>
                <input id="inputPassword" class="form-control mt-3" placeholder="Password" type="password"
                    v-bind:class="{'is-invalid': $v.password.$error}"
                    v-model="password"
                    v-on:input="$v.password.$touch()">
                <div class="invalid-feedback" v-if="!$v.password.minLength">
                    Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.
                </div>

                <div class="custom-control custom-checkbox mt-3 mb-1">
                    <input id="checkRememberMe" class="custom-control-input" v-model="hasRememberMe" type="checkbox">
                    <label class="custom-control-label" for="checkRememberMe">Remember me</label>
                </div>
            </form>
            <button class="btn btn-link p-0 float-right" v-b-modal.modalRememberMe type="button">Forgot password?</button>
        </template>
        <template v-slot:modal-footer="{cancel, ok}">
            <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
            <button class="btn btn-primary" v-on:click="ok()" v-bind:disabled="$v.$invalid || !hasRememberMe" type="submit"><font-awesome-icon icon="sign-in-alt" class="mr-2" />Sign in</button>
        </template>
    </b-modal>
</template>

<script>
    import { required, email, minLength } from 'vuelidate/lib/validators';
    import { mapActions } from 'vuex';

    import { AUTH_LOGIN } from "../../store/actions/auth";

    export default {
        name: 'ModalSignIn',
        data() {
            return {
                email: '',
                password: '',
                hasRememberMe: false
            }
        },
        methods: {
            ...mapActions({ 'login': AUTH_LOGIN }),
            handleOk() {
                console.log('Ok!')
                this.submitSignIn()
            },
            submitSignIn() {
                this.login(this.email, this.password);
                console.log('Submit!')
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            }
        }
    }
</script>
