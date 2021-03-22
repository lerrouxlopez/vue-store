import AccountRepository from '~/api/account/account.repository'
import ProductRepository from '~/api/product/product.repository'

export default (ctx, inject) => {
  inject('accountRepository', AccountRepository(ctx.$axios))
  inject('productRepository', ProductRepository(ctx.$axios))
}
