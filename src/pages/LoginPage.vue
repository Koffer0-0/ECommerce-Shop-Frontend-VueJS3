<template>
  <div class="mx-auto max-w-screen-xl grid h-screen place-content-center px-4 py-16 sm:px-6 lg:px-8 w-1/2">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>
      <a class="block" href="/">
        <span class="">-- Home --</span>
      </a>
    </div>
    <form @submit.prevent="login"
          class="mx-auto mb-0 mt-8 max-w-md space-y-4 ">
      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              v-model="email"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-400"
                @click="showPassword = !showPassword"
          >
                <EyeClosedIcon v-if="!showPassword"/>
                <EyeOpenIcon v-if="showPassword"/>
          </span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <a class="underline" href="/register">Sign up</a>
        </p>

        <button
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>

      </div>
      <div>
        {{message}}
      </div>
    </form>
  </div>
</template>

<script setup>
import {useAuth} from "@/composables/useAuth";
import router from "@/router";
import {ref} from "vue";
import EyeOpenIcon from "@/components/icons/EyeOpenIcon.vue";
import EyeClosedIcon from "@/components/icons/EyeClosedIcon.vue";

const {handleLogin} = useAuth();
const email = ref()
const message = ref()
const password = ref()
const showPassword = ref(false)

const login = async () => {

  const payload = {
    email: email.value,
    password: password.value
  };

  const response = await handleLogin(payload)
  if (response.message) {
    message.value = response.message
  } else {
    const accessToken = response.data.token;
    if (localStorage.getItem('access_token') == null) {
      localStorage.setItem('access_token', accessToken);
    }
    router.push({path: '/'});
  }
}
</script>

<style scoped>

</style>