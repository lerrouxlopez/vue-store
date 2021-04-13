<template>
  <div>
    <v-card>
      <v-card-title><h5>Summary</h5></v-card-title>
      <v-card-subtitle>
        <div v-for="item in filterCart" :key="item.id" class="pt-3 d-flex justify-space-between">
          <div>{{ item.name }} ({{ item.quantity }})</div>
          <div class="font-weight-bold">${{ (item.quantity * parseFloat(item.price)).toFixed(2) }}</div>
        </div>
        <!-- <div class="pt-3 d-flex justify-space-between">
          <div>Designer-Ads</div>
          <div class="font-weight-bold">$15.00/mo</div>
        </div> -->
        <v-divider class="mt-3"></v-divider>
        <div class="pt-3 d-flex justify-space-between">
          <div>Total</div>
          <div class="font-weight-bold">${{ totalPrice.toFixed(2) }}</div>
        </div>
        <div class="caption pt-6">
          By completing your purchase you agree to these <span class="font-weight-bold">Terms of Services.</span>
        </div>
        <div class="d-flex pt-6 container">
          <v-btn
            rounded
            color="primary"
            class="text-capitalize"
            block
            @click="$router.push('/checkout/complete')"
          >
            Confirm & Pay
          </v-btn>
        </div>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['mycart'],
  data () {
    return {}
  },
  computed: {
    filterCart () {
      const result = [...this.mycart.reduce((mp, o) => {
        if (!mp.has(o.product_id)) { mp.set(o.product_id, { ...o, quantity: 0 }) }
        mp.get(o.product_id).quantity++
        return mp
      }, new Map()).values()]
      return result
    },
    totalPrice () {
      let total = 0
      this.mycart.forEach((element) => {
        total = total + parseFloat(element.price)
      })
      return total
    }
  }
}
</script>
