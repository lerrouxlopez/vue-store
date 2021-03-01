<template>
  <div>
    <v-card-text>{{ details }}</v-card-text>
    <v-card-subtitle class="font-weight-bold">Key Plugin Features</v-card-subtitle>
    <v-card-text>
      <ul>
        <li v-for="item in features" :key="item">{{ item }}</li>
      </ul>
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
