<template>
  <div class="purchase-container mt-12">
    <div>
      <div class="mb-3">
        <v-btn text class="text-capitalize" @click="$router.push('/purchases')">
          <v-icon left>mdi-arrow-left</v-icon>
          Back to your purchases
        </v-btn>
      </div>
      <div>
        <v-card class="pa-6 mt-3 product__panel" flat>
          <v-card-title class="d-flex justify-space-between">
            <div>
              Learn Adobe XD- Intermediate Level
            </div>
            <div>
              <v-btn text rounded class="primary--text text-capitalize">
                Open on UpSkill
                <v-icon right>mdi-arrow-top-right</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="body-2">
              <div class="d-flex">
                <div>Order ID: </div><div class="pl-2">#000000a</div>
              </div>
              <div class="d-flex">
                <div>Status: </div><div class="pl-2"><v-icon small color="primary">mdi-check</v-icon>Delivered</div>
              </div>
              <div class="d-flex">
                <div>Sold by: </div><div class="primary--text pl-2"> Course Seller Name</div>
              </div>
              <div class="d-flex">
                <div>Date purchased: </div><div class="pl-2">01/20/2021</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="pa-6 mt-6 product__panel" flat>
          <v-card-title>Payment History</v-card-title>
          <v-card-text>
            <div class="body-2">
              <v-row>
                <v-col cols="2">Payment ID</v-col>
                <v-col cols="2">Payment Date</v-col>
                <v-col cols="2">Amount</v-col>
                <v-col cols="2">Type</v-col>
                <v-col cols="2">Pay Method</v-col>
                <v-col cols="2"></v-col>
              </v-row>
              <v-row class="font-weight-bold">
                <v-col cols="2">#00001</v-col>
                <v-col cols="2">01/14/2020</v-col>
                <v-col cols="2">$29.00</v-col>
                <v-col cols="2">One-time payment</v-col>
                <v-col cols="2">Paypal</v-col>
                <v-col cols="2">
                  <v-btn text rounded class="primary--text text-capitalize">Get invoice</v-btn>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="px-6 mt-6 py-6 product__panel" flat>
          <v-card-title>Your product rating & review</v-card-title>
          <v-card-text>
            <v-btn
              outlined
              rounded
              color="primary"
              class="primary--text text-capitalize"
              @click="dialog = true"
            >Rate this product</v-btn>
          </v-card-text>
        </v-card>
        <div class="py-3 mt-6">
          <v-row>
            <v-col cols="1" class="d-flex justify-center px-0">
              <v-avatar color="primary" width="50" class="ml-3"></v-avatar>
            </v-col>
            <v-col>
              <div class="body-2 font-weight-bold">User Name</div>
              <div class="caption medium_gray--text">Feb. 14, 2021</div>
              <div>😃</div>
              <p class="body-2">Saperet euripidis an cum. Pro ea quas epicurei, ad eam iriure albucius constituam. Eum cu cetero ornatus, cum no nobis interpretaris concludaturque, an bonorum eruditi electram usu. Eos mazim tritani imperdiet no, percipit gloriatur ne his.</p>
            </v-col>
          </v-row>
        </div>
        <div class="py-3">
          <v-row>
            <v-col cols="1" class="d-flex justify-center px-0">
              <v-avatar color="primary" width="50" class="ml-3"></v-avatar>
            </v-col>
            <v-col>
              <div class="body-2 font-weight-bold">User Name</div>
              <div class="caption medium_gray--text">Feb. 14, 2021</div>
              <div>😃</div>
              <p class="body-2">Saperet euripidis an cum. Pro ea quas epicurei, ad eam iriure albucius constituam. Eum cu cetero ornatus, cum no nobis interpretaris concludaturque, an bonorum eruditi electram usu. Eos mazim tritani imperdiet no, percipit gloriatur ne his.</p>
              <div class="py-3">
                <v-row>
                  <v-col cols="1" class="d-flex justify-center px-0">
                    <v-avatar color="primary" width="50" class="ml-3"></v-avatar>
                  </v-col>
                  <v-col>
                    <div class="body-2 font-weight-bold">Response from <span class="primary--text">Seller Name</span></div>
                    <div class="caption medium_gray--text">Feb. 18, 2021</div>
                    <div>😃</div>
                    <p class="body-2">Thank you for your review bruh.</p>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <RatingReview />
    </v-dialog>
  </div>
</template>

<script>
import { RatingReview } from '@/components/purchases'
export default {
  components: {
    RatingReview
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
.purchase-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
