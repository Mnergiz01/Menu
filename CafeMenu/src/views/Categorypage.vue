<template>
    <div>
      <!-- Kategori ismi görüntüleniyor, eğer kategori varsa -->
      <h1 v-if="category">{{ category.name }} Kategorisi</h1>
      <p v-else>Kategori yükleniyor...</p>
  
      <!-- Kategorinin alt kategorileri varsa, bunları göster -->
      <div v-if="category && category.subcategories?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <router-link
          v-for="subcategory in category.subcategories"
          :key="subcategory.id"
          :to="`/subcategory/${subcategory.id}`"
        >
          <Card :title="subcategory.name" :image="subcategory.image" />
        </router-link>
      </div>
  
      <!-- Alt kategori yoksa bu mesaj gösterilecek -->
      <p v-else-if="category && !category.subcategories?.length">Bu kategoriye ait alt kategori bulunmamaktadır.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import Card from "../components/Card.vue";
  
  const category = ref(null);
  const route = useRoute();
  
  // Route parametresini izleyerek kategoriyi yükle
  watch(() => route.params.id, async (newId) => {
    if (!newId) return;
  
    try {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
  
      console.log("API'den gelen veri:", data);
  
      // Gelen veri doğrudan dizi olduğundan, categories yerine doğrudan veriyi kontrol et
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Beklenen veri formatı yanlış. 'categories' dizisi bulunamadı.");
      }
  
      // Kategoriyi ID'ye göre bul
      category.value = data.find(cat => String(cat.id) === String(newId)) || null;
  
      // Eğer kategori bulunduysa, alt kategorileri de yükle
      if (category.value) {
        // Alt kategorileri doğrudan `category.subcategories` ile ilişkilendiriyoruz
        category.value.subcategories = category.value.subcategories || [];
      }
  
      console.log("Seçilen kategori:", category.value);
    } catch (error) {
      console.error("Kategori yüklenirken hata oluştu:", error);
      category.value = null; // Hata durumunda kategori null olsun
    }
  }, { immediate: true }); // Sayfa ilk açıldığında tetiklenmesini sağlıyoruz
  </script>
  