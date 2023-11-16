<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">

    <!-- Column for additional images or navigation (hidden on small screens) -->
    <div class="hidden lg:block">
    </div>

    <!-- Column for the main product image -->
    <div class="col-span-1 md:col-span-2 lg:col-span-1">
      <a href="#" class="group block">
        <img
            :src="product.imageURL"
            :alt="product.name"
            class="h-auto w-full object-cover"
        />
      </a>
    </div>

    <!-- Column for product details and options -->
    <div class="col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-3">
      <!-- Product Name and Description -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900">
          {{ product.name }}
        </h2>
        <p class="mt-3 text-sm text-gray-500">
          {{ product.description }}
        </p>
        <p class="mt-3 text-lg font-semibold text-gray-900">
          {{ product.price }}
        </p>
      </div>

      <!-- Size Selection -->
<!--      <div class="mt-6">-->
<!--        <h3 class="text-sm font-medium text-gray-900">Size:</h3>-->
<!--        <div class="mt-2 flex flex-wrap gap-2">-->
<!--          <template v-for="size in product.sizes">-->
<!--            <button-->
<!--                v-if="size.available"-->
<!--                :key="size.name"-->
<!--                class="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"-->
<!--            >-->
<!--              {{ size.name }}-->
<!--            </button>-->
<!--            <button-->
<!--                v-else-->
<!--                :key="size.name"-->
<!--                class="px-3 py-1 border border-gray-300 text-sm rounded-md opacity-50 cursor-not-allowed"-->
<!--                disabled-->
<!--            >-->
<!--              {{ size.name }}-->
<!--            </button>-->
<!--          </template>-->
<!--        </div>-->
<!--      </div>-->

      <!-- Add to Cart Button -->
      <div class="mt-6">
        <button
            @click="handleAddToCart(product)"
            class="px-8 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          ADD TO CART
        </button>
      </div>
    </div>

  </div>
</template>
<script setup>
import {useProduct} from "@/composables/useProduct";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useCart} from "@/composables/useCart";

const {handleFetchProductById} = useProduct()
const route = useRoute();

const product = ref(
    {
      _id: 1,
      name: 'Basic Tee',
      imageURL: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      price: '2400 Tenge',
    }
);
onMounted(() => {
  const productId = route.params.id;
  console.log(productId)
  productDetails(productId)
})

const productDetails = async (productId) => {
  const result = await handleFetchProductById(productId)
  product.value = result.data
}
const { addToCart } = useCart();
import { inject } from 'vue';

const toast = inject('toast');

// Example usage
// Add a product to the cart
function handleAddToCart(product) {
  addToCart(product);
  toast.showToast('This is a toast message!');
}
</script>

<style scoped>

</style>