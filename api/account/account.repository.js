const API_URL = 'https://accounts.ibial.com/api/v1'

export default $axios => ({
  register (data) {
    return $axios.$post(`${API_URL}/register`, data)
  }
})
