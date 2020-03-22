import Vue from 'vue';

export default {
    toast(text, title, variant) {
        const settings = {
            title: title,
            toaster: 'b-toaster-bottom-right',
            variant: variant
        };

        const app = Vue.prototype.$app;
        if (app === undefined) {
            console.log(`Toast: text`);
            console.log(settings);
            return;
        }

        app.$bvToast.toast(text, settings);
    },
    info(text, title = "Info") {
        this.toast(text, title, 'info');
    },
    success(text, title = "Success") {
        this.toast(text, title, 'success');
    },
    warn(text, title = "Warning") {
        this.toast(text, title, 'warning');
    },
    error(text, title = "Error") {
        this.toast(text, title, 'danger');
    }
}
