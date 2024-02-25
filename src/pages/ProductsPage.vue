<template>
  <product-list2></product-list2>
</template>

<script setup>
import ProductList2 from "@/components/ProductList2.vue";
import {useItem} from "@/composables/useItem";
import {onMounted} from "vue";

onMounted(() => {

})
const {
  products,
  product,
  recommendations,
  handleFetchProducts,
  handleFetchProductById,
} = useItem()
</script>

<style scoped>

</style>