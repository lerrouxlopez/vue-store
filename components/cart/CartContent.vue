<template>
  <div>
    <v-card>
      <v-card-title class="font-weight-bold">Your Cart</v-card-title>
      <v-card-text>
        <CartItem v-for="(item, i) in myCart" :key="i" :mycart="item" />
      </v-card-text>
    </v-card>
    <div class="pa-3">
      <h4>You might also like</h4>
      <MoreOfferings />
    </div>
  </div>
</template>

<script>
import { CartItem } from '@/components/cart'
import { MoreOfferings } from '@/components/products'
import { mapGetters } from 'vuex'

export default {
  components: {
    CartItem,
    MoreOfferings
  },
  data () {
    return {
      details: false
    }
  },
  computed: {
    ...mapGetters(['myCart'])
  }
}
</script>

<style scoped>
li {
 list-style: none;
}
</style>
