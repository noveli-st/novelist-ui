import {
    CURRENT_USER_REQUEST,
    CURRENT_USER_ERROR,
    CURRENT_USER_SUCCESS
} from "../actions/user";
import { AUTH_LOGOUT } from "../actions/auth";
import client from "api-client";
import toast from '../../util/toast'

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
            toast.success(`Mutation: set user ${user.name}`)
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
            try {
                commit(CURRENT_USER_REQUEST);
                const user = await client.fetchMe();
                commit(CURRENT_USER_SUCCESS, user);
            }
            catch (error) {
                toast.error(`Action: error ${error}`);

                commit(CURRENT_USER_ERROR);
                dispatch(AUTH_LOGOUT);
                throw error;
            }
        }
    }
}
