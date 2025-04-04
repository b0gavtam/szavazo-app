<template>
  <h1>Itt szavazhatsz!</h1>
  <p>
    <select v-model="temaStore.temak">
      <option v-for="t in temaStore.temak" @change="temaStore.fetchAllOpciok(temaId)">{{ t.tema }}</option>
    </select>
  </p>
  <div v-if="temaId">
    <h3>Szavazati lehetőségek</h3>
    <p v-for="o in temaStore.opciok"><input type="radio" name="opcio"  v-model="szavazat" :value="o.id">{{ o.opcio }}</p>
  </div>
  <button @click="temaStore.szavazok(szavazat)">Szavazok</button>
</template>

<script setup>
import { useSzavazoStore } from '@/stores/szavazatok'
import { onMounted, ref } from 'vue'
const temaStore = useSzavazoStore()
const szavazat = ref(null);
const temaId = ref(null);
onMounted(async () => {
  await temaStore.fetchAllTema()
})
</script>
