import me from './data/login'
import * as SC from '../codes'
import {err} from '../errors'

const with_status = (status, data) => ({ code: status.code, text: status.text, data: data })

const fetch = (response, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(response.code / 100) === 2) {
                resolve(response.data);
            }
            else {
                reject(response);
            }
        }, time)
    })
}

export default {
    /* eslint-disable no-unused-vars */
    login(username, password) {
    /* eslint-enable no-unused-vars */
        console.log(`login ${username} ${password}`);

        const valid_user = username === "tester@noveli.st";
        const timeout_user = username === "timeout@noveli.st";

        console.log(`valid_user ${valid_user}`);
        console.log(`timeout_user ${timeout_user}`);

        const response =
            valid_user ? with_status(SC.OK, me) :
            timeout_user ? err(SC.TIMEOUT) : err(SC.UNAUTHORIZED);
        return fetch(response, 1000);
    },
    logout() {
        return fetch(with_status(SC.NO_CONTENT, null));
    }
}
