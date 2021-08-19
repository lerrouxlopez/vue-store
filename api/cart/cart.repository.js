const API_URL = 'https://ibial.com/store/index.php?route=api/cart_api'

// const API_URL = 'http://localhost/opencart/upload/index.php?route=api/cart_api'

export default $axios => ({
  AddtoCart (params) {
    const data = new FormData()
    data.append('product_id', params.product_id)
    data.append('quantity', params.quantity)
    data.append('option[227]', params.option)
    data.append('api_id', params.api_id)
    data.append('customer_id', params.customer_id)
    return $axios.$post(`${API_URL}/add`, data)
  },
  RemovetoCart (params) {
    const data = new FormData()
    data.append('cart_id', params.cart_id)
    data.append('api_id', params.api_id)
    data.append('customer_id', params.customer_id)
    return $axios.$post(`${API_URL}/remove`, data)
  },
  GetCartProducts (params) {
    const data = new FormData()
    data.append('api_id', params.api_id)
    data.append('customer_id', params.customer_id)
    return $axios.$post(`${API_URL}/getCartProducts`, data)
  }

})
