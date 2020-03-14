import {
      AUTH_LOGIN,
      AUTH_ERROR,
      AUTH_SUCCESS,
      AUTH_LOGOUT
} from "../actions/auth";

import { CURRENT_USER_REQUEST } from "../actions/user";
import client from "api-client";

const state = {
    hasLoadedOnce: false,
    sessionToken: localStorage.getItem('session-token') || ""
};

const getters = {
    isAuthenticated: (state) => !!state.sessionToken
};

const mutations = {
    /* eslint-disable no-unused-vars */
    [AUTH_LOGIN]: state => {
    /* eslint-enable no-unused-vars */
        // e.g. show spinning progress
    },
    [AUTH_SUCCESS]: (state, token) => {
        // e.g. show success
        state.sessionToken = token;
        state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
        // e.g. show error
        state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: state => {
        state.sessionToken = "";
    }
};

const actions = {
    async [AUTH_LOGIN]({ commit, dispatch }, username, password) {
        try {
            commit(AUTH_LOGIN);
            const token = await client.login(username, password);
            localStorage.setItem('session-token', token);
            commit(AUTH_SUCCESS, token);
            dispatch(CURRENT_USER_REQUEST);
        }
        catch (error) {
            commit(AUTH_ERROR, error);
            localStorage.removeItem('session-token');
            throw error;
        }
    },
    async [AUTH_LOGOUT]({ commit }) {
        commit(AUTH_LOGOUT);
        localStorage.removeItem('session-token');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
