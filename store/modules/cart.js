const state = () => ({
  myCart: []
})

const getters = {
  Cart (state) {
    return state.myCart
  }
}

const mutations = {
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
  async addToCart (context, payload) {
    let cart = []
    try {
      cart = await this.$cartRepository.AddtoCart(payload)
      // console.log(products)
    } catch (error) {
      console.log(error)
    }
    context.commit('MY_CART', cart)
  },
  async removeToCart (context, payload) {
    try {
      await this.$cartRepository.RemovetoCart(payload)
      // console.log(products)
    } catch (error) {
      console.log(error)
    }
  }
}

const cartModule = {
  state,
  getters,
  mutations,
  actions
}

export default cartModule
