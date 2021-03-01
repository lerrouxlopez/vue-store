<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="footer-content"
    >
      <div class="container">
        <!--<span>&copy; {{ new Date().getFullYear() }}</span>-->
        <Footer />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { Header, Footer } from '@/components/layouts'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {}
}
</script>

<style scoped>
.footer-content {
  background-color: #303030 !important;
  color: #ffffff;
}
</style>
