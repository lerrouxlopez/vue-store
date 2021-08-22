const API_URL = 'https://ibial.com/store/index.php?route=api/product'

// const API_URL = 'http://localhost/opencart/upload/index.php?route=api/product'

export default $axios => ({
  GetProducts () {
    return $axios.$get(`${API_URL}/getProducts`)
  },
  GetLatestProducts () {
    const data = new FormData()
    data.append('limit', 5)
    return $axios.$post(`${API_URL}/getLatestProducts`, data)
  },
  GetProduct (id) {
    const data = new FormData()
    data.append('product_id', id)
    return $axios.$post(`${API_URL}/getProduct`, data)
  },
  addReviews (params) {
    const data = new FormData()
    data.append('product_id', params.id)
    data.append('name', params.name)
    data.append('text', params.text)
    data.append('rating', params.rating)
    return $axios.$post(`${API_URL}/writeReview`, data)
  },
  getReviews (id) {
    const data = new FormData()
    data.append('product_id', id)
    return $axios.$post(`${API_URL}/getReviews`, data)
  }
})
