<template>
  <div>
    <v-card
      class="p-3 d-flex flex-column pb-3"
      height="500"
      max-width="350"
    >
      <div class="product-item" @click="details(product)">
        <div class="product_img mx-auto pt-3">
          <v-img
            contain
            :src="`https://dev.ibial.com/store/image/${product.image}`"
            max-width="200"
            max-height="200"
            class="mx-auto pt-3"
          ></v-img>
        </div>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle class="font-weight-bold">{{ product.meta_title }}</v-card-subtitle>
        <v-card-text>
          <p class="product_desc mb-0">{{ strippedContent.length > 165 ? strippedContent.substring(1, 165) + '...' : strippedContent }}</p>
        </v-card-text>
      </div>
      <v-spacer></v-spacer>
      <div class="py-3 px-6 d-flex justify-space-between">
        <span>😃 {{ product.reviews }} reviews</span>
        <span class="font-weight-bold">{{ parseFloat(product.price).toFixed(2) }}</span>
      </div>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions class="d-flex justify-space-between px-3">
        <span></span>
        <v-btn
          color="primary"
          rounded
          outlined
          class="text-capitalize px-3"
          @click="buynow(product)"
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
  computed: {
    strippedContent () {
      const str = this.decodeHtml(this.product.description)
      const regex = /<\/?[^>]+(>|$)/g
      return str.replace(regex, '')

      // return this.decodeHtml(this.product.description)
    }
  },
  methods: {
    details (data) {
      this.$router.push({
        path: '/products/' + data.name,
        query: { data }
      })
    },
    buynow (data) {
      console.log('buy now')
      this.$store.dispatch('addToCart', data)
    },
    decodeHtml (str) {
      const map =
        {
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#039;': "'"
        }
      return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) { return map[m] })
    }
  }
}
</script>

<style scoped>
.product-item:hover {
  cursor: pointer;
}
.product_desc {
  height: 95px;
  overflow: hidden;
}
.product_img {
  width: 200px;
  height: 200px;
}
</style>
