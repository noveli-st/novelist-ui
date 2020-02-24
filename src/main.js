import Vue from 'vue'
import Store from './store'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch,
    faPenNib,
    faUsers,
    faFlag
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.css'

library.add(
        faSearch,
        faPenNib,
        faUsers,
        faFlag,
        faFacebook,
        faInstagram,
        faTwitter
    )

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    store: Store,
    render: h => h(App),
}).$mount('#app')