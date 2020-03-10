<template>
    <main class="min-vh-100">
        <div class="container my-5">
            <header>
                <h1>Account <span class="h6 text-muted">Security center</span></h1>
            </header>
            <hr class="border-top">
            <div class="row justify-content-md-end">
                <div class="col-md-9">
                    <div class="alert alert-info border-0">
                        <div class="h5 font-weight-bold"><font-awesome-icon icon="info-circle" class="mr-3" />Confirmation</div>
                        <hr class="my-2">
                        Любые изменения во вкладке "Security center" необходимо подтвердить для принятия изменений. Ссылка на подтверждения будет отправлена вам на email curent@email.com.
                    </div>
                    <div class="alert alert-danger border-0">
                        <div class="h5 font-weight-bold"><font-awesome-icon icon="exclamation-circle" class="mr-3" />Рrivacy</div>
                        <hr class="my-2">
                        Не передавайте данные для входа Username и Password третьим лицам, чтобы не допустить получения посторонними доступа к данным вашей учетной записи.
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityUsername">Username</label>
                <div class="col-lg-9">
                    <input id="inputSecurityUsername" class="form-control" type="text" value="" aria-describedby="descriptionSecurityUsername">
                    <small id="descriptionSecurityUsername" class="form-text text-muted">Username is confidential and not accessible to other users.</small>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityEmail">Email</label>
                <div class="col-lg-9">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white border-right-0"><font-awesome-icon icon="at" size="lg" /></span>
                        </div>
                        <input id="inputSecurityEmail" class="form-control border-left-0" type="email" value="">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityPassword">Password</label>
                <div class="col-lg-9">
                    <input id="inputSecurityPassword" class="form-control" type="password" value="">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label text-lg-right" for="inputSecurityConfirmPassword">Confirm password</label>
                <div class="col-lg-9">
                    <input id="inputSecurityConfirmPassword" class="form-control" type="password" value="">
                </div>
            </div>
            <hr class="border-top">
            <div class="clearfix">
                <button class="btn btn-link text-decoration-none float-left" type="reset"><font-awesome-icon icon="history" class="mr-2" />Restore</button>
                <button id="buttonProfileSave" class="btn btn-primary float-right" type="submit"><font-awesome-icon icon="save" class="mr-2" />Save changes</button>
            </div>
        </div>
    </main>
</template>

<script>
	export default {
        name: 'Account'
	}
</script>