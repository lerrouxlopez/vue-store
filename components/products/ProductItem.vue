<template>
  <div>
    <v-card
      class="p-3"
      max-height="500"
      width="350"
    >
      <div class="product-item" @click="details(product)">
        <v-img :src="product.img" width="200" class="mx-auto"></v-img>
        <v-card-title>{{ product.title }} {{ product.subtitle }}</v-card-title>
        <!--<v-card-subtitle class="font-weight-bold">{{ product.subtitle }}</v-card-subtitle>-->
        <v-card-text>
            {{ product.details.length > 70 ? product.details.substring(0, 70) + '...' : product.details }}
        </v-card-text>
        <div class="py-3 px-6 d-flex justify-space-between">
          <span>😃 16 reviews</span>
          <span class="font-weight-bold">{{ product.price }}</span>
        </div>
        <v-divider class="mx-4"></v-divider>
      </div>
      <v-card-actions class="d-flex justify-space-between px-3">
        <span></span>
        <v-btn
            color="primary"
            rounded
            outlined
            class="text-capitalize px-3"
            @click="buynow"
        >
            Buy Now
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {}
  },
  methods: {
    details (data) {
      this.$router.push({
        path: '/products/' + data.title,
        query: { data }
      })
    },
    buynow () {
      console.log('buy now')
    }
  }
}
</script>

<style scoped>
.product-item:hover {
  cursor: pointer;
}
</style>
