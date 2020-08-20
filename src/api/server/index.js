import axios from 'axios'

const API_PREFIX = '/api/v1'

const apiCall = (method, ...params) =>
    axios[method](...params).then(response => response.data)

export default {
  login(username, password) {
    return apiCall('post', `${API_PREFIX}/auth/login`, {
      username: username,
      password: password
    })
  },
  logout() {
    return apiCall('post', `${API_PREFIX}/auth/logout`)
  },
  // user and profile
  fetchMe() {
    return apiCall('get', `${API_PREFIX}/users/me`)
  },
  findProfile(profileId) {
    return apiCall('get', `${API_PREFIX}/users/${profileId}`)
  },
  saveProfile(userProfile) {
    return apiCall('put', `${API_PREFIX}/users/me`, userProfile)
  },
  // books
  findBook(bookId) {
    return apiCall('get', `${API_PREFIX}/books/${bookId}`)
  },
  findBooks() {
    return apiCall('get', `${API_PREFIX}/books`)
  },
  findMyBooks() {
    return apiCall('get', `${API_PREFIX}/my-books`)
  },
  findMyBook(bookId) {
    return apiCall('get', `${API_PREFIX}/my-books/${bookId}`)
  },
  createBook(book) {
    return apiCall('post', `${API_PREFIX}/my-books`, book)
  },
  saveBook(book) {
    return apiCall('put', `${API_PREFIX}/my-books/${book.id}`, book)
  },
  listGenres() {
    return apiCall('get', `${API_PREFIX}/genres`)
  },
  listBookTypes() {
    return apiCall('get', `${API_PREFIX}/book-types`)
  },
  listMentionTypes() {
    return apiCall('get', `${API_PREFIX}/mention-types`)
  },
  listMentionTemplates() {
    return apiCall('get', `${API_PREFIX}/mention-templates`)
  },
  createMention(template) {
    return apiCall('post', `${API_PREFIX}/mentions`, template)
  }
}
