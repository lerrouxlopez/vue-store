const state = () => ({
  products: [],
  latestProducts: []
})

const getters = {
  getProducts (state) {
    return state.products
  },
  getLatestProducts (state) {
    return state.latestProducts
  }
}

const mutations = {
  GET_PRODUCTS (state, payload) {
    state.products = payload
  },
  GET_LATESTPRODUCTS (state, payload) {
    state.latestProducts = payload
  }
}

const actions = {
  async getProducts (context, payload) {
    let products = []
    try {
      products = await this.$productRepository.GetProducts()
      console.log(products)
    } catch (error) {
      console.log(error)
    }
    context.commit('GET_PRODUCTS', products)
  },
  async getLatestProducts (context, payload) {
    let products = []
    try {
      products = await this.$productRepository.GetLatestProducts()
      console.log(products)
    } catch (error) {
      console.log(error)
    }
    context.commit('GET_LATESTPRODUCTS', products)
  }
}

const productModule = {
  state,
  getters,
  mutations,
  actions
}

export default productModule
