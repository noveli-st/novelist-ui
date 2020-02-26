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
    faFlag,
    faBackspace
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

import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

import cmpClsInput from './components/assets/ClsInput'
Vue.component('cmp-cls-input', cmpClsInput)

library.add(
    faFacebook,
    faInstagram,
    faTwitter,
    faSearch,
    faPenNib,
    faUsers,
    faFlag,
    faBackspace
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
