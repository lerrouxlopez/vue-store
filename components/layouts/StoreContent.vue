<template>
  <div>
    <div class="py-3 font-weight-bold"><h3>iBial Products</h3></div>
    <v-row>
      <v-col v-for="product in products" :key="product.id">
        <product-item :product="product"></product-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ProductItem } from '@/components/products'

export default {
  components: {
    ProductItem
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
            'A set of Mad Chatter Pro license keys',
            'Option to while label the plugin',
            'Personalize the Mad CHatter interface to match your customers preferences',
            'Your own dashboard to track licenses with their associated domains',
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
  }
}
</script>
