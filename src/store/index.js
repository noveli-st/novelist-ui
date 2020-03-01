import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuthorized: false,

        // Full screen image expander
        isImageExpanded: false,
        imageExpanderPath: ''
    },
    mutations: {
        // Full screen image expander
        expandContainer (state, data) {
            state.isImageExpanded = true
            document.body.classList.add('overflow-hidden')
            // после структурирования папок на сервере путь будет изменен на правильный!
            state.imageExpanderPath = "http://mobitoon.ru/novelist/images/books/" + data + '/cover.jpg'
        }
    }
})
