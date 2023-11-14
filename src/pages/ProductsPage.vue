<template>
  <product-list></product-list>
</template>

<script setup>
import ProductList from "@/components/ProductList.vue";
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