<template>
  <v-card>
    <v-card-title><h5>Total</h5></v-card-title>
    <v-card-title class="pt-0 pb-2">
      <div class="d-flex">
        <h2 class="font-weight-bold">${{ totalPrice.toFixed(2) }}</h2>
        <!-- <span class="caption font-weight-bold pl-1 pt-3">($15.00/mo)</span> -->
      </div>
      <div class="d-flex pt-6 container">
        <v-btn
          rounded
          color="primary"
          class="text-capitalize"
          block
          @click="$router.push('/checkout')"
        >
          Proceed to Checkout
        </v-btn>
      </div>
      <div class="d-flex pt-1 container">
        <v-btn
          rounded
          text
          color="primary"
          class="text-capitalize"
          block
          @click="$router.push('/')"
        >
          Continue Shopping
        </v-btn>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['myCart']),
    totalPrice () {
      let total = 0
      this.myCart.forEach((element) => {
        total = total + parseFloat(element.price)
      })
      return total
    }
  }
}
</script>
