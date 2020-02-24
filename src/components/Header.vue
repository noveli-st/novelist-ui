<template>
    <header>
        <div class="p-2 bg-dark text-light d-flex flex-nowrap align-items-center">
            <a href="#" title="Novelist - share your impressions">
                <img class="d-sm-none" src="../assets/images/logo/logo.svg" height="40" alt="Novelist">
                <img class="d-none d-sm-block " src="../assets/images/logo/logoname.svg" height="40" alt="Novelist">
            </a>
            <div class="ml-auto d-flex align-items-center">
                <button class="btn btn-sm text-light mx-2" v-b-toggle.collapseSearch type="button"><font-awesome-icon icon="search" size="lg" /></button>
            </div>
        </div>
        <div class="nav-scroller position-absolute w-100 bg-light shadow-sm">
            <b-collapse ref="collapseSearch" id="collapseSearch" class="py-3 py-sm-5 px-0 px-sm-3">
                <div class="container">
                    <div class="mx-auto">
                        <div class="position-relative" data-action="clearable">
                            <input id="globalSearch" class="form-control" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-link position-absolute t-0 r-0 px-2 bg-white bg-clip-padding border-transparent" style="display: none;" data-action="clear"><i class="fas fa-backspace fa-lg"></i></button>
                        </div>
                        <div class="row">
                            <div class="col mt-3">
                                <span class="text-muted"><font-awesome-icon class="mx-2" icon="pen-nib" />Content</span>
                                <hr class="mt-2 mb-0">
                                <a class="d-inline-block text-decoration-none text-nowrap p-2" href="books.html">Books <span class="badge badge-pill bg-secondary text-light">4201</span></a>
                                <a class="d-inline-block text-decoration-none text-nowrap p-2" href="reviews.html">Reviews <span class="badge badge-pill bg-secondary text-light">137</span></a>
                            </div>
                            <div class="col mt-3">
                                <span class="text-muted"><font-awesome-icon class="mx-2" icon="users" />Community</span>
                                <hr class="mt-2 mb-0">
                                <a class="d-inline-block text-decoration-none text-nowrap p-2" href="writers.html">Writers <span class="badge badge-pill bg-secondary text-light">201</span></a>
                                <a class="d-inline-block text-decoration-none text-nowrap p-2" href="#">Reviewers <span class="badge badge-pill bg-secondary text-light">731</span></a>
                                <!-- <a class="d-inline-block text-decoration-none text-nowrap p-2" href="#">Readers <span class="badge badge-pill bg-secondary text-light">1186</span></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </b-collapse>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>