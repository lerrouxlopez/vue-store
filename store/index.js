import Vuex from 'vuex'
import notifModule from './modules/notifications'
import productModule from './modules/products'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      notifications: notifModule,
      products: productModule
    }
  })
}

export default createStore
