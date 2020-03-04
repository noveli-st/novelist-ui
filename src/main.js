import Vue from 'vue'
import Store from './store'
import VueRouter from 'vue-router'
import Router from './routes'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import './fortawesome/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.css'

import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

import cmpClsInput from './components/assets/ClsInput'
Vue.component('cmp-cls-input', cmpClsInput)

import cmpCard from './components/assets/Card'
Vue.component('cmp-card', cmpCard)

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: Router,
    store: Store
}).$mount('#app')
