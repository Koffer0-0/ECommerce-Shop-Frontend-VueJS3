<template>
  <header>
    <BaseNavigation v-if="!$route.meta.fullScreen"/>
  </header>
  <main>
    <router-view/>
  </main>
  <ToastComponent />
</template>

<script setup lang="ts">
import BaseNavigation from "./components/BaseNavigation.vue";

import { useToast } from './composables/useToast';
import {provide} from "vue";

const toast = useToast();
provide('toast', toast);
</script>