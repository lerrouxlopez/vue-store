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
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
                <v-badge
                    color="red accent-4"
                    content="0"
                    bordered
                >
                <v-icon>mdi-cart-outline</v-icon>
                </v-badge>
            </v-btn>
          </template>
          <v-card width="400">
            <v-card-text>
              <div class="d-flex justify-space-between">
                <div class="d-flex">
                  <div><v-img src="/img/Logo_Icon_Pro_200x200.png" width="50"></v-img></div>
                  <span class="primary--text font-weight-bold pt-4 px-3">Mad Chatter Pro</span>
                  <div class="caption px-3 pt-2 text-center">
                    <div class="font-weight-bold">Quantity</div>
                    <div>1</div>
                  </div>
                  <div class="caption pt-2 text-center">
                    <div class="font-weight-bold">Price</div>
                    <div>$39.00</div>
                  </div>
                </div>
                <div>
                  <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <v-row class="font-weight-bold py-0 text-right">
                <v-col>Sub-Total</v-col>
                <v-col>$39.00</v-col>
              </v-row>
              <v-row class="font-weight-bold py-0 text-right">
                <v-col>Total</v-col>
                <v-col>$39.00</v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-end">
               <v-btn rounded text dense class="text-capitalize" @click="$router.push('/cart')">
                 <v-icon left>mdi-cart-outline</v-icon>
                 View Cart
               </v-btn>
               <v-btn rounded text dense class="text-capitalize" @click="$router.push('/checkout')">
                 <v-icon left>mdi-forward</v-icon>
                 Checkout
               </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
        <v-btn
          icon
        >
            <v-badge
                color="red accent-4"
                content="0"
                bordered
            >
            <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
        </v-btn>
        <v-menu bottom left offset-y>
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
              <span class="font-weight-bold px-2">User Name</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Purchases</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
</style>
