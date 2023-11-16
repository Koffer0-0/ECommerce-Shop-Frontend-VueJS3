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
        <th class="whitespace-nowrap px-3 py-2 font-medium text-gray-900" >
          Items
        </th>
        <th class="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
          Amount
        </th>
        <th class="px-4 py-2"></th>
      </tr>
      </thead>

      <tbody class="divide-y divide-gray-200 text-center" v-for="order in orders">
        <tr>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700 text-left">{{ order._id }}</td>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700">{{ formatDate(order.date) }}</td>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700">
            <div class="flex text-center space-x-2" v-for="item in order.items" :key="item._id">
            <div class="text-xs">
              <div>{{ item.name }}</div>
              <div class="text-gray-500">{{ item.price }} Tenge</div>
            </div>
          </div>
          </td>
          <td class="whitespace-nowrap px-3 py-2 text-gray-700">{{ order.total }}</td>
          <td class="whitespace-nowrap px-3 py-2">
            <slot name="view" :item="order._id"></slot>
          </td>
        </tr>
        </tbody>
    </table>
  </div>
</template>
<script setup>
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // Splits at 'T' and returns the date part
}
defineProps({
  orders: {
    type: Array,
    required: true,
    default: []
  }
})
</script>
<style scoped>

</style>