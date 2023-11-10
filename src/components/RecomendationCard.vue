<template>
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
          <div class="max-w-md mx-auto text-center lg:text-left">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Recommendations</h2>

              <p class="mt-4 text-gray-500">
                Here you can see the our recommendations
              </p>
            </header>

            <a
                href="#"
                class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
            >
              Shop All
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-8">
          <ul class="grid grid-cols-2 gap-4">
            <li v-for="product in products" :key="product.id">
              <router-link :to="`/product/${product.id}`"  class="block group">
                <img
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="object-cover w-full rounded aspect-square"
                />

                <div class="mt-3">
                  <h3
                      class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    {{ product.name }}
                  </h3>

                  <p class="mt-1 text-sm text-gray-700">{{ product.price }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const products = ref([
  {
    id: 1,
    name: 'Basic Tee',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    price: '2400 Tenge'
  },
  {
    id: 2,
    name: 'Basic Tee',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    price: '2400 Tenge'
  },
]);
</script>

<style scoped>

</style>