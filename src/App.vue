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

import { useToast } from './composables/useToast';
import {provide} from "vue";
import ToastComponent from "./components/ToastComponent.vue";

const toast = useToast();
provide('toast', toast);
</script>
<style lang="sass">
*
  font-family: "Helvetica", Sans-serif
</style>