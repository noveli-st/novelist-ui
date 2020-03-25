<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <h1>Edit Profile</h1>
            </header>
            <hr class="border-top">
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfileNickname">Nickname</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="mask" size="lg" /></span>
                        </div>
                        <input id="inputProfileNickname" v-model="userProfile.name"
                            class="form-control border-left-0" type="text" maxlength="40" aria-describedby="descriptionProfileNickname" />
                    </div>
                    <small id="descriptionProfileNickname" class="form-text text-muted">... or "Pen name" for writers/arts that won't display their real names</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right">Avatar</label>
                <div class="col-lg-9">
                    <div class="custom-file z-index-0">
                        <input id="fileProfileAvatar" class="custom-file-input" type="file" aria-describedby="descriptionProfileAvatar">
                        <label class="custom-file-label text-truncate" for="fileProfileAvatar">Choose file</label>
                        <small id="descriptionProfileAvatar" class="form-text text-muted">The uploaded image will be rounded, cropped and resized to 512x512 px. Do not upload small images!</small>
                    </div>
                    <!--figure class="figure mb-0">
                        <figcaption class="figure-caption">The uploaded image will be rounded, cropped and resized to 512x512 px. Do not upload small images!</figcaption>
                        <img class="p-0 border-0 figure-img rounded-circle shadow-sm" src="images/users/0/preview.svg" height="128px">
                    </figure-->
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right">Background</label>
                <div class="col-lg-9">
                    <div class="custom-file z-index-0">
                        <input id="fileProfileBackground" class="custom-file-input" type="file" aria-describedby="descriptionProfileBackground">
                        <label class="custom-file-label text-truncate" for="fileProfileBackground">Choose file</label>
                        <small id="descriptionProfileBackground" class="form-text text-muted">Do not upload small images width or height less than 1280 px!</small>
                    </div>
                    <!--figure class="figure mb-0">
                        <figcaption class="figure-caption">Do not upload small images width or height less than 1280 px!</figcaption>
                        <img class="p-0 border-0 figure-img mw-100 rounded shadow-sm" style="max-height:128px" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 128' fill='%23e9ecef'%3E%3Ctitle%3EDefault user profile background%3C/title%3E%3Crect class='cls-1' width='320' height='128'%3E%3C/rect%3E%3C/svg%3E%0A">
                    </figure-->
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="userStatusText">Status</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="info" size="lg" /></span>
                        </div>
                        <input id="userStatusText" v-model="userProfile.status" class="form-control border-left-0" type="text" maxlength="128" aria-describedby="descriptionProfileStatus" value="">
                    </div>
                    <small id="descriptionProfileStatus" class="form-text text-muted">Short length (maxlength 128 symbols) text in your profile.</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="textareaProfileAbout">About</label>
                <div class="col-lg-9">
                    <textarea id="textareaProfileAbout" v-model="userProfile.about" class="form-control" rows="3" maxlength="1024" aria-describedby="descriptionProfileAbout"></textarea>
                    <small id="descriptionProfileAbout" class="form-text text-muted">Text about yourself in your profile.</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfilePhone">Phone</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="phone" size="lg" /></span>
                        </div>
                        <input id="inputProfilePhone" v-model="userProfile.phone" class="form-control border-left-0" type="phone">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfileEmail">Email</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="at" size="lg" /></span>
                        </div>
                        <input id="inputProfileEmail" v-model="userProfile.email" class="form-control border-left-0" type="email" value="" aria-describedby="descriptionProfileEmail">
                    </div>
                    <small id="descriptionProfileEmail" class="form-text text-warning"><font-awesome-icon icon="exclamation-triangle" /> We don't recommend using eMail that you use for "Sign in"! Use a different email to display in your profile.</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right">Locations</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="map-marker" size="lg" /></span>
                        </div>
                        <input id="inputProfileCountry" v-model="userProfile.location" class="form-control border-left-0" type="text" placeholder="Country/Region">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfileWebsite">Website URL</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="globe" size="lg" /></span>
                        </div>
                        <input id="inputProfileWebsite" v-model="userProfile.website" class="form-control border-left-0" type="url" value="">
                    </div>
                </div>
            </div>
            <div class="px-3 pt-3 mb-3 border rounded">
                <h2 class="h5">Social links</h2>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfileFacebook">Facebook</label>
                    <div class="col-lg-9">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white border-right-0"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></span>
                            </div>
                            <input id="inputProfileFacebook" class="form-control border-left-0" type="url" value="">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfileTwitter">Twitter</label>
                    <div class="col-lg-9">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white border-right-0"><font-awesome-icon :icon="['fab', 'twitter']" size="lg" /></span>
                            </div>
                            <input id="inputProfileTwitter" class="form-control border-left-0" type="url" value="">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputProfileInstagram">Instagram</label>
                    <div class="col-lg-9">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white border-right-0"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></span>
                            </div>
                            <input id="inputProfileInstagram" class="form-control border-left-0" type="url" value="">
                        </div>
                    </div>
                </div>
            </div>
            <!--div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="checkboxProfileDonation">Donation</label>
                <div class="col-lg-9">
                    <div class="py-2">
                        <div class="custom-control custom-switch">
                            <input id="checkboxProfileDonation" class="custom-control-input" type="checkbox" aria-describedby="descriptionProfileDonation" disabled>
                            <label class="custom-control-label" for="checkboxProfileDonation">Enable donation from users</label>
                        </div>
                        <small id="descriptionProfileDonation" class="form-text text-warning"><font-awesome-icon icon="exclamation-triangle" /> Not active for readers. Must write at least one book or be one of a books partner (co-author)!</small>
                    </div>
                </div>
            </div-->
            <div class="row justify-content-center mb-3">
                <div class="col-md-6">
                    <router-link class="btn btn-block btn-outline-primary" v-bind:to="'profile'"><font-awesome-icon icon="id-card" class="mr-2" />Open profile page</router-link>
                </div>
            </div>
            <hr class="border-top">
            <div class="clearfix">
                <button class="btn btn-link text-decoration-none float-left" type="reset"><font-awesome-icon icon="history" class="mr-2" />Restore</button>
                <button id="buttonProfileSave" v-on:click="saveProfile" class="btn btn-primary float-right" type="submit"><font-awesome-icon icon="save" class="mr-2" />Save changes</button>
            </div>
        </div>
    </main>
</template>

<script>
    import client from 'api-client';

    export default {
        name: 'ProfileEdit',
        computed: {
            userProfile() {
                return this.$store.getters.currentUser;
            }
        },
        methods: {
            saveProfile(userProfile) {
                client.saveProfile(userProfile);
            }
        }
    }
</script>
