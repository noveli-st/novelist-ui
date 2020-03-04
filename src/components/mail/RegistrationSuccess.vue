<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <h1>Registration successful</h1>
                <hr>
            </header>
            <p>Congratulations! Your registration is completed.</p>
            <p>You can "Sign In" with a temporary password which we sent to your email.</p>
            <div class="alert alert-warning border-0">
                <font-awesome-icon icon="exclamation-triangle" class="mr-3"></font-awesome-icon> If you don't see any message into "Inbox" folder, check your "Spam" folder. Please mark the message as non-spam!
            </div>                
        </div>
    </main>
</template>

<script>
	export default {
        name: 'RegistrationSuccess'
	}
</script>