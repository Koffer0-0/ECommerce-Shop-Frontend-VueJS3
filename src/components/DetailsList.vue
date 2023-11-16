<template>
  <a class="block text-teal-600 my-2" @click="router.go(-1)"><span>&lt--</span>Back</a>
  <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
    <dl class="-my-3 divide-y divide-gray-100 text-sm">
      <div
          class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
      >
        <dt class="font-medium text-gray-900">Order ID</dt>
        <dd class="text-gray-700 sm:col-span-2">{{ order.id }}</dd>
      </div>
      <div
          class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
      >
        <dt class="font-medium text-gray-900">Date</dt>
        <dd class="text-gray-700 sm:col-span-2">{{ order.date }}</dd>
      </div>

      <div
          class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
      >
        <dt class="font-medium text-gray-900">Total</dt>
        <dd class="text-gray-700 sm:col-span-2">{{ order.amount }}</dd>
      </div>

      <div
          class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
      >
        <dt class="font-medium text-gray-900">Details</dt>
        <dd class="text-gray-700 sm:col-span-2">
          <p v-for="item in order.details">
            {{item.name}} x {{item.quantity}} = {{item.price}} Tenge
          </p>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import router from "@/router";
import {onMounted, ref} from "vue";
import {useOrder} from "@/composables/useOrder";
import {useRoute} from "vue-router";

const route = useRoute();

const order = ref({
  id: 1, amount:5000, date: "12.10.2023", details:
      [
        {name:"rubashka", quantity: 1, price:1233},
        {name:"futbolka", quantity: 2, price:1233}
      ]
})
const {handleFetchOrderById} = useOrder()
onMounted(() => {
  const orderId = route.params.id;
  getOrderInfo(orderId)
})

const getOrderInfo = async (id) => {
  order.value = await handleFetchOrderById(id)
}
</script>

<style scoped>

</style>