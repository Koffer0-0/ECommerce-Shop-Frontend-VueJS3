<template>
  <nav aria-label="Breadcrumb" class="m-4">
    <ol class="flex items-center gap-3 text-sm text-gray-600">
      <li v-for="(item, index) in breadcrumbList" :key="index">
        <div class="flex items-center">
          <a v-if="item.link" :href="item.link" @click.prevent="routeTo(item.link)" class="block transition hover:text-gray-700">
            {{ item.name }}
          </a>
          <span v-else>{{ item.name }}</span>

          <svg v-if="index < breadcrumbList.length - 1" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </li>
    </ol>
  </nav>
  <div class="border-b-2 border-gray-400"></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const breadcrumbList = ref([]);
const route = useRoute();
const router = useRouter();

const routeTo = (path) => {
  router.push(path);
};

const updateList = () => {
};

// Watch for route changes
watch(() => route.path, updateList);

// Initial setup
onMounted(updateList);
</script>
