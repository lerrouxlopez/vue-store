<template>
  <div>
    <v-app-bar
      fixed
      app
      flat
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
            <div class="caption py-0">Store</div>
          </div>
        </v-btn>
        <v-spacer />
       <v-text-field
          outlined
          dense
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          class="shrink mr-5 mt-1"
        >
        </v-text-field>
        <cart-menu :cart="myCart"></cart-menu>
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
              <v-avatar size="40" color="primary"></v-avatar>
              <span class="font-weight-bold px-2">{{ $auth.user.name }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/purchases')">
              <v-list-item-title>Purchases</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/account')">
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logout">
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div v-else class="px-3 pt-1">
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
    </v-app-bar>
  </div>
</template>

<script>
import { CartMenu } from '@/components/cart'
import { mapGetters } from 'vuex'

export default {
  components: {
    CartMenu
  },
  data () {
    return {
      cartMenu: false,
      cartCounter: 0,
      notifCounter: 0
    }
  },
  computed: {
    ...mapGetters(['myCart'])
  },
  methods: {
    async logout () {
      try {
        await this.$auth.logout()
        const notif = {
          display: true,
          type: 'primary',
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
</style>
