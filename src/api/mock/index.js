import me from './data/login'

const S_OK = { code: 200, text: 'OK' }
const S_UNAUTHORIZED = { code: 401, text: 'Unauthorized' }

const make_response = ({data = {}, status = S_OK, headers = {}} = {}) => {
    return {
        data: data,
        status: status.code,
        statusText: status.text,
        headers: headers
    };
}

const make_ok = (data, headers = {}) => make_response({data: data, headers: headers})

const fetch = (response, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.floor(response.status / 100) === 2;
            (isSuccess ? resolve : reject)(response);
        }, time)
    })
}

export default {
    login(username, password) {
        const valid_user = username === "tester" && password === "tester";
        const response = valid_user ? make_ok(me) : make_response({ status: S_UNAUTHORIZED });
        return fetch(response, 1000);
    }
}
