const state = () => ({
  products: [],
  latestProducts: [],
  myCart: []
})

const getters = {
  getProducts (state) {
    return state.products
  },
  getLatestProducts (state) {
    return state.latestProducts
  },
  myCart (state) {
    return state.myCart
  }
}

const mutations = {
  GET_PRODUCTS (state, payload) {
    state.products = payload
  },
  GET_LATESTPRODUCTS (state, payload) {
    state.latestProducts = payload
  },
  MY_CART (state, payload) {
    state.myCart.unshift(payload)
  },
  REMOVE_TO_CART (state, payload) {
    const index = state.myCart.findIndex(item => item.product_id === payload)
    if (index !== -1) {
      state.myCart.splice(index, 1)
    }
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
  },
  addToCart (context, payload) {
    context.commit('MY_CART', payload)
  },
  removeToCart (context, payload) {
    context.commit('REMOVE_TO_CART', payload)
  }
}

const productModule = {
  state,
  getters,
  mutations,
  actions
}

export default productModule
