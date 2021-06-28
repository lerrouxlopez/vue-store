<template>
  <div>
    <v-app-bar
      fixed
      app
      flat
      class="header__panel"
    >
      <div class="container d-flex">
        <v-btn
          icon
          @click="$router.push('/')"
        >
          <v-img src="/img/ibial-logo.svg" />
        </v-btn>
        <v-btn
          icon
          class="text-capitalize ml-3"
          @click="$router.push('/')"
        >
          <div class="text-center">
            <img src="/img/market_idle.svg" class="pb-0"/>
            <div class="caption py-0 hidden-sm-and-down">Store</div>
          </div>
        </v-btn>
        <v-spacer />
       <v-text-field
          outlined
          dense
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          class="shrink mr-5 mt-1 hidden-sm-and-down"
        >
        </v-text-field>
        <v-btn
          icon
          :disabled="Cart.length == 0"
          @click="$router.push('/cart')"
        >
          <v-badge
            color="red accent-4"
            bordered
            :content="Cart.length"
            overlap
            :value="Cart.length > 0 ? true : false"
            >
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
        <!-- <cart-menu :cart="myCart"></cart-menu> -->
        <v-btn
          icon
        >
          <v-badge
            color="red accent-4"
            :content="notifCounter"
            bordered
            overlap
            :value="notifCounter > 0 ? true : false"
          >
          <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
        <v-menu v-if="$auth.loggedIn" bottom left offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              rounded
              class="text-capitalize mt-2"
              :ripple="false"
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar size="40" color="white"></v-avatar>
              <span class="font-weight-bold px-2 hidden-sm-and-down">{{ $auth.user.name }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/purchases')">
              <v-list-item-title>Purchases</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logout">
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div v-else class="px-3 pt-1 hidden-sm-and-down">
          <v-btn
              color="primary"
              rounded
              outlined
              class="text-capitalize px-3"
              @click="$router.push('/login')"
          >
              Login
          </v-btn>
        </div>
      </div>
      <v-menu v-if="$vuetify.breakpoint.smAndDown">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-if="!$auth.loggedIn" to="/login">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
// import { CartMenu } from '@/components/cart'
import { mapGetters } from 'vuex'

export default {
  components: {
    // CartMenu
  },
  data () {
    return {
      cartMenu: false,
      cartCounter: 0,
      notifCounter: 0
    }
  },
  computed: {
    ...mapGetters(['Cart'])
  },
  methods: {
    async logout () {
      try {
        await this.$auth.logout()
        const notif = {
          type: 'account',
          display: true,
          color: 'primary',
          message: 'Logout Successfully.'
        }
        this.$store.dispatch('addNotifications', notif)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
.header__panel {
  background-color: #FFFFFF !important;
  box-shadow: 1px 1px 10px rgba(160, 168, 176, 0.25) !important;
}
</style>
