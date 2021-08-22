<template>
  <div class="pt-6">
    <v-form ref="form" v-model="valid">
      <v-card-text>
        <v-textarea
          v-model="postReview"
          rows="2"
          outlined
          label="Post Something"
          :rules="[minLength('review', 25)]"
        ></v-textarea>

        <div class="d-flex pt-3 justify-space-between">
          <div>
            <v-btn @click="sample" icon>
              <v-icon>mdi-paperclip</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-image-outline</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn
              @click="post"
              color="primary"
              rounded
              class="text-capitalize"
              :disabled="!valid"
            >Post</v-btn>
          </div>
        </div>
      </v-card-text>
    </v-form>
  </div>
</template>

<script>
import validations from '@/utils/validations'

export default {
  props: ['details', 'features'],
  data () {
    return {
      postReview: '',
      dialog: false,
      ...validations,
      valid: true
    }
  },
  methods: {
    post () {
      const data = {
        product_id: this.details.product_id,
        name: this.$auth.user.name,
        text: this.postReview,
        rating: 4
      }
      console.log(data)
      this.$store.dispatch('addReviews', data)
      this.$refs.form.reset()
    },
    sample () {
      this.$store.dispatch('getReviews', this.details.product_id)
    }
  },
  created () {
    this.$store.dispatch('getReviews', this.details.product_id)
  }
}
</script>
