<template>
  <div class="checkout-container">
    <v-row>
      <v-col cols="8">
        <CheckoutContent />
      </v-col>
      <v-col cols="4">
        <CheckoutSidebar />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CheckoutContent, CheckoutSidebar } from '@/components/checkout'

export default {
  components: {
    CheckoutContent,
    CheckoutSidebar
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.checkout-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
