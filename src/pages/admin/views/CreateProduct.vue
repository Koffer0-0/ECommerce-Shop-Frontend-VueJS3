<template>
  <div class="max-w-md mx-auto my-10 bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-8">
      <!-- Check if productId exists -->
      <span v-if="productID">Edit Product</span>
      <span v-else>Create Product</span>
    </h2>
    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label for="name" class="text-sm font-medium text-gray-700">Name:</label>
        <input id="name" v-model="product.name" required
               class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
      </div>
      <div>
        <label for="description" class="text-sm font-medium text-gray-700">Description:</label>
        <textarea id="description" v-model="product.description" required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
      </div>
      <div>
        <label for="imageURL" class="text-sm font-medium text-gray-700">Image URL:</label>
        <input id="imageURL" v-model="product.imageURL" type="url" required
               class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
      </div>
      <div>
        <label for="price" class="text-sm font-medium text-gray-700">Price:</label>
        <input id="price" v-model.number="product.price" type="number" required
               class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
      </div>
      <button type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Create Product
      </button>
    </form>
  </div>
</template>

<script setup>
import {useItem} from "@/composables/useItem";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const {handleCreateProduct, handleFetchProductById, handleUpdateProduct} = useItem()
const router = useRouter(); // Make sure to import `useRouter` from Vue Router
const route = useRoute();
const productID = ref(null)
const product = ref ({
  name: '',
  description: '',
  imageURL: '',
  price: null,
})

const submitForm = async () => {
  if (product.value._id) {
    await handleUpdateProduct(product.value); // Pass the whole product object
  } else {
    await handleCreateProduct(product.value);
  }
  router.push({ name: 'ProductList' }); // Navigate back to the product list or wherever appropriate
  alert('Product processed successfully!');
};


onMounted(async () => {
  const productId = route.params.id;
  productID.value = productId
  if (productId) {
    const productResponse = await handleFetchProductById(productId);
    product.value = { ...productResponse.data };
    // Adjust the title or other parts of the component based on editing
  }
});
</script>
