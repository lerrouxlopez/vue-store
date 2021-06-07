const API_URL = 'https://dev.ibial.com/store/index.php?route=api/order_api'

// const API_URL = 'http://localhost/opencart/upload/index.php?route=api/order_api'

export default $axios => ({
    AddOrder (data) {
      return $axios.$get(`${API_URL}/add`, data)
    },
  })
  