<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title class="d-flex justify-space-between">
            <span>{{ details.title }} {{ details.subtitle != details.title ? details.subtitle : '' }}</span>
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
                v-for="item in details.tags"
                :key="item"
                color="secondary_background"
                class="secondary--text"
                small
                >{{ item }}</v-chip
              >
            </v-chip-group>
            <span class="caption font-weight-bold px-3">{{ details.reviews }} Reviews</span>
          </v-card-text>
          <v-img :src="details.img" width="250" class="mx-auto" />
          <v-card-subtitle>
            <v-tabs
              color="primary accent-4"
            >
              <v-tab class="text-capitalize">Description</v-tab>
              <v-tab class="text-capitalize">Reviews</v-tab>
              <v-tab-item>
                <ProductDescription :details="details.details" :features="details.features"/>
              </v-tab-item>
               <v-tab-item>
                <ProductReviews />
              </v-tab-item>
            </v-tabs>

          </v-card-subtitle>
        </v-card>
        <div class="pa-3">
          <h4>More offerings from Company C</h4>
          <MoreOfferings />
        </div>
      </v-col>
      <v-col cols="4">
        <v-card>
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
                  v-for="(item,i) in products"
                  :key="i"
                  class="mb-2 accent"
                >
                  <v-expansion-panel-header
                    hide-actions
                    class="d-flex justify-space-between font-weight-bold"
                  >
                    <div>{{ item.subtitle }}</div>
                    <div class="text-right">{{ item.price }}</div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ item.details }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <div class="pt-3">
              <v-btn
                rounded
                color="primary"
                class="text-capitalize"
                block
              >
                Select Plan
              </v-btn>
            </div>
            <div class="pt-3">
              <v-btn
                rounded
                text
                color="primary"
                class="text-capitalize"
                block
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
export default {
  components: {
    ProductDescription,
    ProductReviews,
    MoreOfferings
  },
  data () {
    return {
      products: [
        {
          img: '/img/Logo_Icon_Pro_200x200.png',
          title: 'Mad Chatter Pro',
          subtitle: 'Mad Chatter Pro',
          details: 'Turn your website visitors into valued customers with Mad Chatter. With features like chat agent assignment, multimedia chat, surveys, and widget personalization, your business will now grow faster than ever.',
          price: '$29.00',
          tags: ['#MadChatterPro', '#MadChatter', '#Chat', '#iBial'],
          reviews: 0,
          features: [
            'A dashboard that lets you view and add notes about your site',
            'Assign chats to the right person in your team',
            'Personalize the look and feel of your chat widget to fit your brand',
            'Collect contact details and feedback with pre- and post-chat surveys',
            'Screen and audio recording to help you troubleshoot/resolve issues faster',
            'File Sharing',
            'Website traffic monitoring',
            'Downloadable email transcripts',
            'Easy to install and use'
          ]
        },
        {
          img: '/img/Logo_Reseller_200x200.png',
          title: 'Mad Chatter Reseller',
          subtitle: 'Package A',
          details: 'Earn recurring revenues with a small one-time investment and be your own boss. Mad Chatter Reseller Package A serves as the foundation for a white-label reselling business model and comes with 5 license keys.',
          price: '$89.00',
          tags: ['#MadChatterPro', '#MadChatter', '#Chat', '#iBial'],
          reviews: 0,
          features: [
            'A dashboard that lets you view and add notes about your site',
            'Assign chats to the right person in your team',
            'Personalize the look and feel of your chat widget to fit your brand',
            'Collect contact details and feedback with pre- and post-chat surveys',
            'Screen and audio recording to help you troubleshoot/resolve issues faster',
            'File Sharing',
            'Website traffic monitoring',
            'Downloadable email transcripts',
            'Easy to install and use'
          ]
        },
        {
          img: '/img/Logo_Reseller_200x200.png',
          title: 'Mad Chatter Reseller',
          subtitle: 'Package B',
          details: 'Earn recurring revenues with a small one-time investment and be your own boss. Mad Chatter Reseller Package B serves as the foundation for a white-label reselling business model and comes with 20 license keys.',
          price: '$99.00',
          tags: ['#MadChatterPro', '#MadChatter', '#Chat', '#iBial'],
          reviews: 0,
          features: [
            'A dashboard that lets you view and add notes about your site',
            'Assign chats to the right person in your team',
            'Personalize the look and feel of your chat widget to fit your brand',
            'Collect contact details and feedback with pre- and post-chat surveys',
            'Screen and audio recording to help you troubleshoot/resolve issues faster',
            'File Sharing',
            'Website traffic monitoring',
            'Downloadable email transcripts',
            'Easy to install and use'
          ]
        },
        {
          img: '/img/Logo_Reseller_200x200.png',
          title: 'Mad Chatter Reseller',
          subtitle: 'Package C',
          details: 'Earn recurring revenues with a small one-time investment and be your own boss. Mad Chatter Reseller Package C serves as the foundation for a white-label reselling business model and comes with 120 license keys.',
          price: '$399.00',
          tags: ['#MadChatterPro', '#MadChatter', '#Chat', '#iBial'],
          reviews: 0,
          features: [
            'A dashboard that lets you view and add notes about your site',
            'Assign chats to the right person in your team',
            'Personalize the look and feel of your chat widget to fit your brand',
            'Collect contact details and feedback with pre- and post-chat surveys',
            'Screen and audio recording to help you troubleshoot/resolve issues faster',
            'File Sharing',
            'Website traffic monitoring',
            'Downloadable email transcripts',
            'Easy to install and use'
          ]
        }
      ]
    }
  },
  computed: {
    details () {
      return this.$route.query.data
    },
    filterDetails () {
      return this.details.details
    },
    panel () {
      let data = 0
      for (let index = 0; index < this.products.length; index++) {
        if (this.products[index].subtitle === this.details.subtitle) {
          data = index
        }
      }
      console.log(data)
      return data
    }
  }
}
</script>
