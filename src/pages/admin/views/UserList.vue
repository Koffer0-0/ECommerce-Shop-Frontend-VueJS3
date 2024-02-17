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
                First Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Last Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user._id" class="border-b border-gray-200 hover:bg-gray-100">
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ user.first_name }}</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-pre-line">{{ user.last_name }}</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ user.email }}</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ user.role }}</p>
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
import {useAuth} from "@/composables/useAuth";

const { handleGetAllUsers } = useAuth();
const users = ref([]);

onMounted(async () => {
  const response = await handleGetAllUsers();
  users.value = response.data
});
</script>

<style>
</style>
