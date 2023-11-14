<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-3 py-2 font-medium text-gray-900 text-left">
          Transaction ID
        </th><th class="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
          Date
        </th>
        <th class="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
          Amount
        </th>
        <th class="px-4 py-2"></th>
      </tr>
      </thead>

      <tbody class="divide-y divide-gray-200 text-center" v-for="order in orders">
        <tr>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700 text-left">{{ order.id }}</td>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700">{{ order.date }}</td>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700">{{ order.amount }}</td>
          <td class="whitespace-nowrap px-3 py-2">
            <slot name="view" :item="order.id"></slot>
          </td>
        </tr>
        </tbody>
    </table>
  </div>
</template>
<script setup>
  import {ref} from "vue";

  const orders = ref([
    { id: 1, date: "12/12/2023", amount: "400"},
    { id: 2, date: "12/12/2021", amount: "800"},
    { id: 3, date: "12/12/2022", amount: "700"},
    { id: 4, date: "12/12/2024", amount: "600"},
    { id: 5, date: "12/12/2025", amount: "500"},
  ])
</script>
<style scoped>

</style>