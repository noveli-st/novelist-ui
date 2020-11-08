<template>
    <main class="min-vh-100">
		<div class="container my-5">
            <header class="d-flex flex-nowrap">
                <div class="flex-grow-1 mb-0 h1" aria-level="1">Writers</div>
            </header>
            <hr class="border-top">
            <div class="row">
                <div class="col-12 col-lg-8 col-xl-9">
					<div class="card-deck">
						<div
							v-for="(profile, index) in profiles"
							v-bind:key="index"
							class="card border-0 mb-4"
						>
							<div class="position-relative">
								<div class="position-absolute d-flex w-100 p-2">
									<div class="small text-muted my-auto">
										<!-- here are place for an buttons -->
									</div>
									<template v-if="isAuthenticated">
										<button class="btn btn-sm btn-outline-primary ml-auto" type="button"><font-awesome-icon icon="user-check" class="mr-2"></font-awesome-icon>Follow</button>
									</template>
									<span v-else class="d-inline-block ml-auto" tabindex="0" v-b-tooltip.hover.v-info title="Only registered users can follow! Please Sign in...">
										<button class="btn btn-sm btn-outline-primary" type="button" disabled><font-awesome-icon icon="user-check" class="mr-2"></font-awesome-icon>Follow</button>
									</span>
								</div>
							</div>
							<div class="card-body text-center">
								<div class="pl-4 pt-4 pr-4 pb-2">
									<img class="rounded-circle shadow-sm overflow-hidden" :alt="profile.name" :src="`http://mobitoon.ru/novelist/images/users/${profile.id}/preview.jpg`" @error="userAvatarUrlError">
								</div>
								<span class="h5 text-center text-ellipsis mb-2">{{ profile.name }}</span>
								<div class="mb-2">
									<span v-if="profile.books.length" class="badge badge-secondary mr-1 cursor-default" v-b-tooltip.hover title="... has written a book">
										<font-awesome-icon icon="pen-alt" class="mr-1"></font-awesome-icon>{{ profile.books.length }}
									</span>
									<span v-if="profile.reviews.length" class="badge badge-secondary mr-1 cursor-default" v-b-tooltip.hover title="... has given review of a book">
										<font-awesome-icon icon="glasses" class="mr-1"></font-awesome-icon>{{ profile.reviews.length }}
									</span>
									<span v-if="profile.library.readed.length" class="badge badge-secondary mr-1 cursor-default" v-b-tooltip.hover title="... had read a book">
										<font-awesome-icon icon="book-reader" class="mr-1"></font-awesome-icon>{{ profile.library.readed.length }}
									</span>
								</div>
								<time class="d-inline-block small text-muted" v-bind:datetime="profile.created"><font-awesome-icon icon="calendar-day" class="mr-2"></font-awesome-icon><span class="font-weight-bold mr-1">Joined:</span>{{ (new Date(profile.created)).toLocaleDateString() }}</time>
								<div v-if="profile.website || profile.facebook || profile.instagram || profile.twitter">
									<hr>
									<a v-if="profile.website" class="mx-2" v-bind:href="profile.website" v-b-tooltip.hover.focus title="Website"><font-awesome-icon icon="globe" size="lg"></font-awesome-icon></a>
									<a v-if="profile.facebook" class="mx-2" v-bind:href="profile.facebook" v-b-tooltip.hover.focus title="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" size="lg"></font-awesome-icon></a>
									<a v-if="profile.instagram" class="mx-2" v-bind:href="profile.instagram" v-b-tooltip.hover.focus title="Twitter"><font-awesome-icon :icon="['fab', 'instagram']" size="lg"></font-awesome-icon></a>
									<a v-if="profile.twitter" class="mx-2" v-bind:href="profile.twitter" v-b-tooltip.hover.focus title="Instagram"><font-awesome-icon :icon="['fab', 'twitter']" size="lg"></font-awesome-icon></a>
								</div>
							</div>
							<div class="card-footer bg-transparent border-top-0 mt-auto pt-0">
								<router-link class="btn btn-block btn-primary" v-bind:to="`/profile/${profile.id}/info`">View profile</router-link>
							</div>
						</div>
					</div>
                </div>
                <div id="asideBlock" class="col-12 col-lg-4 col-xl-3 d-none d-lg-block" role="region" aria-label="Filters for writers search">
                    <div class="h3">Filters</div>
                    <hr class="border-top">
                    <div class="alert alert-info border-0">
                        <font-awesome-icon icon="info-circle" size="lg" class="mr-3"></font-awesome-icon>
                        The section will be soon.
                    </div>
                </div>
            </div>

			<!--div class="alert alert-info border-0">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mr-3 svg-inline--fa fa-info-circle fa-w-16 fa-lg"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>
				The section will be soon.
			</div-->
			<!-- {{ profiles }} -->
		</div>
    </main>
</template>

<script>
	import client from 'api-client'

	export default {
		name: 'Writers',
		data(){
			return {
				profiles: []
			}
		},
        methods: {
            userAvatarUrlError(event){
                const failsafeUrl = "http://mobitoon.ru/novelist/images/users/0/preview.svg"
                if (event.target.src != failsafeUrl) {
                    event.target.src = failsafeUrl
                }
            }
        },
        computed: {
            isAuthenticated(){
                return this.$store.getters.isCurrentUserLoaded
            },
        },
        mounted() {
            client.findProfiles().then(profiles => (this.profiles = profiles))
        }		
	}
</script>