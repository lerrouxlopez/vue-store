<template>
  <div class="mt-12 py-6">
    <v-row>
      <v-col cols="8">
        <v-card flat class="product__panel">
          <div v-if="!details.name">
            <v-row>
              <v-col>
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="image, article, list-item-two-line"
                ></v-skeleton-loader>
              </v-col>
              <v-col>
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="image, article, list-item-two-line"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <v-card-title class="d-flex justify-space-between">
              <span class="font-weight-bold">{{ details.name }} </span>
              <span>
                <v-btn icon>
                  <v-icon>mdi-bookmark-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant-outline</v-icon>
                </v-btn>
              </span>
            </v-card-title>
            <v-card-text class="d-flex justify-space-between">
              <v-chip-group column>
                <v-chip
                  v-for="item in tags"
                  :key="item"
                  color="secondary_background"
                  class="secondary--text"
                  small
                  >{{ item }}</v-chip
                >
              </v-chip-group>
              <span class="caption font-weight-bold px-3">{{ details.reviews }} Reviews</span>
            </v-card-text>
            <v-img
              :src="productImage"
              width="250"
              class="mx-auto"
              @error="imgError"
            />
            <v-card-subtitle>
              <div class="px-3">
                <!-- <div>
                  <h3>Description</h3>
                </div> -->
                <div class="pt-3 product__details" v-html="sanitize"></div>
                <!-- <ul class="ml-6">
                  <li v-for="item in details.features" :key="item">{{ item }}</li>
                </ul> -->
                <div class="py-6">
                  <h3>Pricing comparison</h3>
                </div>
                <v-simple-table class="pb-6">
                  <thead>
                    <tr>
                      <th>Packages</th>
                      <th>This is the basic package</th>
                      <th>This is the standard package</th>
                      <th>This is the premium package</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in comparison" :key="i">
                      <td  class="caption text-center">{{ item.package }}</td>
                      <td  class="caption text-center"><v-icon color="primary">{{ item.basic ? 'mdi-check' : ''}}</v-icon></td>
                      <td  class="caption text-center"><v-icon color="primary">{{ item.standard ? 'mdi-check' : '' }}</v-icon></td>
                      <td  class="caption text-center"><v-icon color="primary">{{ item.premium ? 'mdi-check' : '' }}</v-icon></td>
                    </tr>
                    <tr>
                      <td class="caption text-center">Refund period</td>
                      <td class="medium_gray--text caption text-center">30 days</td>
                      <td class="medium_gray--text caption text-center">30 days</td>
                      <td class="medium_gray--text caption text-center">30 days</td>
                    </tr>
                    <tr>
                      <td class="caption text-center">Delivery time</td>
                      <td class="medium_gray--text caption text-center">24 hrs</td>
                      <td class="medium_gray--text caption text-center">24 hrs</td>
                      <td class="medium_gray--text caption text-center">24 hrs</td>
                    </tr>
                    <tr>
                      <td class="caption text-center">Price</td>
                      <td class="medium_gray--text caption font-weight-bold text-center py-3">
                        $10
                        <div class="pt-3">
                          <v-btn
                            rounded
                            outlined
                            color="primary"
                            class="text-capitalize"
                          >Select</v-btn>
                        </div>
                      </td>
                      <td class="medium_gray--text caption font-weight-bold text-center py-3">
                        $50
                        <div class="pt-3">
                          <v-btn
                            rounded
                            outlined
                            color="primary"
                            class="text-capitalize"
                          >Select</v-btn>
                        </div>
                      </td>
                      <td class="medium_gray--text caption font-weight-bold text-center py-3">
                        $100
                        <div class="pt-3">
                          <v-btn
                            rounded
                            outlined
                            color="primary"
                            class="text-capitalize"
                          >Select</v-btn>
                        </div>
                      </td>
                    </tr>
                    <v-divider></v-divider>
                  </tbody>
                </v-simple-table>
              </div>
              <v-tabs
                color="primary accent-4"
              >
                <v-tab v-if="$auth.loggedIn" class="text-capitalize">Post</v-tab>
                <v-tab class="text-capitalize">Review</v-tab>
                <v-tab-item v-if="$auth.loggedIn">
                  <ProductDescription :details="details" :features="details.features"/>
                </v-tab-item>
                <v-tab-item>
                  <ProductReviews :product_id="details.product_id"/>
                </v-tab-item>
              </v-tabs>

            </v-card-subtitle>
          </div>
        </v-card>
        <div class="pa-3 mt-6">
          <h4>More offerings from Company C</h4>
          <MoreOfferings />
        </div>
      </v-col>
      <v-col cols="4">
        <v-card flat class="product__panel">
          <v-card-title><span class="mx-auto">Plans</span></v-card-title>
          <v-card-subtitle class="d-flex justify-center">
            <v-btn text class="caption primary--text text-capitalize">
              Compare pricing
            </v-btn>
          </v-card-subtitle>
          <v-card-text>
            <div>
              <v-expansion-panels flat v-model="panel">
                <v-expansion-panel
                  class="mb-2 accent"
                >
                  <v-expansion-panel-header
                    hide-actions
                    class="d-flex justify-space-between font-weight-bold"
                  >
                    <div>{{ details.name }}</div>
                    <div class="text-right">${{ parseFloat(details.price).toFixed(2) }}</div>
                  </v-expansion-panel-header>
                  <!-- <v-expansion-panel-content>
                    {{ details.description }}
                  </v-expansion-panel-content> -->
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <div class="pt-3">
              <v-btn
                rounded
                text
                color="primary"
                class="text-capitalize"
                block
                disabled
              >
                Select Plan
              </v-btn>
            </div>
            <div class="pt-3">
              <v-btn
                rounded
                color="primary"
                class="text-capitalize"
                :loading="loading"
                :disabled="!details.name"
                block
                @click="addToCart(details)"
              >
               Add to Cart
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ProductDescription, ProductReviews, MoreOfferings } from '@/components/products'
import { mapGetters } from 'vuex'
import sanitizeHtml from 'sanitize-html'

export default {
  components: {
    ProductDescription,
    ProductReviews,
    MoreOfferings
  },
  props: ['details'],
  data () {
    return {
      panel: '',
      defaultImg: '/img/default.jpg',
      loading: false,
      comparison: [
        {
          package: 'Content 1',
          basic: true,
          standard: true,
          premium: true
        },
        {
          package: 'Content 2',
          basic: false,
          standard: true,
          premium: true
        },
        {
          package: 'Content 3',
          basic: false,
          standard: false,
          premium: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getNotifications']),
    filterDetails () {
      return this.details.details
    },
    strippedContent () {
      const str = this.decodeHtml(this.details.description)
      const regex = /<\/?[^>]+(>|$)/g
      return str.replace(regex, '')
    },
    tags () {
      const str = this.details.tag
      if (str) {
        return str.replace(/'/ig, '').split(', ')
      } else {
        return str
      }
    },
    productImage () {
      return 'https://ibial.com/store/image/' + this.details.image
      /* const img = new Image()
      img.src = 'https://dev.ibial.com/store/image/' + this.details.image
      if (img.height !== 0) {
        return img.src
      } else {
        return '/img/default.jpg'
      } */
    },
    sanitize () {
      return sanitizeHtml(this.details.description)
    }
  },
  watch: {
    getNotifications () {
      if (this.getNotifications.type === 'cart') {
        this.loading = false
      }
    }
  },
  methods: {
    addToCart (details) {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
      } else {
        this.loading = true
        const date = new Date()
        const params = {
          product_id: details.product_id,
          quantity: 1,
          option: '',
          api_id: this.$auth.user.id,
          customer_id: this.$auth.user.id
        }
        console.log(date.getTime())
        console.log(params)
        this.$store.dispatch('addToCart', params)
      }
    },
    imgError () {
      this.src = this.defaultImg
    }
  }
}
</script>
