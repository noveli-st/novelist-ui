import Vue from 'vue';

export default {
    get bvToast() {
        const app = Vue.prototype.$app;
        if (app === undefined) {
            return {
                toast(text, object) {
                    console.log(`Toast: text`);
                    console.log(object);
                }
            };
        }
        return app.$bvToast;
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
