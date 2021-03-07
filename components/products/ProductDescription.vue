<template>
  <div class="pt-6">
    <v-card-text>
      <v-textarea
        rows="3"
        outlined
        hide-details
        label="Post Something"
      ></v-textarea>
      <div class="d-flex pt-3 justify-space-between">
        <div>
          <v-btn icon>
            <v-icon>mdi-paperclip</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-image-outline</v-icon>
          </v-btn>
        </div>
        <div>
          <v-btn
            color="primary"
            rounded
            class="text-capitalize"
          >Post</v-btn>
        </div>
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ['details', 'features'],
  data () {
    return {}
  }
}
</script>
