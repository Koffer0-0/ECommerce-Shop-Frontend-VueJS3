<template>
  <section
      class="relative bg-[url(/banner.jpeg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
    </div>

    <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center rtl:sm:text-right">
        <h1 class="text-xl font-extrabold sm:text-3xl text-white">
          <span class="bg-amber-600 bg-opacity-30 px-2 rounded-2xl">
            Compatible With All<span class="px-2 rounded-2xl text-amber-500 p-2 underline">Devices</span>
          </span>
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white ">
          <span class="bg-amber-600 bg-opacity-30 px-2 rounded-2xl">
             Keychron keyboards are 100% compatible with multiple operating systems.
              Perfectly suitable for macOS, Windows, iOS, as well as Android.
          </span>
        </p>

        <div class="mt-4 flex flex-wrap gap-4 text-center">
          <a
              href="/products"
              class="block w-full rounded bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-700 focus:outline-none focus:ring active:bg-amber-500 sm:w-auto"
          >
            Choose keyboard
          </a>

          <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-amber-500 shadow hover:text-amber-700 focus:outline-none focus:ring active:text-amber-500 sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  <recommendation-card></recommendation-card>
  <section class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Elevate Your Style.
          <strong class="font-extrabold text-amber-600 sm:block">
            Discover Technology Trends.
          </strong>
        </h1>

        <p class="mt-4 sm:text-xl text-gray-600">
          Explore our exclusive collection where elegance meets everyday comfort. Delve into a wide range of styles from our latest arrivals that perfectly blend modern designs with timeless classics.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
              class="block w-full rounded px-12 py-3 text-sm font-medium shadow hover:bg-amber-500 focus:outline-none hover:text-gray-800 focus:ring active:orange-background-color sm:w-auto"
              href="/products"
          >
            Shop Now
          </a>

          <!--            <a-->
          <!--                class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"-->
          <!--                href="/about"-->
          <!--            >-->
          <!--              Our Story-->
          <!--            </a>-->
        </div>
      </div>
    </div>
  </section>
  <ProductList2></ProductList2>
  <ChatBot></ChatBot>
</template>

<script setup>
import RecommendationCard from "@/components/RecommendationCard.vue";
import {useProduct} from "@/composables/useProduct";
import {onMounted} from "vue";
import ProductList2 from "@/components/ProductList2.vue";
import ChatBot from "@/components/ChatBot.vue";

onMounted(() => {

})
const {
  recommendations,
  handleRecommendationProducts,
} = useProduct()
</script>

<style scoped>

</style>