<template>
  <div class="container mx-auto px-4 sm:px-8">
    <h1 class="text-2xl font-semibold my-4">Product List</h1>
    <div class="py-4">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Image
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product._id" class="border-b border-gray-200 hover:bg-gray-100">
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ product.name }}</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-pre-line">{{ product.description }}</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ product.price }}</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <img :src="product.imageURL" class="w-20 h-20 rounded" alt="Product">
              </td>
              <td class="px-5 py-5 bg-white text-sm text-right">
                <button class="text-blue-500 hover:text-blue-700" @click="editProduct(product._id)">
                  <i class="fas fa-edit"></i> Edit
                </button>
                <button class="text-red-500 ml-3 hover:text-red-700" @click="deleteProduct(product._id)">
                  <i class="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useItem } from "@/composables/useItem";
import {useRouter} from "vue-router";
const router = useRouter(); // Make sure to import `useRouter` from Vue Router

const { handleFetchProducts, handleDeleteProduct } = useItem();
const products = ref([]);

onMounted(async () => {
  const response = await handleFetchProducts();
  products.value = response.data
});

// Import statement and setup code...
const editProduct = (id) => {
  console.log(`Edit product with ID: ${id}`);
  router.push({ name: 'EditProduct', params: { id } });
};
const deleteProduct = async (id) => {
  if (!confirm('Are you sure you want to delete this product?')) return;
  console.log(`Delete product with ID: ${id}`);
  await handleDeleteProduct(id)
  products.value = products.value.filter(product => product._id !== id);
};
</script>

<style>
</style>
