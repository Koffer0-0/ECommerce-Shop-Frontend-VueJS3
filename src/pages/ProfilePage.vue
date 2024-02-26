<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
    <!-- Profile Header -->
    <div class="text-center mb-16">
      <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        Welcome Back, {{ computedUser.email }}!
      </h1>
      <p class="text-md text-gray-600">
        Manage your profile and orders conveniently.
      </p>
    </div>

    <!-- Profile and Orders -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- User Info Card -->
      <div class="bg-white rounded-lg shadow-xl p-6 ring-1 ring-gray-900/5 hover:ring-green-500 transition-all duration-300">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Your Info</h2>
        <p class="text-md font-medium text-gray-600">
          Email: <span class="text-gray-800">{{ computedUser.email }}</span>
        </p>
        <button
            @click="logout"
            class="mt-6 w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
        >
          Log out
        </button>
      </div>

      <!-- Orders Section -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-xl p-6 ring-1 ring-gray-900/5 hover:ring-green-500 transition-all duration-300">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <BaseTable v-if="$route.name === 'Profile'" :orders="orders">
            <template #view="{ item }">
              <button
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  @click="viewOrder(item)"
              >
                View Details
              </button>
            </template>
          </BaseTable>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import BaseTable from "@/components/BaseTable.vue";
import router from "@/router";
import {useAuth} from "@/composables/useAuth";
import {useOrder} from "@/composables/useOrder";

const user = ref(
    {
      email: "",
    }
);

// const orders = ref([
//   {
//     _id: 1,
//     date: "24.11.24",
//     items: [{
//       name: "Keychron1",
//       price: 45000,
//     }]
//   },
//   {
//     _id: 2,
//     date: "12.12.23",
//     items: [{
//       name: "Logitech",
//       price: 25000,
//     }]
//   },
//   {
//     _id: 3,
//     date: "25.12.23",
//     items: [
//       {
//         name: "Warmillo",
//         price: 50000,
//       }
//     ],
//   },
// ])

const computedUser = computed(() =>{
  return user.value
})
onMounted(() => {
  handleGetUserInfo()
});

const {logout, accountDetails} = useAuth()
const {handleFetchOrders} = useOrder()

const handleGetUserInfo = async () => {
  const result = await accountDetails()
  user.value = result.data
  const orders_response = await handleFetchOrders()
  if (orders_response.data.length > 0) {
    orders.value = orders_response.data
  }
}
const viewOrder = (item) => {
  router.push({
    name: "Order",
    params: {
      id: item
    },
  });
}
</script>

<style scoped>

</style>