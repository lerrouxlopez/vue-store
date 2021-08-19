<template>
  <div class="store-container">
    <v-row>
      <v-col>
        <StoreContent />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { StoreContent } from '@/components/layouts'
export default {
  components: {
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
