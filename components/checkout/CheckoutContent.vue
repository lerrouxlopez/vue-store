<template>
  <v-card class="pb-6">
    <v-card-title class="font-weight-bold">Checkout</v-card-title>
    <div class="px-6">
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
            <v-radio>
              <template #label>
                 <img src="/img/paypal_logo.png" />
              </template>
            </v-radio>
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
      <div class="py-3">
        <div class="caption font-weight-bold pt-3">
          Share
        </div>
        <p class="caption pt-3">Invite three (3) people to iBial. something about 10 days to wait for eople to join with the invite link?</p>
        <v-row>
          <v-col cols="5">
            <v-text-field
              outlined
              dense
              hide-details
              placeholder="https://www.invitelinksample"
              append-icon="mdi-vector-arrange-below"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      payment: ''
    }
  }
}
</script>
