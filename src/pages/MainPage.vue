<template>
    <section class="bg-gray-50">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Elevate Your Style.
            <strong class="font-extrabold text-teal-500 sm:block">
              Discover Fashion Trends.
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl text-gray-600">
            Explore our exclusive collection where elegance meets everyday comfort. Delve into a wide range of styles from our latest arrivals that perfectly blend modern designs with timeless classics.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
                class="block w-full rounded text-teal-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
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
  <recommendation-card></recommendation-card>
</template>

<script setup>
import RecommendationCard from "@/components/RecommendationCard.vue";
import {useProduct} from "@/composables/useProduct";
import {onMounted} from "vue";

onMounted(() => {

})
const {
  recommendations,
  handleRecommendationProducts,
} = useProduct()
</script>

<style scoped>

</style>