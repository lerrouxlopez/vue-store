<template>
  <div class="cart-container">
    <v-row>
      <v-col cols="8">
        <CartContent />
      </v-col>
      <v-col cols="4">
        <CartSidebar />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CartContent, CartSidebar } from '@/components/cart'

export default {
  components: {
    CartContent,
    CartSidebar
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
