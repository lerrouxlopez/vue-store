<template>
  <div class="checkout-container mt-12 py-6">
    <v-row>
      <v-col cols="8">
        <CheckoutContent />
      </v-col>
      <v-col cols="4">
        <CheckoutSidebar :mycart="Cart"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CheckoutContent, CheckoutSidebar } from '@/components/checkout'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  components: {
    CheckoutContent,
    CheckoutSidebar
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['Cart'])
  }
}
</script>

<style scoped>
.checkout-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
