import ProductRepository from '~/api/product/product.repository'

export default (ctx, inject) => {
  inject('productRepository', ProductRepository(ctx.$axios))
}
