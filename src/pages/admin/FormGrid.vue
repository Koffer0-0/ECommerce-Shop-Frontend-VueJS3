<template>
  <div class="mt-3">
    <slot name="heading"></slot>
  </div>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
    <section class="lg:col-span-2">
      <slot name="form"></slot>
    </section>
    <section class="lg:col-span-1">
        <slot name="buttons"></slot>
    </section>
  </div>
</template>
<script setup lang="ts">
</script>