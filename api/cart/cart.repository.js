const API_URL = 'https://dev.ibial.com/store/index.php?route=api/cart_api'

// const API_URL = 'http://localhost/opencart/upload/index.php?route=api/cart_api'

export default $axios => ({
  AddtoCart (data) {
    return $axios.$post(`${API_URL}/add`, data)
  },
  RemovetoCart (id) {
    return $axios.$post(`${API_URL}/remove`, id)
  }
})
