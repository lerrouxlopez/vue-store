<template>
  <div class="store-container">
    <v-row>
      <v-col cols="3">
        <Sidebar />
      </v-col>
      <v-col cols="9">
        <StoreContent />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Sidebar, StoreContent } from '@/components/layouts'
export default {
  components: {
    Sidebar,
    StoreContent
  }
}
</script>

<style scoped>
.store-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
