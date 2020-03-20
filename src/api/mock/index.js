import store from '../../store/index'
import toast from '../../util/toast'

import me from './data/login'
import profiles from './data/profiles'
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
                toast.error(`${response.code} ${response.message}`);
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
        toast.success(`LOGOUT`);
        return fetch(with_status(SC.NO_CONTENT, null));
    },
    // user and profile
    fetchMe() {
        const token = store.state.auth.sessionToken;
        toast.info(`TOKEN: ${token}`);

        const hasToken = token != null;
        const response = hasToken ?
            with_status(SC.OK, me) : err(SC.make_status(801, 'Token not set'));

        return fetch(response, 1000);
    },
    findProfile(profileId) {
        const response = profileId <= 5 ?
            with_status(SC.OK, profiles[profileId - 1]) : err(SC.make_status(404, 'Not found'));

        return fetch(response, 1000);
    },
    saveProfile(userProfile) {
        const token = store.state.auth.sessionToken;
        toast.info(`TOKEN: ${token}`);
        toast.info(`Save profile: ${JSON.stringify(userProfile)}`);
        return fetch(with_status(SC.NO_CONTENT, null));
    },
    // books
    findBooks() {
        return fetchOk(indexBooks);
    }
}
