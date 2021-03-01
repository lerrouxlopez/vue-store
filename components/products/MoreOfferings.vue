<template>
  <div class="py-3">
    <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="800"
    >
      <v-slide-group
        v-model="model"
        class="pa-0"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
        >
          <v-card
            class="ma-4"
            height="350"
            width="250"
            @click="toggle"
          >
            <v-avatar
              color="primary"
              rounded
              width="250"
              height="100"
              class="d-flex justify-end align-start"
            >
              <div class="d-flex justify-end">
                <v-icon>mdi-bookmark-outline</v-icon>
              </div>
            </v-avatar>
            <div class="caption px-3 py-2 medium_gray--text">
              <span>#NetworkSystems</span>
              <span>#DevsOfVietnam</span>
            </div>
            <div class="px-3 pb-3">
              <h4>Lorem Ipsum</h4>
              <p class="caption pt-3">Instantly turn your WordPress articles into podcasts with no mics or studios...</p>
              <div class="caption">
                <span class="medium_gray--text">Seller: </span><span class="font-weight-bold"> Company C</span>
                <div class="caption pt-3 d-flex justify-space-between">
                  <span>😃 16</span>
                  <span class="font-weight-bold">from $100</span>
                </div>
              </div>

            </div>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-end">
              <v-btn text rounded color="primary" class="text-capitalize px-3 caption">Add to Cart</v-btn>
              <v-btn
                color="primary"
                rounded
                outlined
                class="text-capitalize px-3 caption"
                @click="buynow"
              >
                Buy Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
