const API_URL = 'https://dev.ibial.com/store/index.php?route=api'

export default ($axios) => ({
    /**
     * 
     */
    GetProducts () {
      return $axios.$get(`${API_URL}/product`)
    }
})
