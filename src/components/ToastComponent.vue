<!-- ToastNotification.vue -->
<template>
  <div v-if="toast.isVisible" class="fixed bottom-5 right-5 flex items-center space-x-2 bg-blue-500 text-white text-sm px-4 py-3 rounded shadow">
    <span>{{ toast.message }}</span>
    <button @click="closeToast">✕</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const toast = inject('toast');

function closeToast() {
  toast.isVisible.value = false;
}
</script>
