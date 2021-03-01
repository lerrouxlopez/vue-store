<template>
  <div class="store-container">
    <ProductDetails />
  </div>
</template>

<script>
import { ProductDetails } from '@/components/products'
export default {
  components: {
    ProductDetails
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.store-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
