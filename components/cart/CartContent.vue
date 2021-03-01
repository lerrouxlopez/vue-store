<template>
  <div>
    <v-card>
      <v-card-title class="font-weight-bold">Your Cart</v-card-title>
      <v-card-text>
        <CartItem v-for="i in 3" :key="i" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { CartItem } from '@/components/cart'
export default {
  components: {
    CartItem
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
