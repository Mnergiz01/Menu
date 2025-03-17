<template>
    <div>
      <h1>{{ category.name }} Kategorisi</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <router-link
          v-for="subcategory in category.subcategories"
          :key="subcategory.id"
          :to="`/subcategory/${subcategory.id}`"
        >
          <Card :title="subcategory.name" :image="subcategory.image" />
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Card from '../components/Card.vue';
  
  const category = ref({});
  const route = useRoute();
  
  // Üst kategori ID'sini almak
  const categoryId = route.params.id;
  
  onMounted(async () => {
    // Üst kategori verisini almak için API'ye istek gönderiliyor
    const res = await fetch(`http://localhost:3000/categories/${categoryId}`);
    const data = await res.json();
    category.value = data; // Üst kategori verisini al
  });
  </script>
  