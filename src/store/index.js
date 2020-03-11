import Vue from 'vue'
import Vuex from 'vuex'

import client from 'api-client'

Vue.use(Vuex)

const SET_ME = 'SET_ME'
const UNSET_ME = 'UNSET_ME'

export default new Vuex.Store({
    state: {
        me: null,

        // Full screen image expander
        isImageExpanded: false,
        imageExpanderPath: ''
    },
    getters: {
        isAuthorized: state => state.me != null
    },
    mutations: {
        // Full screen image expander
        expandContainer (state, data) {
            state.isImageExpanded = true
            document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px'
            document.body.classList.add('overflow-hidden')

            // после структурирования папок на сервере путь будет изменен на правильный!
            state.imageExpanderPath = "http://mobitoon.ru/novelist/images/books/" + data + '/cover.jpg'
        },
        [SET_ME] (state, me) {
            state.me = me;
        },
        [UNSET_ME] (state) {
            state.me = null;
        }
    },
    actions: {
        async login({ commit }, username, password) {
            try {
                const user = await client.login(username, password);
                commit(SET_ME, user);
            }
            catch (error) {
                console.log(error);
            }
        },
        async logout({ commit }) {
            await client.logout();
            commit(UNSET_ME);
        }
    }
})
