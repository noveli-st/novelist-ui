import axios from 'axios'

API_PREFIX = '/api/v1'

export default {
  login(username, password) {
    return axios.post(`${API_PREFIX}/auth/login`, {
      username: username,
      password: password
    })
  },
  logout() {
    return axios.post(`${API_PREFIX}/auth/logout`)
  },
  // user and profile
  fetchMe() {
    return axios.get(`${API_PREFIX}/users/me`)
  },
  findProfile(profileId) {
    return axios.get(`${API_PREFIX}/users/${profileId}`)
  },
  saveProfile(userProfile) {
    return axios.put(`${API_PREFIX}/users/me`, userProfile)
  },
  // books
  findBook(bookId) {
    return axios.get(`${API_PREFIX}/books/${bookId}`)
  },
  findBooks() {
    return axios.get(`${API_PREFIX}/books`)
  },
  findMyBooks() {
    return axios.get(`${API_PREFIX}/my-books`)
  },
  findMyBook(bookId) {
    return axios.get(`${API_PREFIX}/my-books/${bookId}`)
  },
  createBook(book) {
    return axios.post(`${API_PREFIX}/my-books`, book)
  },
  saveBook(book) {
    return axios.put(`${API_PREFIX}/my-books/${book.id}`, book)
  },
  listGenres() {
    return axios.get(`${API_PREFIX}/genres`)
  },
  listBookTypes() {
    return axios.get(`${API_PREFIX}/book-types`)
  },
  listMentionTypes() {
    return axios.get(`${API_PREFIX}/mention-types`)
  },
  listMentionTemplates() {
    return axios.get(`${API_PREFIX}/mention-templates`)
  },
  createMention(template) {
    return axios.post(`${API_PREFIX}/mentions`, template)
  }
}
