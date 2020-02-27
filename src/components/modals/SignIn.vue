<template>
	<b-modal id="modalSignIn" v-bind:header-bg-variant="'light'" centered no-stacking>
		<template v-slot:modal-header="{ close }">
			<div class="h5 modal-title">Please sign in</div>
               <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
		</template>
		<template v-slot:default>
               <label for="inputEmail" class="sr-only">eMail</label>
               <input type="email" id="inputEmail" class="form-control mb-3" placeholder="Email address" required="" autofocus="">
               <label for="inputPassword" class="sr-only">Password</label>
               <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Password" required="">
               <div class="custom-control custom-checkbox mb-3">
                   <input id="checkRememberMe" class="custom-control-input" type="checkbox">
                   <label class="custom-control-label" for="checkRememberMe">Remember me</label>
               </div>
			<button class="btn btn-link p-0 float-right" v-b-modal.modalRememberMe type="button">Forgot password?</button>
		</template>	
        <template v-slot:modal-footer="{cancel, ok}">
            <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
            <button class="btn btn-primary" v-on:click="ok()" type="submit" disabled><font-awesome-icon icon="sign-in-alt" class="mr-2" />Sign in</button>
        </template>
	</b-modal>
</template>

<script>
	export default {
		name: 'ModalSignIn'
	}
</script>