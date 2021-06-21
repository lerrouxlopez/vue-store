<template>
  <div class="store-container">
    <ProductDetails :details="product"/>
  </div>
</template>

<script>
import { ProductDetails } from '@/components/products'
export default {
  components: {
    ProductDetails
  },
  data () {
    return {
      product: []
    }
  },
  methods: {
    async getData (id) {
      try {
        this.product = await this.$productRepository.GetProduct(id)
        this.product.description = this.decodeHtml(this.product.description)
        console.log(this.product)
      } catch (error) {
        console.log(error)
      }
    },
    decodeHtml (str) {
      const map =
        {
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#039;': "'"
        }
      return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) { return map[m] })
    }
  },
  mounted () {
    this.getData(this.$route.params.id)
  }
}
</script>

<style scoped>
.store-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
