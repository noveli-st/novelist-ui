import Vue from 'vue';

export default {
    get bvToast() {
        return Vue.prototype.$app.$bvToast;
    },
    info(text, title = "Info") {
        this.bvToast.toast(text, {
            title: title,
            variant: 'info'
        });
    },
    success(text, title = "Success") {
        this.bvToast.toast(text, {
            title: title,
            variant: 'success'
        });
    },
    warn(text, title = "Warning") {
        this.bvToast.toast(text, {
            title: title,
            variant: 'warning'
        });
    },
    error(text, title = "Error") {
        this.bvToast.toast(text, {
            title: title,
            variant: 'danger'
        });
    }
}
