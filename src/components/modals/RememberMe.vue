<template>
	<b-modal id="modalRememberMe" v-bind:header-bg-variant="'light'" centered no-stacking>
		<template v-slot:modal-header="{ close }">
			<div class="h5 modal-title">Please remember me</div>
                  <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
		</template>
		<template v-slot:default>
               <div class="alert alert-info border-0"><font-awesome-icon icon="info-circle" class="mr-2"/> To reset a password for your account, you have to enter the eMail to which the account is linked.</div>
               <label for="inputEmail" class="sr-only">eMail</label>
               <input type="email" id="inputEmail" placeholder="Email address" required="required" autofocus="autofocus" class="form-control mb-3">
		</template>	
              <template v-slot:modal-footer="{cancel, ok}">
                  <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
                  <button class="btn btn-primary" v-on:click="ok()" type="submit" disabled><font-awesome-icon icon="recycle" class="mr-2" />Reset password</button>
              </template>
	</b-modal>
</template>

<script>
	export default {
		name: 'ModalRememberMe'
	}
</script>