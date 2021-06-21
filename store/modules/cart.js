const state = () => ({
  myCart: []
})

const getters = {
  Cart (state) {
    return state.myCart
  }
}

const mutations = {
  CART_ITEMS (state, payload) {
    state.myCart = payload
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
  async getCartProducts (context, payload) {
    let cart = []
    try {
      cart = await this.$cartRepository.GetCartProducts(payload)
      console.log(cart)
      context.commit('CART_ITEMS', cart)
    } catch (error) {
      console.log(error)
    }
  },
  async addToCart (context, payload) {
    let cart = []
    try {
      cart = await this.$cartRepository.AddtoCart(payload)
      console.log(cart)
      context.commit('MY_CART', cart)
      const notif = {
        type: 'cart'
      }
      context.dispatch('addNotifications', notif)
    } catch (error) {
      console.log(error)
    }
  },
  async removeToCart (context, payload) {
    let cart = []
    try {
      cart = await this.$cartRepository.RemovetoCart(payload)
      console.log(cart)
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
