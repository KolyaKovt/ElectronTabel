<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const api = window.api
const allSuppliers = ref([])
const searchInput = ref('')

onMounted(async () => {
  allSuppliers.value = await api.getSuppliers('')
})

watch(searchInput, async (newValue) => {
  allSuppliers.value = await api.getSuppliers(newValue)
})
</script>

<template>
  <h1>Our suppliers: </h1>
  <br />
  Search: <input v-model="searchInput" type="text" />
  <br />
  <ul>
    <li v-for="(supplier, index) in allSuppliers" :key="index">
      {{ supplier.name }}
    </li>
  </ul>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
