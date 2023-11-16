<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-2">
    <div class="h-32 rounded-lg">
      <article
          class="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6"
      >
        <span class="rounded-full bg-blue-100 p-3 text-blue-600">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>

        <div>
          <p class="text-2xl font-medium text-gray-900">240.94 Tenge</p>

          <p class="text-sm text-gray-500">Total Spent</p>
        </div>
      </article>
    </div>
    <div class="h-32 rounded-lg lg:col-span-2">
      <BaseTable v-if="$route.name === 'Profile'" :orders="orders">
        <template #view="{item}">
          <button
              class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              @click="viewOrder(item)"
          >
            View
          </button>
        </template>
      </BaseTable>
      <router-view></router-view>
    </div>
    <div class="h-32 rounded-lg">
      <div class="flex items-center gap-4">

        <img
            alt="Profile Image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAM1BMVEXk5ueutLfIzc/n6eqrsbS3vL+zubza3d7g4uO6v8K9wsTX2tvR1Nbq7OyorrLN0NLDx8ou11yyAAACuElEQVRoge2a247jIAxAAXMnF/7/aydJp021TYnd2pFmxXmblznCGEzsKtXpdDqdTqfT6XT+PACg4oIa4WKxCnP2esPVIcJlfojGa6vvWKvToC6xg6p2F/8y+eEC+TjrF/Nmd1Hc7g7Nm92MkmKIr+HesVlSHRrmVZ7k3KFpFpXHM/UirzIJB+/T7Ek+S8ihItRLtgcB90mePfD8J230OLVE1MuEdGvNrQaHVrMvPOCXrT2vGipezZ7q2Ezbgs57wVBCzhx0MMjD/Qtn0CGR1LYwuhX+hG1uw7jhkZJqC5nTTVPrxOjG1pE7vrsvd7v/JNeIZ4z1QidU783NWcEh09ycdyoMtGSLjG4VSW7ONFe0YsL8YCMVcMsaclrQOavYCiHTJ9aXw0pEv9iYM02tC0dGXeRjEKe2WaDrgr1f+M0K+QFui1CnK53KZdoOG2eldOJ8HL/Imyuf5FatTk6aFe6pwpt26mL2QbqhCuEw46w2V7Sxofh/u6rWVvku8o0xVD3d/dZOfr6mdX8DxjjUnBaqKUq0d31of3DdsAQghjLMJufknEspVzOXEJXwvGb572HOzi97bJ9nNetfLpkSpbYdIJjkp/d3i520q0Wx+2FJ7ZZ399tcWKM/xlkjxA9/DVyZDyW3JjRHdusGjsWvdyjx63vT+69HhRCpa97t7rsnDJh3VQtlz58vHcI35lX+cUUHQ2rgHtvTJ/UNGpNPilzTd/3reO926iMOCpNZkzu7nGriyxkIAylm+dmomQ5+z6ldRIwcedBR814yqB4MdS6DBNWNYN/sG5gtB+JoBM10riZ2Lwmct76kln3e8hNc9nlXnTYAJNJeuFCS32inutDZvtM848TZBJlW0AVu8measwzWsn3gbtVSwRO20bheoE5WlNZvfgYjTGO/166CKC13p9Pp/Hl+AA3gIVNYzV3JAAAAAElFTkSuQmCC"
            class="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 class="text-lg font-medium">{{ computedUser.first_name }} {{ computedUser.last_name }}</h3>
          <h3 class="text-sm font-medium">{{ computedUser.email }}</h3>
        </div>
      </div>
      <button @click="logout">Log out</button>
    </div>
  </div>

</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import BaseTable from "@/components/BaseTable.vue";
import router from "@/router";
import {useAuth} from "@/composables/useAuth";

const user = ref(
    {
      first_name: "",
      last_name: "",
      email: "",
    }
)
const orders = ref([
  { id: 1, date: "12/12/2023", amount: "400"},
  { id: 2, date: "12/12/2021", amount: "800"},
  { id: 3, date: "12/12/2022", amount: "700"},
  { id: 4, date: "12/12/2024", amount: "600"},
  { id: 5, date: "12/12/2025", amount: "500"},
])
const computedUser = computed(() =>{
  return user.value
})
onMounted(() => {
  handleGetUserInfo()
});

const {logout, accountDetails} = useAuth()

const handleGetUserInfo = async () => {
  const result = await accountDetails()
  user.value= result.data
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