<template>
  <div class="purchase-container">
    <h1>Purchases</h1>
    <PurchaseItem v-for="(item, i) in data" :key="i" :details="item"/>
  </div>
</template>

<script>
import { PurchaseItem } from '@/components/purchases'
export default {
  components: {
    PurchaseItem
  },
  data () {
    return {
      data: [
        {
          product_name: 'Product Name 1',
          seller_name: 'Seller Name',
          payment: 29.00
        },
        {
          product_name: 'Product Name 2',
          seller_name: 'Seller Name',
          payment: 29.00
        },
        {
          product_name: 'Product Name 3',
          seller_name: 'Seller Name',
          payment: 29.00
        },
        {
          product_name: 'Product Name 4',
          seller_name: 'Seller Name',
          payment: 29.00
        },
        {
          product_name: 'Product Name 5',
          seller_name: 'Seller Name',
          payment: 29.00
        }
      ]
    }
  }
}
</script>

<style scoped>
.purchase-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
