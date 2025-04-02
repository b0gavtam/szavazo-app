<template>
  <h1>Itt szavazhatsz!</h1>
  <p>
    <select v-model="temak">
      <option v-for="tema in temaStore.temak" @change="temaStore.fetchAllTema">{{ tema.tema }}</option>
    </select>
  </p>
  <div v-if="temaId">
    <h3>Szavazati lehetőségek</h3>
  </div>

</template>

<script setup>
import { useTemaStore } from '@/stores/szavazatok'
import { onMounted } from 'vue'
const temaStore = useTemaStore()

onMounted(async () => {
  await temaStore.fetchAllTema()
})
</script>
