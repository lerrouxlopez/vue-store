const state = () => ({
  notifications: []
})

const getters = {
  getNotifications (state) {
    return state.notifications
  }
}

const mutations = {
  PUSH_NOTIFICATIONS (state, payload) {
    state.notifications = payload
  }
}

const actions = {
  addNotifications (context, payload) {
    context.commit('PUSH_NOTIFICATIONS', payload)
  }
}

const notifModule = {
  state,
  getters,
  mutations,
  actions
}

export default notifModule
