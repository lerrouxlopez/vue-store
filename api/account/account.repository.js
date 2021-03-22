const API_URL = ''

export default $axios => ({
  register (data) {
    return $axios.$post(`${API_URL}/register`, data)
  },
  login (data) {
    return $axios.$post(`${API_URL}/login`, data)
  }
})
