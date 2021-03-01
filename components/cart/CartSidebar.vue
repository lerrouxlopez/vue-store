<template>
  <v-card>
    <v-card-title><h5>Total</h5></v-card-title>
    <v-card-title class="pt-0 pb-2">
      <div class="d-flex">
        <h2 class="font-weight-bold">$143.00</h2>
        <span class="caption font-weight-bold pl-1 pt-3">($15.00/mo)</span>
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
        >
          Continue Shopping
        </v-btn>
      </div>
    </v-card-title>
  </v-card>
</template>
