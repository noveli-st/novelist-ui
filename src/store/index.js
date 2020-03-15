import Vue from 'vue';
import Vuex from 'vuex';

import auth from "./modules/auth";
import user from "./modules/user";
import imageExpand from "./modules/imageExpand";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        auth,
        user,
        imageExpand
    },
    strict: debug
})
