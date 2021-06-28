<template>
  <div>
    <v-card flat class="product__panel pa-3">
      <v-card-title class="font-weight-bold">Your Cart</v-card-title>
      <v-card-text>
        <CartItem v-for="(item, i) in Cart" :key="i" :mycart="item" />
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
    ...mapGetters(['Cart'])
  },
  created () {
    const params = {
      api_id: this.$auth.user.id,
      customer_id: this.$auth.user.id
    }
    this.$store.dispatch('getCartProducts', params)
  }
}
</script>

<style scoped>
li {
 list-style: none;
}
</style>
