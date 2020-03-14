import Vue from 'vue';

import {
    CURRENT_USER_REQUEST,
    CURRENT_USER_ERROR,
    CURRENT_USER_SUCCESS
} from "../actions/user";
import { AUTH_LOGOUT } from "../actions/auth";
import client from "api-client";

export default {
    state: {
        me: null
    },
    getters: {
        currentUser: state => state.me,
        isCurrentUserLoaded: state => !!state.me
    },
    mutations: {
        /* eslint-disable no-unused-vars */
        [CURRENT_USER_REQUEST]: state => {
        },
        /* eslint-enable no-unused-vars */
        [CURRENT_USER_SUCCESS]: (state, user) => {
            state.me = user;
            const vm = new Vue();
            vm.$bvToast.toast(`Mutation: set user ${user.name}`, {
                title: 'Info',
                variant: 'info'
            });
        },
        /* eslint-disable no-unused-vars */
        [CURRENT_USER_ERROR]: state => {
        },
        /* eslint-enable no-unused-vars */
        [AUTH_LOGOUT]: state => {
            state.me = null;
        }
    },
    actions: {
        async [CURRENT_USER_REQUEST]({ commit, dispatch }) {
            const vm = new Vue();
            try {
                vm.$bvToast.toast(`Action: set user before`, {
                    title: 'Info',
                    variant: 'info'
                });
                commit(CURRENT_USER_REQUEST);
                const user = await client.fetchMe();
                console.log("USER");
                console.log(user);
                commit(CURRENT_USER_SUCCESS, user);

                vm.$bvToast.toast(`Action: set user ${user.name}`, {
                    title: 'Info',
                    variant: 'info'
                });
            }
            catch (error) {
                console.log(error);
                vm.$bvToast.toast(`Action: error ${error}`, {
                    title: 'Error',
                    variant: 'danger'
                });

                commit(CURRENT_USER_ERROR);
                dispatch(AUTH_LOGOUT);
                throw error;
            }
        }
    }
}
