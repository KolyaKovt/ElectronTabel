<script setup lang="ts">
import { ref, onMounted, watch, Ref } from 'vue'

interface Supplier {
  name: string
}

interface Api {
  getSuppliers: (input: string) => Promise<Supplier[]>
}

const api: Api = window.api as Api
const allSuppliers: Ref<Supplier[]> = ref([])
const searchInput: Ref<string> = ref('')

onMounted(async () => {
  allSuppliers.value = await api.getSuppliers('')
})

watch(searchInput, async (newValue) => {
  allSuppliers.value = await api.getSuppliers(newValue)
})
</script>

<template>
  <h1>Our suppliers:</h1>
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
