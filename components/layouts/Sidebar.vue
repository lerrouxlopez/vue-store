<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="300"
        flat
    >
        <v-list>
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
        >
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="route(item.link)"
            >
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
            <v-list-item-icon>
                <v-icon>mdi-bookmark-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Saved Offerings</v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </v-list-item-group>
        </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedItem: 0,
      items: [
        { text: 'My Store', icon: 'mdi-circle', link: '/' },
        { text: 'Purchases', icon: 'mdi-cart-outline', link: '/purchases' }
      ]
    }
  },
  methods: {
    route (link) {
      this.$router.push(link)
    }
  }
}
</script>
