<template>
  <div>
    <v-card
      class="p-3 d-flex flex-column pb-3 product__panel"
      height="500"
      max-width="350"
      flat
    >
      <div class="product-item" @click="details(product)">
        <div class="product_img mx-auto pt-3">
          <v-skeleton-loader v-if="!productImage" class="mx-auto" type="image"></v-skeleton-loader>
          <v-img
            v-else
            contain
            :src="productImage"
            lazy-src="/img/default.jpg"
            max-width="200"
            max-height="200"
            class="mx-auto pt-3"
          ></v-img>
        </div>
        <v-card-title class="text-truncate">
          {{ product.name }}
        </v-card-title>
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
    },
    productImage () {
      return 'https://ibial.com/store/image/' + this.product.image
      /* const img = new Image()
      img.src = 'https://dev.ibial.com/store/image/' + this.product.image
      if (img.height !== 0) {
        return img.src
      } else {
        return '/img/default.jpg'
      } */
    }
  },
  methods: {
    details (data) {
      this.$router.push({
        path: '/products/' + data.product_id
        // params: { id: data.product_id }
        // query: { data }
      })
    },
    buynow (data) {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
      } else {
        const params = {
          product_id: data.product_id,
          quantity: 1,
          option: '',
          api_id: this.$auth.user.id,
          customer_id: this.$auth.user.id
        }
        this.$store.dispatch('addToCart', params)
      }
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
.product__panel {
  box-shadow: 0px 4px 10px rgba(189, 189, 189, 0.25) !important;
}
</style>
