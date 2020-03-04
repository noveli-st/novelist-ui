<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <h1>Password recovery information</h1>
                <hr>
            </header>
            <p>Password recovery link is sent to your email address. Follow the link to get temporary password.</p>
            <div class="alert alert-warning border-0">
                <font-awesome-icon icon="exclamation-triangle" class="mr-3"></font-awesome-icon> If you don't see any message into "Inbox" folder, check your "Spam" folder. Please mark the message as non-spam!
            </div>                
        </div>
    </main>
</template>

<script>
	export default {
        name: 'ResetpassInfo'
	}
</script>