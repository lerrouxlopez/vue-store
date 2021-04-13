<template>
  <div class="checkout-container">
    <v-row>
      <v-col cols="8">
        <CheckoutContent />
      </v-col>
      <v-col cols="4">
        <CheckoutSidebar :mycart="myCart"/>
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
    ...mapGetters(['myCart'])
  }
}
</script>

<style scoped>
.checkout-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
