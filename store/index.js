import Vuex from 'vuex'
import notifModule from './modules/notifications'
import productModule from './modules/products'
import cartModule from './modules/cart'
import orderModule from './modules/order'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      notifications: notifModule,
      products: productModule,
      cart: cartModule,
      order: orderModule
    }
  })
}

export default createStore
