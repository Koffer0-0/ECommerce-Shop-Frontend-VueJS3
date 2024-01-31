<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Product Collection
        </h2>

        <p class="mt-4 max-w-md text-gray-500">
<!--          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque-->
<!--          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit-->
<!--          natus?-->
        </p>
      </header>

      <div class="mt-8 sm:flex sm:items-center sm:justify-between">
        <div class="block sm:hidden">
          <button
              class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
          >
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4 rtl:rotate-180"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="hidden sm:flex sm:gap-4"></div>

        <div class="hidden sm:block">
          <label for="SortBy" class="sr-only">Sort By</label>
          <select id="SortBy" class="h-10 rounded border-gray-300 text-sm" v-model="sortOption" @change="applySort">
            <option value="">Sort By</option>
            <option value="title,desc">Title, DESC</option>
            <option value="title,asc">Title, ASC</option>
            <option value="price,desc">Price, DESC</option>
            <option value="price,asc">Price, ASC</option>
          </select>
        </div>
      </div>

      <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="product in products" :key="product._id">
          <router-link :to="`/product/${product._id}`" class="group block overflow-hidden">
            <img
                :src="product.imageURL"
                :alt="product.name"
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {{ product.name }}
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>
                <span class="tracking-wider text-gray-900"> {{ product.price }} </span>
              </p>

            </div>
          </router-link>
          <button
              @click="handleAddToCart(product)"
              class="px-8 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            ADD TO CART
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useCart } from "@/composables/useCart";
import { onMounted, ref } from "vue";
import { useProduct } from "@/composables/useProduct";
import axios from "axios";
import {API_URL} from "@/utils/consts";

const { handleFetchProducts } = useProduct();
const { addToCart } = useCart();

const products = ref([

]);

onMounted(async () => {
  const result = await handleFetchProducts();

  products.value = result.data;
});

const sortOption = ref('');

async function applySort() {
  if (!sortOption.value) return;

  const [sortBy, order] = sortOption.value.split(',');

  try {
    const response = await axios.get(API_URL + 'product/products', {
      params: {sortBy, order}
    });
    // Assuming you have a reactive variable to store products
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching sorted products:', error);
  }
}
// Add a product to the cart
function handleAddToCart(product) {
  console.log(product)
  addToCart(product);
}
</script>
