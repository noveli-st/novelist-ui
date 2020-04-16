<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <div class="h1" role="heading" aria-level="1">Account <span class="h6 text-muted">Security center</span></div>
            </header>
            <hr class="border-top">
            <div class="row justify-content-md-end">
                <div class="col-md-9">
                    <div class="alert alert-info border-0">
                        <div class="h6 font-weight-bold"><font-awesome-icon icon="info-circle"  size="lg" class="mr-3"></font-awesome-icon>Confirmation</div>
                        <hr class="my-2">
                        Any changes on the page will require confirmation. After saving any changes, a confirmation link will be sent to you eMail.
                    </div>
                    <div class="alert alert-danger border-0">
                        <div class="h6 font-weight-bold"><font-awesome-icon icon="exclamation-circle" size="lg" class="mr-3"></font-awesome-icon>Рrivacy</div>
                        <hr class="my-2">
                        Do not pass any information from the page to third parties!
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityUsername">Username</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="user" size="lg"></font-awesome-icon></span>
                        </div>
                        <input id="inputSecurityUsername" class="form-control border-left-0" type="text" value="" aria-describedby="descriptionSecurityUsername">
                    </div>
                    <small id="descriptionSecurityUsername" class="form-text text-muted">Username is confidential and not accessible to other users.</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityEmail">eMail</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="at" size="lg"></font-awesome-icon></span>
                        </div>
                        <input id="inputSecurityEmail" class="form-control border-left-0" type="email" value="">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityPassword">Password</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="shield-alt" size="lg"></font-awesome-icon></span>
                        </div>
                        <input id="inputSecurityPassword" class="form-control border-left-0" type="password" value="">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityConfirmPassword">Confirm password</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="shield-alt" size="lg"></font-awesome-icon></span>
                        </div>
                        <input id="inputSecurityConfirmPassword" class="form-control border-left-0" type="password" value="">
                    </div>
                </div>
            </div>
            <hr class="border-top">
            <footer class="clearfix">
                <button class="btn btn-link text-decoration-none float-left" type="reset"><font-awesome-icon icon="history" class="mr-2"></font-awesome-icon>Restore</button>
                <button id="buttonProfileSave" class="btn btn-primary float-right" type="submit"><font-awesome-icon icon="save" class="mr-2"></font-awesome-icon>Save changes</button>
            </footer>
        </div>
    </main>
</template>

<script>
	export default {
        name: 'Account'
	}
</script>