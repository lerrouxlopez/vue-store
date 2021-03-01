<template>
  <v-card>
    <v-card-title>
       <h5>Rate Product</h5>
    </v-card-title>

    <v-card-text class="d-flex">
      <v-avatar rounded color="primary" width="50"></v-avatar>
      <span class="px-3 py-2">Learn Adobe XD - Beginner Level</span>
    </v-card-text>
    <v-card-title class="py-0">
       <div><h5>How satisfied are you with your purchase?</h5></div>
       <div class="d-flex mx-auto">
         <v-img
           v-for="(item, i) in rating"
           :key="i"
           :src="item.toggle ? item.active : item.inactive"
           width="40"
           class="my-3 mx-3 rating-icon"
           @click="toggleRating(item.id)"
        ></v-img>
       </div>
       <div class="container px-0">
         <v-textarea
           class="caption"
           rows="3"
           hide-details
           outlined
           full-width
           placeholder="Share your experience and help other buyers make better choices!"
         ></v-textarea>
       </div>
       <div class="d-flex justify-space-between mx-auto">
         <div class="file_upload mr-3 d-flex justify-center">
           <div class="d-flex">
             <v-icon>mdi-camera-outline</v-icon>
             <span class="caption pt-7 px-2">Add Photo</span>
           </div>
         </div>
         <div class="file_upload d-flex justify-center">
           <div class="d-flex">
             <v-icon>mdi-video-outline</v-icon>
             <span class="caption pt-7 px-2">Add Video</span>
           </div>
         </div>
       </div>
    </v-card-title>
    <v-divider class="my-4"></v-divider>
    <v-card-actions class="d-flex justify-center pb-3">
        <v-btn
          rounded
          color="primary"
          class="text-capitalize px-6"
        >
          Submit
        </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      rating: [
        {
          id: 1,
          inactive: '/img/emoji/1_emoji.png',
          active: '/img/emoji/1_emoji_active.png',
          toggle: false
        },
        {
          id: 2,
          inactive: '/img/emoji/2_emoji.png',
          active: '/img/emoji/2_emoji_active.png',
          toggle: false
        },
        {
          id: 3,
          inactive: '/img/emoji/3_emoji.png',
          active: '/img/emoji/3_emoji_active.png',
          toggle: false
        },
        {
          id: 4,
          inactive: '/img/emoji/4_emoji.png',
          active: '/img/emoji/4_emoji_active.png',
          toggle: false
        },
        {
          id: 5,
          inactive: '/img/emoji/5_emoji.png',
          active: '/img/emoji/5_emoji_active.png',
          toggle: false
        }
      ]
    }
  },
  methods: {
    toggleRating (id) {
      for (let index = 0; index < this.rating.length; index++) {
        if (id === this.rating[index].id) {
          this.rating[index].toggle = true
        } else {
          this.rating[index].toggle = false
        }
      }
    }
  }
}
</script>

<style scoped>
.file_upload {
  width: 200px;
  height: 80px;
  border: 1px solid;
  border-style: dashed;
  border-radius: 5px;
}
.file_upload:hover,
.rating-icon:hover {
  cursor: pointer;
}
</style>
