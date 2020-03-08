import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuthorized: true,

        // Full screen image expander
        isImageExpanded: false,
        imageExpanderPath: ''
    },
    mutations: {
        // Full screen image expander
        expandContainer (state, data) {
            state.isImageExpanded = true
            document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px'
            document.body.classList.add('overflow-hidden')
            
            // после структурирования папок на сервере путь будет изменен на правильный!
            state.imageExpanderPath = "http://mobitoon.ru/novelist/images/books/" + data + '/cover.jpg'
        }
    }
})
