<template>
	<b-modal id="modalSignUp" v-bind:header-bg-variant="'light'" centered no-stacking>
		<template v-slot:modal-header="{ close }">
			<div class="h5 modal-title">Sign up</div>
               <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
		</template>
		<template v-slot:default>
               <label for="registerEmail" class="sr-only">eMail address</label>
               <input id="registerEmail" class="form-control mb-3" placeholder="eMail address" type="email">
               <div class="custom-control custom-checkbox mb-1">
                   <input id="checkUserAgreed" class="custom-control-input" type="checkbox">
                   <label class="custom-control-label" for="checkUserAgreed">By registering you agree to the conditions:</label> <a href="agreements-policies.html" target="_blank">User agreement...</a>, <a href="agreements-policies.html#PrivacyPolicy" target="_blank">Privacy policy...</a> and <a href="agreements-policies.html#CookiePolicy" target="_blank">Cookie policy...</a>
               </div>                
		</template>	
           <template v-slot:modal-footer="{cancel, ok}">
               <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
               <button class="btn btn-success" v-on:click="ok()" type="submit" disabled><font-awesome-icon icon="user-plus" class="mr-2" />Create account</button>
           </template>
	</b-modal>
</template>

<script>
	export default {
		name: 'ModalSignUp'
	}
</script>