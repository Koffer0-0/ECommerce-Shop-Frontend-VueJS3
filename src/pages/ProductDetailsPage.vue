<template>
  <a href="#" class="group block">
    <img
        :src="product.imageURL"
        :alt="product.name"
        class="h-[350px] w-full object-cover sm:h-[450px]"
    />

    <div class="mt-3 flex justify-between text-sm">
      <div>
        <h3
            class="text-gray-900 group-hover:underline group-hover:underline-offset-4"
        >
          {{product.name}}
        </h3>

        <p class="mt-1.5 max-w-[45ch] text-xs text-gray-500">
          {{ product.description }}
        </p>
      </div>

      <p class="text-gray-900">{{product.price}}</p>
    </div>
  </a>
</template>

<script setup>
import {useProduct} from "@/composables/useProduct";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const {handleFetchProductById} = useProduct()
const route = useRoute();

const product = ref()

onMounted(() => {
  const productId = route.params.id;
  productDetails(productId)
})

const productDetails = async () => {
  const result = await handleFetchProductById(productId)
  product.value = result.data
}
</script>

<style scoped>

</style>