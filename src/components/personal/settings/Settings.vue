<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <h1>Settings</h1>
            </header>
            <hr class="border-top">
            <section class="my-3">
                <header>
                    <h2>Edit profile</h2>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laudantium error ad quia saepe, aut optio consequatur ipsum quo reprehenderit aspernatur, exercitationem fugiat. Commodi asperiores nemo, ea suscipit ex labore.
                </p>
                <footer class="text-center">
                    <router-link class="col-md-6 d-inline-block btn btn-primary" v-bind:to="'profile/edit'"><font-awesome-icon icon="user-edit" class="mr-2" />Edit profile</router-link>
                </footer>
            </section>
            <section class="my-3">
                <header>
                    <h2>Account <span class="h6 text-muted">Security center</span></h2>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laudantium error ad quia saepe, aut optio consequatur ipsum quo reprehenderit aspernatur, exercitationem fugiat. Commodi asperiores nemo, ea suscipit ex labore.
                </p>
                <footer class="text-center">
                    <router-link class="col-md-6 d-inline-block btn btn-primary" v-bind:to="'account'"><font-awesome-icon icon="user-shield" class="mr-2" />Security center</router-link>
                </footer>
            </section>
            <section class="my-3">
                <header>
                    <h2>Terminate account</h2>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laudantium error ad quia saepe, aut optio consequatur ipsum quo reprehenderit aspernatur, exercitationem fugiat. Commodi asperiores nemo, ea suscipit ex labore.
                </p>
                <footer class="text-center">
                    <router-link class="col-md-6 d-inline-block btn btn-danger" v-bind:to="'account/terminate'"><font-awesome-icon icon="pray" class="mr-2" />Kill me please!</router-link>
                </footer>
            </section>
        </div>
        <!-- <router-link class="btn btn-outline-secondary border-0 rounded-0 m-0 p-2 col-3 disable-events" active-class="active" v-bind:to="'profile-settings'"><font-awesome-icon icon="user-edit" size="lg" /><div class="small">Edit profile</div></router-link> -->
    </main>
</template>

<script>
	export default {
        name: 'Settings'
	}
</script>