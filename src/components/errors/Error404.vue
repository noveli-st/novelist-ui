<template>
    <main class="min-vh-100">
		<div class="container my-5">
			<header>
				<div class="my-3 h1" role="heading" aria-level="1">Page not found!</div>
			</header>
			<div class="alert alert-warning border-0">
                <div class="h5 font-weight-bold"><font-awesome-icon icon="exclamation-triangle" class="mr-3" />Oops... there is 404 error!</div>
                <hr class="my-2">
                One of our developers very, very bad guy. So, he should undoubtedly be responsible for this fail.
            </div>
		</div>
    </main>
</template>

<script>
	export default {
		name: 'Error404'
	}
</script>