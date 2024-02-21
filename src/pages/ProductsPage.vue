<template>
  <product-list2></product-list2>
</template>

<script setup>
import ProductList2 from "@/components/ProductList2.vue";
import {useProduct} from "@/composables/useProduct";
import {onMounted} from "vue";

onMounted(() => {

})
const {
  products,
  product,
  recommendations,
  handleFetchProducts,
  handleFetchProductById,
} = useProduct()
</script>

<style scoped>

</style>