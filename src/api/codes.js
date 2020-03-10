const make_status = (code, text) => ({ code: code, text: text })

export const TIMEOUT = make_status(901, 'Timeout')
export const OK = make_status(200, 'OK')
export const NO_CONTENT = make_status(204, 'No Content')
export const UNAUTHORIZED = make_status(401, 'Unauthorized')
