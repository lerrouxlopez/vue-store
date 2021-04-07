<template>
  <div>
    <v-menu
      v-model="cartMenu"
      bottom
      left
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          :disabled="cart.length == 0"
        >
          <v-badge
            color="red accent-4"
            bordered
            :content="cart.length"
            overlap
            :value="cart.length > 0 ? true : false"
            >
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
        <v-card width="400">
          <v-card-text class="px-0 pb-0">
            <div>
              <v-simple-table dense class="caption">
                <template v-slot:default>
                  <thead>
                    <tr>
                    <th class="text-left"></th>
                    <th class="text-left primary--text">
                        Quantity
                    </th>
                    <th class="text-left primary--text">
                        Price
                    </th>
                    <th class="text-left primary--text">
                        Total
                    </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filterCart" :key="item.id">
                      <td class="font-weight-bold text-truncate">{{ item.name }}</td>
                      <td class="px-0 d-flex justify-space-between align-center">
                        <v-btn icon outlined x-small @click="removeQuantity(item.product_id)" class="px-0">
                          <v-icon x-small class="px-0">mdi-minus</v-icon>
                        </v-btn>
                        {{ item.quantity }}
                        <v-btn icon outlined x-small @click="addQuantity(item)" class="">
                          <v-icon x-small class="px-0">mdi-plus</v-icon>
                        </v-btn>
                      </td>
                      <td class="text-right">{{ parseFloat(item.price).toFixed(2) }}</td>
                      <td class="text-right">{{ (item.quantity * parseFloat(item.price)).toFixed(2) }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <v-row class="font-weight-bold py-0 text-right primary--text">
            <v-col>Total</v-col>
            <v-col>${{ totalPrice.toFixed(2) }}</v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-space-between">
          <div>
            <v-btn rounded text dense class="text-capitalize" @click="cartMenu = false">
              <v-icon left>mdi-close</v-icon>
              Close
            </v-btn>
          </div>
          <div>
            <v-btn rounded text dense class="text-capitalize" @click="$router.push('/cart'); cartMenu = false">
              <v-icon left>mdi-cart-outline</v-icon>
              View Cart
            </v-btn>
            <v-btn rounded text dense class="text-capitalize" @click="$router.push('/checkout'); cartMenu = false">
              <v-icon left>mdi-forward</v-icon>
              Checkout
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  data () {
    return {
      cartMenu: false
    }
  },
  computed: {
    filterCart () {
      const result = [...this.cart.reduce((mp, o) => {
        if (!mp.has(o.product_id)) { mp.set(o.product_id, { ...o, quantity: 0 }) }
        mp.get(o.product_id).quantity++
        return mp
      }, new Map()).values()]
      return result
    },
    totalPrice () {
      let total = 0
      this.cart.forEach((element) => {
        total = total + parseFloat(element.price)
      })
      return total
    }
  },
  methods: {
    sample () {
      console.log(this.filterCart)
    },
    addQuantity (data) {
      this.$store.dispatch('addToCart', data)
    },
    removeQuantity (data) {
      this.$store.dispatch('removeToCart', data)
    }
  }
}
</script>
