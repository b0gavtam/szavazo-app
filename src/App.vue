<template>
  <div class="contaimner">
    <nav class="text-center">
      <RouterLink class="btn btn primary m-3" to="/">Home</RouterLink>
      <RouterLink class="btn btn primary m-3" to="/eredmeny">Eredmény</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
