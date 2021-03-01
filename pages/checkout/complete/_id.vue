<template>
  <div class="checkout-container">
    <v-card class="pa-6">
      <h2 class="text-center">
        <div>Checkout Complete.</div>
        <div>Thank you for your order!</div>
      </h2>
      <div class="pt-6 caption text-center confirmation">
        A confirmation email has been sent to <span class="font-weight-bold">mybusiness@gmail.com</span>. You may also track and access your files in your <span class="primary--text">purchase dashboard</span>
      </div>
      <v-row class="pt-6 pb-3 px-6 caption">
        <v-col class="pt-6 text-uppercase font-weight-bold">Product</v-col>
        <v-col class="pt-6 text-uppercase font-weight-bold">Delivery</v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row v-for="(item, i) in data" :key="i" class="pb-3 pt-6 px-6 caption">
        <v-col>
          <div class="d-flex">
            <div>
              <v-avatar width="50" color="primary" tile></v-avatar>
            </div>
            <div class="px-3">
              <div class="font-weight-bold">{{ item.product_title }}</div>
              <div class="">by <span class="primary--text">{{ item.seller }}</span> </div>
              <div class=""><span class="font-weight-bold">Price:</span>{{ item.price }}</div>
            </div>
          </div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              {{ item.delivery }}
            </v-col>
            <v-col class="text-right">
              <v-btn
                outlined
                rounded
                color="primary"
                class="text-capitalize justify-end"
              >View purchase</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="mt-6 d-flex justify-center">
        <v-btn
          outlined
          rounded
          color="primary"
          class="text-capitalize justify-center"
          @click="$router.push('/')"
        >Back to Marketplace</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          product_title: 'Liveapp - Basic Package',
          seller: 'Company D',
          price: '$59.00',
          delivery: 'The product will be digitally delivered to you within 2 days'
        },
        {
          product_title: 'DesignerAds Generator-Basic Package',
          seller: 'Company D',
          price: '$15.00/mo',
          delivery: 'Delivered'
        },
        {
          product_title: 'WiserNotify-Basic Package',
          seller: 'Company D',
          price: '$59.00',
          delivery: 'The product will be digitally delivered to you within 24 hours'
        }
      ]
    }
  }
}
</script>

<style scoped>
.checkout-container {
  max-width: 1100px;
  margin: 0 auto;
}
.confirmation {
  max-width: 500px;
  margin: 0 auto;
}
</style>
