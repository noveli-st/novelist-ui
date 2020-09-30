<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <h1>Activation</h1>
                <hr>
            </header>
            <p v-if="status == 'in-progress'">Activating...</p>
            <div class="alert alert-warning border-0" v-if="status == 'invalid-data'">
                <font-awesome-icon icon="exclamation-triangle" size="lg" class="mr-3"></font-awesome-icon>
                Activation link is broken. Please check it.
            </div>
            <div class="alert alert-primary border-0" v-if="status == 'already-activated'">
                <font-awesome-icon icon="check-circle" size="lg" class="mr-3"></font-awesome-icon>
                This account is already activated. Just sign in.
            </div>
            <div class="alert alert-success border-0" v-if="status == 'success'">
                <font-awesome-icon icon="check-circle" size="lg" class="mr-3"></font-awesome-icon>
                Your account is successfully activated!
            </div>
        </div>
    </main>
</template>

<script>
import client from 'api-client'

export default {
    data() {
        return {
            status: 'in-progress'
        }
    },
    async mounted() {
        const userid = this.$route.params.uid
        const token  = this.$route.params.token
        this.status = await client.activateUser(userid, token)
    }
}
</script>
