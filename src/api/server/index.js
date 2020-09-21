import axios from 'axios'
import store from '../../store/index'

const API_PREFIX = '/api/v1'

const apiCall = (method, ...params) => {
    const token = store.state.auth.sessionToken
    if (token) {
        const index = method === "get" ? 1 : 2
        const conf = params[index] || {}
        params[index] = conf

        conf.headers = conf.headers || {}
        conf.headers["Authorization"] = `Token ${token}`;
    }

    return axios[method](...params).then(response => response.data)
}

export default {
  login(username, password) {
    return apiCall('post', `${API_PREFIX}/auth/token/login`, {
      username: username,
      password: password
    }).then(data => data.auth_token)
  },
  logout() {
    return apiCall('post', `${API_PREFIX}/auth/token/logout`)
  },
  activateUser(userid, token) {
    return apiCall('post', `${API_PREFIX}/auth/users/activation/`, {
      uid: userid,
      token: token
    }).then(response => "success", response => {
      if (response.status == 400) return "invalid-data"
      if (response.status == 403) return "already-activated"
      console.log("activateUser: unknown status")
      console.log(response)
      return "unknown"
    })
  },
  // user and profile
  fetchMe() {
    return apiCall('get', `${API_PREFIX}/profiles/me/`)
  },
  findProfile(profileId) {
    return apiCall('get', `${API_PREFIX}/profiles/${profileId}/`)
  },
  saveProfile(userProfile) {
    return apiCall('put', `${API_PREFIX}/profiles/me/`, userProfile)
  },
  // books
  findBook(bookId) {
    return apiCall('get', `${API_PREFIX}/books/${bookId}/`)
  },
  findBooks() {
    return apiCall('get', `${API_PREFIX}/books/`)
  },
  findProfileBooks(profileId) {
    return apiCall('get', `${API_PREFIX}/profiles/${profileId}/books/`)
  },
  findMyBooks() {
    return apiCall('get', `${API_PREFIX}/my-books/`)
  },
  findMyBook(bookId) {
    return apiCall('get', `${API_PREFIX}/my-books/${bookId}/`)
  },
  createBook(book) {
    return apiCall('post', `${API_PREFIX}/my-books/`, book)
  },
  saveBook(book) {
    return apiCall('put', `${API_PREFIX}/my-books/${book.id}/`, book)
  },
  listGenres() {
    return apiCall('get', `${API_PREFIX}/genres/`)
  },
  listBookTypes() {
    return apiCall('get', `${API_PREFIX}/book-types/`)
  },
  listMentionTypes() {
    return apiCall('get', `${API_PREFIX}/mention-types/`)
  },
  listMentionTemplates() {
    return apiCall('get', `${API_PREFIX}/mention-templates/`)
  },
  createMention(template) {
    return apiCall('post', `${API_PREFIX}/mentions/`, template)
  }
}
