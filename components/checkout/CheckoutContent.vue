<template>
  <v-card class="pb-6">
    <v-card-title class="font-weight-bold">Checkout</v-card-title>
    <v-card-subtitle>
      <v-row>
        <v-col cols="5">
          <div class="caption font-weight-bold pt-3">
            Billing Address
          </div>
          <div>
            <v-select outlined dense hide-details></v-select>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-radio-group v-model="payment" hide-details class="mt-0">
            <v-radio label="New payment card"></v-radio>
            <v-radio label=""></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" class="pt-0">
          <div class="caption font-weight-bold pt-3">
            Card Number
          </div>
          <div>
            <v-text-field
              outlined
              dense
              hide-details
              placeholder="0000-0000-0000-0000"
              prepend-inner-icon="mdi-credit-card-outline"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="pt-0">
          <div class="caption font-weight-bold pt-3">
            Expiry Date
          </div>
          <div>
            <v-text-field
              outlined
              dense
              hide-details
              placeholder="MM/YY"
              prepend-inner-icon="mdi-calendar-outline"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="4" class="pt-0">
          <div class="caption font-weight-bold pt-3">
            CVC/CVV
          </div>
          <div>
            <v-text-field
              outlined
              dense
              hide-details
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>
