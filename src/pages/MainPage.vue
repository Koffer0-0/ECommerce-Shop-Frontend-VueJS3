<template>
  <recomendation-card></recomendation-card>
  <product-list></product-list>
</template>

<script setup>
import ProductList from "@/components/ProductList.vue";
import RecomendationCard from "@/components/RecomendationCard.vue";
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
  handleRecommendationProducts,
} = useProduct()
</script>

<style scoped>

</style>