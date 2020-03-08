import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

const SET_ME = 'SET_ME'
const UNSET_ME = 'UNSET_ME'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isAuthorized: false,
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
        login({ commit }, { username, password }) {
            return client.login(username, password).then(
                result => {
                    if (result.success) {
                        commit(SET_ME, result.data);
                    }
                    else {
                        // TODO: will be implemented to show login failure
                    }
                }
            );
        },
        logout({ commit }) {
            client.logout()
            commit(UNSET_ME);
        }
    }
})
