<template>
  <div>
    <div class="py-6 font-weight-bold"><h2>iBial Products</h2></div>
    <v-row>
      <v-row v-if="loading">
        <v-col v-for="i in 3" :key="i">
          <v-skeleton-loader
            max-width="300"
            type="image, article, list-item-two-line"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-col v-else-if="getProducts.length === 0">No data</v-col>
      <v-col cols="12" sm="4" v-for="product in getProducts" :key="product.id" v-else>
        <product-item :product="product"></product-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ProductItem } from '@/components/products'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getProducts']),
    loading () {
      if (this.getProducts.length !== 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
