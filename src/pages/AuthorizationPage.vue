<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
          class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>

      <main
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <a class="block" href="/">
            <span class="">Home</span>
          </a>
          <form @submit.prevent="register" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                  for="FirstName"
                  class="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  v-model="first_name"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                  for="LastName"
                  class="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  v-model="last_name"
              />
            </div>

            <div class="col-span-6">
              <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  v-model="email"
              />
            </div>

            <div class="col-span-6">
              <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  v-model="password"
              />
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                  class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

<!--              <p class="mt-4 text-sm text-gray-500 sm:mt-0">-->
<!--                Already have an account?-->
<!--                <a href="/login" class="text-gray-700 underline">Log in</a>.-->
<!--              </p>-->
              {{message}}
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup>
import {useAuth} from "@/composables/useAuth";
import {ref} from "vue";
import router from "@/router";

const {handleRegister} = useAuth();
const email = ref()
const password = ref()
const first_name = ref()
const last_name = ref()
const message = ref()


const register = async () => {
  const payload = {
    email: email.value,
    first_name: first_name.value,
    last_name: last_name.value,
    password: password.value
  }

  const response = await handleRegister(payload)
  if (response.message) {
    message.value = response.message
  }
  if (response.message === "User created"){
    router.push({path: '/'});
  }
}
</script>

<style scoped>

</style>