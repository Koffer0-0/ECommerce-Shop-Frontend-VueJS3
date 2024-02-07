<template>
  <main>
    <TheNavBar/>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-2">
        <TheSideBar/>
      </div>
      <div class="col-span-12 md:col-span-10">
        <router-view></router-view>
        <section>
          <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div
                class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
            ></div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheSideBar from "./TheSideBar.vue";
import TheNavBar from "./TheNavBar.vue";
</script>

<style scoped lang="sass">

</style>