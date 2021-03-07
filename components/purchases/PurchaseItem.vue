<template>
  <div>
    <v-card class="mb-6">
      <v-card-text>
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <v-avatar width="50" color="primary" tile></v-avatar>
            <div class="px-3">
              <div class="font-weight-bold">{{ details.product_name }}</div>
              <div class="caption">Sold by: <span class="primary--text">{{ details.seller_name }}</span></div>
               <div class="caption">Total Payment: <span class="font-weight-bold">${{ details.payment }}</span></div>
            </div>
          </div>
          <div>
            <v-icon color="primary">mdi-check</v-icon>
            <span class="font-weight-bold">Delivered</span>
            <div
              class="caption primary--text text-right product-details"
              @click="route(details)"
            ><a href="#">View details</a></div>
          </div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-end">
        <div>
          <v-btn
            outlined
            rounded
            color="primary"
            class="text-capitalize justify-end"
            @click="dialog = true"
          >Rate product</v-btn>
        </div>
      </v-card-actions>
    </v-card>
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
  props: ['details'],
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    route (details) {
      this.$router.push({
        path: '/purchases/details/',
        query: { details }
      })
    }
  }
}
</script>

<style scoped>
.product-details a {
  text-decoration: none;
}
</style>
