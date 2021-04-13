<template>
  <div>
    <div class="py-3 font-weight-bold"><h3>iBial Products</h3></div>
    <v-row>
      <v-col cols="12" sm="4" v-for="product in getProducts" :key="product.id">
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
    ...mapGetters(['getProducts'])
  }
}
</script>
