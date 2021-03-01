<template>
  <div>
    <v-card>
      <v-card-title><h5>Summary</h5></v-card-title>
      <v-card-subtitle>
        <div class="pt-3 d-flex justify-space-between">
          <div>Liveapp</div>
          <div class="font-weight-bold">$59.00</div>
        </div>
        <div class="pt-3 d-flex justify-space-between">
          <div>Designer-Ads</div>
          <div class="font-weight-bold">$15.00/mo</div>
        </div>
        <div class="pt-3 d-flex justify-space-between">
          <div>Total</div>
          <div class="font-weight-bold">$74.00</div>
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
