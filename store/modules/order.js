const state = () => ({
  myOrder: []
})

const getters = {
  Order (state) {
    return state.myOrder
  }
}

const mutations = {
  MY_ORDER (state, payload) {
    state.myOrder.unshift(payload)
  },
  REMOVE_TO_ORDER (state, payload) {
    const index = state.myOrder.findIndex(item => item.product_id === payload)
    if (index !== -1) {
      state.myOrder.splice(index, 1)
    }
  }
}

const actions = {
  async addToOrder (context, payload) {
    let order = []
    try {
      order = await this.$orderRepository.AddOrder(payload)
    // console.log(products)
    } catch (error) {
      console.log(error)
    }
    context.commit('MY_ORDER', order)
  },
  async removeToOrder (context, payload) {
    try {
      await this.$orderRepository.RemovetoOrder(payload)
    // console.log(products)
    } catch (error) {
      console.log(error)
    }
  }
}

const orderModule = {
  state,
  getters,
  mutations,
  actions
}

export default orderModule
