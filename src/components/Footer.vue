<template>
    <footer class="bg-dark text-light mt-md-5 pt-4 pb-3 pt-md-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="h5" role="heading" aria-level="2">Languages</div>
                    <div class="overflow-auto pb-3">
                        <a class="text-nowrap text-white mr-4"><font-awesome-icon icon="flag" class="mr-2" />English</a>
                        <a class="text-nowrap text-muted mr-4">Español</a>
                        <a class="text-nowrap text-muted mr-4">Português</a>
                        <a class="text-nowrap text-muted mr-4">Français</a>
                        <a class="text-nowrap text-muted mr-4">Deutsch</a>
                    </div>
                    <hr class="mt-1">
                </div>
                <div class="col-6 col-md mb-4 mb-md-0">
                    <div class="h5" role="heading" aria-level="2">Content</div>
                    <table>
                        <tr>
                            <td class="p-0">
                                <router-link class="text-muted disable-events" v-bind:to="'/books'">Books</router-link>
                            </td>
                            <td class="px-2 small align-middle text-right">4201</td>
                        </tr>
                        <tr>
                            <td class="p-0">
                                <router-link class="text-muted" v-bind:to="'/reviews'">Reviews</router-link>
                            </td>
                            <td class="px-2 small align-middle text-right">137</td>
                        </tr>
                    </table>
                </div>
                <div class="col-6 col-md mb-4 mb-md-0">
                    <div class="h5" role="heading" aria-level="2">Community</div>
                    <table>
                        <tr>
                            <td class="p-0">
                                <router-link class="text-muted disable-events" v-bind:to="'/writers'">Writers</router-link>
                            </td>
                            <td class="px-2 small align-middle text-right">201</td>
                        </tr>
                        <tr>
                            <td class="p-0">
                                <router-link class="text-muted disable-events" v-bind:to="'/reviewers'">Reviewers</router-link>
                            </td>
                            <td class="px-2 small align-middle text-right">731</td>
                        </tr>
                    </table>
                </div>
                <div class="col-6 col-md">
                    <div class="h5" role="heading" aria-level="2">Support</div>
                    <ul class="list-unstyled">
                        <li><router-link class="text-muted disable-events" v-bind:to="'/helpcenter'">Help center</router-link></li>
                        <li><router-link class="text-muted disable-events" v-bind:to="'/agreepolic'">Agreements &amp; Policies</router-link></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <div class="h5" role="heading" aria-level="2">About</div>
                    <ul class="list-unstyled">
                        <li><router-link class="text-muted disable-events" v-bind:to="'/team'">Team</router-link></li>
                        <!--li><a class="text-muted" href="#">Location</a></li-->
                        <li><router-link class="text-muted disable-events" v-bind:to="'/sitemap'">Sitemap</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <span class="badge badge-danger">Attention!</span>
                <div class="small text-left pl-2">The site may contain materials not intended for viewing by persons under the age of adulthood!</div>
            </div>
            <div class="row">
                <div class="col-12 text-center small">
                    <hr class="bg-secondary my-3">
                    <div class="row flex-md-row-reverse">
                        <div class="col-12 col-md-7 mb-3 my-md-auto text-md-right">
                            <div class="h6 d-inline-block mr-2 mb-0 align-middle" role="heading" aria-level="3">Follow us:</div>
                            <div class="btn-group text-nowrap">
                                <a class="btn btn-sm btn-outline-light" href="#"><font-awesome-icon :icon="['fab', 'facebook']" /><span class="ml-2 ">facebook</span></a>
                                <a class="btn btn-sm btn-outline-light" href="#"><font-awesome-icon :icon="['fab', 'instagram']" /><span class="ml-2 ">instagram</span></a>
                                <a class="btn btn-sm btn-outline-light" href="#"><font-awesome-icon :icon="['fab', 'twitter']" /><span class="ml-2 ">twitter</span></a>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 text-cente-r text-md-left">
                            <a class="d-inline-flex flex-nowrap text-decoration-none outline-none" href="#">
                                <img src="../assets/images/logo/logo.svg" height="40px" alt="Novelist">
                                <span class="text-light text-left h6 m-0 ml-1"><small>&copy; 2020 - ...</small><br><b>noveli.st</b></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>