<template>
<h1>Szavazás állás</h1>
</template>

<script setup>
import { useSzavazoStore } from '@/stores/szavazatok';
import { onMounted, ref } from 'vue';
const store = useSzavazoStore()
onMounted(() => {
store.loadSzavazatok()
})

</script>
