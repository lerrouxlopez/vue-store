<template>
  <div>
    <v-card>
      <v-card-title class="font-weight-bold">Your Cart</v-card-title>
      <v-card-text>
        <CartItem v-for="i in 3" :key="i" />
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
export default {
  components: {
    CartItem,
    MoreOfferings
  },
  data () {
    return {
      details: false
    }
  }
}
</script>

<style scoped>
li {
 list-style: none;
}
</style>
