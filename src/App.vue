<template>
  <header>
    <BaseNavigation v-if="!$route.meta.fullScreen"/>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script setup lang="ts">
import BaseNavigation from "./components/BaseNavigation.vue";
</script>