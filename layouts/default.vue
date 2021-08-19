<template>
  <v-app>
    <Header v-if="this.$auth.loggedIn" />
    <v-main class="main_panel">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer
      :absolute="!fixed"
      app
      class="footer-content"
    >
      <div class="container">
        <Footer />
      </div>
    </v-footer >-->
    <v-snackbar v-model="notification" :color="mscolor" right top>
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" v-bind="attrs" icon @click="notification = false">
          <v-icon>{{ mscolor == 'primary' ? 'mdi-check' : 'mdi-close'}}</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { Header } from '@/components/layouts'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header
    // Footer
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      notification: false,
      message: '',
      mscolor: '',
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
  computed: {
    ...mapGetters(['getNotifications'])
  },
  watch: {
    getNotifications () {
      if (this.getNotifications.type === 'account') {
        this.notification = this.getNotifications.display
        this.message = this.getNotifications.message
        this.mscolor = this.getNotifications.color
      }
    }
  },
  methods: {},
  mounted () {
    if (this.$auth.loggedIn) {
      const params = {
        api_id: this.$auth.user.id,
        customer_id: this.$auth.user.id
      }
      this.$store.dispatch('getCartProducts', params)
    }
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
.footer-content {
  background-color: #303030 !important;
  color: #ffffff;
}
.main_panel {
  background: #f7f7f7;
}
</style>

<style>
.product__panel {
  box-shadow: 0px 4px 10px rgba(189, 189, 189, 0.25) !important;
}
</style>
