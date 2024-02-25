<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

        <!--        <p class="mt-4 max-w-md text-gray-500">-->
        <!--          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure-->
        <!--          dicta incidunt est ipsam, officia dolor fugit natus?-->
        <!--        </p>-->
      </header>

      <div class="mt-8 block lg:hidden">
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
              class="size-4 rtl:rotate-180"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
      </div>

      <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div class="hidden space-y-4 lg:block">
          <label
              for="productSearch"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
                type="email"
                id="productSearch"
                placeholder="search"
                v-model="searchQuery"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="flex absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
              Search Product
            </span>
          </label>
          <div>
            <label for="SortBy" class="block text-xs font-medium text-gray-700"> Sort By </label>

            <select id="SortBy" class="h-10 rounded border-gray-300 text-sm" v-model="sortOption" @change="applySort">
              <option value="">Sort By</option>
              <option value="title,desc">Title, DESC</option>
              <option value="title,asc">Title, ASC</option>
              <option value="price,desc">Price, DESC</option>
              <option value="price,asc">Price, ASC</option>
            </select>
          </div>

          <div>
            <p class="block text-xs font-medium text-gray-700">Filters</p>

            <div class="mt-1 space-y-2">
              <details
                  class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                    class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span class="text-sm font-medium"> Price </span>

                  <span class="transition group-open:-rotate-180">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div class="border-t border-gray-200 bg-white">
                  <div class="border-t border-gray-200 p-4">
                    <div class="flex justify-between gap-4">
                      <label for="FilterPriceFrom" class="flex items-center gap-2">
                        <span class="text-sm text-gray-600">Tg</span>

                        <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            v-model="minPrice"
                            class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>

                      <label for="FilterPriceTo" class="flex items-center gap-2">
                        <span class="text-sm text-gray-600">Tg</span>

                        <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            v-model="maxPrice"
                            class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>
                    </div>
                    <header class="flex items-center justify-between p-4">
                      <button type="button" class="text-sm text-gray-900 underline underline-offset-4"
                      @click="resetFilters">
                        Reset
                      </button>
                    </header>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="product in products" :key="product._id">
              <a href="#" class="group block overflow-hidden">
                <img
                    :src="product.imageURL"
                    :alt="product.name"
                    class="h-[100px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                />

                <div class="relative bg-white pt-3">
                  <router-link :to="`/product/${product._id}`" class="group block overflow-hidden">

                    <h3
                        class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      {{ product.name }}
                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-gray-900"> {{ product.price }} Tenge </span>
                    </p>
                  </router-link>

                  <button
                      @click="handleAddToCart(product)"
                      class="px-7 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    ADD TO CART
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useCart} from "@/composables/useCart";
import {onMounted, ref, watch} from "vue";
import {useItem} from "@/composables/useItem";
import axios from "axios";
import {API_URL} from "@/utils/consts";

const {handleFetchProducts,
  filterProducts,
  searchProducts,
} = useItem();
const {addToCart} = useCart();

const products = ref([]);
const minPrice = ref('');
const maxPrice = ref('');
const searchQuery = ref('');

onMounted(async () => {
  const result = await handleFetchProducts();
  products.value = result.data;
});

const sortOption = ref('');

// TODO, make the search and filter dependent to each other
watch(searchQuery, (newValue) => {
  setTimeout(async () => {
    const result = await searchProducts({ name: newValue });
    products.value = result.data;
  }, 1000)
}, { deep: false, immediate: false });

// Watcher for price filters
watch([minPrice, maxPrice], ([newMinPrice, newMaxPrice]) => {
  setTimeout(async () => {
    const params = {
    minPrice: newMinPrice,
    maxPrice: newMaxPrice,
  };
  const result = await filterProducts(params);
  products.value = result.data;
}, 1000)

}, { deep: false, immediate: false });

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

const resetFilters = async () => {
  minPrice.value = '';
  maxPrice.value = '';
  searchQuery.value = '';
  const result = await handleFetchProducts();
  products.value = result.data;
};

// Add a product to the cart
function handleAddToCart(product) {
  console.log(product)
  addToCart(product);
}
</script>
