<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="/">
            <span class="">Home</span>
          </a>
        </div>
        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block" >
            <ul class="flex items-center gap-6 text-sm">
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/products">
                All Products
              </a>
              <li v-for="link in links" :key="link.name">

                <a :class="link.class" :href="link.url" v-if="authenticated">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </nav>
          <span class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm" v-if="authenticated">
            <button
                class="inline-block px-4 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
                title="View Orders"
                @click="goToCart()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
            </button>
          </span>
          <div class="flex items-center gap-4" v-if="!authenticated">
            <div class="sm:flex sm:gap-4">
              <a v-for="action in actions" :key="action.name" :class="action.class" :href="action.url">
                {{ action.name }}
              </a>
            </div>
          </div>
          <div class="block md:hidden" v-if="!authenticated">
            <button
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {onMounted, ref} from "vue";
import router from "@/router";

const links = ref([
  // {name: 'History', url: '/history', class: 'text-gray-500 transition hover:text-gray-500/75'},
  {name: 'Profile', url: '/profile', class: 'text-gray-500 transition hover:text-gray-500/75'},
]);

const actions = ref([
  {name: 'Login', url: '/login', class: 'rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow'},
  {name: 'Register', url: '/register', class: 'rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600'},
]);

const authenticated = ref()
onMounted(() => {
  if (localStorage.getItem('access_token') == null) {
    authenticated.value = false
  } else [
    authenticated.value = true
  ]
})
defineProps({
  msg: {
    type: String,
  }
})

const goToCart = () => {
  router.push({name: 'Cart'})
}
</script>

<style scoped>

</style>
