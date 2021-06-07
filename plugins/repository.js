import AccountRepository from '~/api/account/account.repository'
import ProductRepository from '~/api/product/product.repository'
import CartRepository from '~/api/cart/cart.repository'
import OrderRepository from '~/api/order/order.repository'

export default (ctx, inject) => {
  inject('accountRepository', AccountRepository(ctx.$axios))
  inject('productRepository', ProductRepository(ctx.$axios))
  inject('cartRepository', CartRepository(ctx.$axios))
  inject('orderRepository', OrderRepository(ctx.$axios))
}
