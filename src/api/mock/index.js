import Vue from 'vue'

import store from '../../store/index'

import me from './data/login'
import indexBooks from './data/index-books'

import * as SC from '../codes'
import {err} from '../errors'

const with_status = (status, data) => ({ code: status.code, message: status.text, data: data })

const fetch = (response, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(response.code / 100) === 2) {
                resolve(response.data);
            }
            else {
                const vm = new Vue();
                vm.$bvToast.toast(`${response.code} ${response.message}`, {
                    title: 'Error',
                    variant: 'danger'
                });

                reject(response);
            }
        }, time)
    })
}

const fetchOk = (data, time = 0) => fetch(with_status(SC.OK, data), time)

export default {
    /* eslint-disable no-unused-vars */
    login(username, password) {
    /* eslint-enable no-unused-vars */
        const valid_user = username === "tester@noveli.st";
        const timeout_user = username === "timeout@noveli.st";

        const response =
            valid_user ? with_status(SC.OK, 'this-is-a-session-token') :
            timeout_user ? err(SC.TIMEOUT) : err(SC.UNAUTHORIZED);

        return fetch(response, 1000);
    },
    logout() {
        return fetch(with_status(SC.NO_CONTENT, null));
    },
    fetchMe() {
        const token = store.state.auth.sessionToken;
        const vm = new Vue();
        vm.$bvToast.toast(`TOKEN: ${token}`, {
            title: 'Info',
            variant: 'info'
        });

        const hasToken = token == null;
        const response = hasToken ?
            with_status(SC.OK, me) : err(SC.make_status(801, 'Token not set'));

        fetch(response, 1000);
    },
    findBooks() {
        return fetchOk(indexBooks);
    }
}
