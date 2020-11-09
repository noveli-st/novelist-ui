export default {
    state: {
        // Full screen image expander
        isImageExpanded: false,
        imageExpanderPath: ''
    },
    getters: {
        isImageExpanded: state => state.isImageExpanded,
        imageExpanderPath: state => state.imageExpanderPath
    },
    mutations: {
        // Full screen image expander
        expandContainer (state, data) {
            state.isImageExpanded = true;

            document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
            document.body.classList.add('overflow-hidden');

            // после структурирования папок на сервере путь будет изменен на правильный!
            state.imageExpanderPath = "https://noveli.st/images/books/" + data + '/cover.jpg';
        },
        collapseImage(state) {
            state.isImageExpanded = false;
        }
    }
}
