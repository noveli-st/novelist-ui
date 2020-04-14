import Vue from 'vue'
import Store from './store'
import VueRouter from 'vue-router'
import Router from './routes'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

import App from './App.vue'

import './fortawesome/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.css'

import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

import cmpClsInput from './components/assets/ClsInput'
Vue.component('cmp-cls-input', cmpClsInput)

import cmpCardeiner from './components/assets/Cardeiner'
Vue.component('cmp-cardeiner', cmpCardeiner)

import cmpCard from './components/assets/Card'
Vue.component('cmp-card', cmpCard)

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueLodash, { name: 'app-lodash', lodash: lodash })

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: Router,
    store: Store,
    beforeCreate() {
        Vue.prototype.$app = this;
    }
}).$mount('#app');
