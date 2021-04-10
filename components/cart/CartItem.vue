<template>
  <div>
    <div class="d-flex pt-3">
      <!-- <div class="mx-3">
        <v-checkbox v-model="checkbox"></v-checkbox>
      </div> -->
        <div>
          <v-avatar width="100" height="80" tile>
            <v-img contain :src="`https://dev.ibial.com/store/image/${mycart.image}`" width="80" />
          </v-avatar>
        </div>
        <div class="px-3 container pt-0">
          <div class="d-flex justify-space-between">
            <div class="font-weight-bold">{{ mycart.name }}</div>
            <div class="font-weight-bold">${{ parseFloat(mycart.price).toFixed(2) }}</div>
          </div>
        <div class="d-flex justify-space-between caption">
          <div class="">Basic Package</div>
          <!-- <div class="">per month</div> -->
        </div>
        <div class="d-flex justify-space-between caption">
          <div class="">Seller: {{ mycart.manufacturer }}</div>
        </div>
        <div class="d-flex justify-space-between caption">
          <v-btn
            small
            text
            class="text-capitalize"
            color="primary"
            @click="details = !details"
          >View Details</v-btn>
          <v-btn
            small
            outlined
            class="text-capitalize"
            @click="remove(mycart.product_id)"
          >Remove</v-btn>
        </div>
      </div>
    </div>
    <div v-if="details" class="px-6 caption pb-6">
        <p>
        Designers Ads Generator was created with the intention of helping marketers generate ads faster. A small tool for advertisers and marketers looking to find inspiration for their social media posts.
        </p>
        <!-- <ul>
        <li><v-icon color="primary" small>mdi-check</v-icon> generate Ads</li>
        <li><v-icon color="primary" small>mdi-check</v-icon> Unlimited access to all template</li>
        </ul>
        <div class="mt-3">Delivery time: 24 hrs</div>
        <div class="mt-3 font-weight-bold">Customize your order:</div>
        <div class="d-flex my-0 justify-space-between">
          <div class="d-flex my-0">
            <v-checkbox hide-details v-model="custom" class="py-0"></v-checkbox>
            <div class="pt-4">Pre-made advertisements</div>
          </div>
          <div class="font-weight-bold pt-4">$20</div>
        </div>
        <div class="d-flex my-0 justify-space-between">
          <div class="d-flex my-0">
            <v-checkbox hide-details v-model="custom" class="py-0"></v-checkbox>
            <div class="pt-4">Lorem ipsum dolor</div>
          </div>
          <div class="font-weight-bold pt-4">$10</div>
        </div> -->
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ['mycart'],
  data () {
    return {
      details: false
    }
  },
  methods: {
    remove (data) {
      this.$store.dispatch('removeToCart', data)
    }
  }
}
</script>
