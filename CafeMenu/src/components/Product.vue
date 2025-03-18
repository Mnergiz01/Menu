<template>
    <div class="flex flex-col items-center justify-center w-full mt-5">
      <!-- Kategori bilgisi ve ürünler -->
      <div v-if="subcategory" class="flex flex-col w-full mt-5">
        <!-- Alt kategori ismi ve açıklaması -->
        <h1 class="text-2xl font-bold text-center">{{ subcategory.name }}</h1>
  
        <!-- Ürünler listesi -->
        <div class="mt-5 w-full flex justify-center items-center flex-col gap-4">
          <div
            v-for="product in subcategory.products"
            :key="product.id"
            class="flex items-center w-full mt-50"
          >
            <!-- Ürün resmi (solda) -->
            <img
              :src="product.image"
              :alt="product.name"
              class="w-40 h-40 object-cover rounded-md"
            />
  
            <!-- Ürün adı ve fiyatı (sağda) -->
            <div class="flex flex-col flex-grow ml-4">
              <h2 class="text-lg font-semibold">{{ product.name }}</h2>
              <p class="text-md text-gray-700">Fiyat: {{ formatCurrency(product.price) }}</p>
              <p class="text-sm text-gray-600">
                {{ product.description || 'Açıklama bulunmamaktadır.' }}
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Eğer alt kategori bulunmazsa, bu mesaj gösterilecek -->
      <p v-else>Alt kategori bilgileri yükleniyor...</p>
    </div>
  </template>
  
  
  
  <script setup>
  import { ref, onMounted, watch, computed } from "vue";
  import { useRoute } from "vue-router";
  
  const subcategory = ref(null);
  const route = useRoute();
  
  // Route parametresini izleyerek alt kategoriyi yükle
  watch(() => route.params.id, async (newId) => {
    if (!newId) return;
  
    try {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
  
      console.log("API'den gelen veri:", data);
  
      // Gelen verinin doğruluğunu kontrol et
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Beklenen veri formatı yanlış. 'categories' dizisi bulunamadı.");
      }
  
      // Alt kategoriyi ID'ye göre bul
      const category = data.find(cat => cat.subcategories.some(sub => sub.id === parseInt(newId)));
      if (category) {
        subcategory.value = category.subcategories.find(sub => sub.id === parseInt(newId));
      }
  
      console.log("Seçilen alt kategori:", subcategory.value);
    } catch (error) {
      console.error("Alt kategori yüklenirken hata oluştu:", error);
      subcategory.value = null; // Hata durumunda alt kategori null olsun
    }
  }, { immediate: true }); // Sayfa ilk açıldığında tetiklenmesini sağlıyoruz
  
  // Currency format fonksiyonu
  const formatCurrency = (value) => {
    if (!value) return "";
    return `${value.toFixed(2)}₺`; // Örnek olarak Türk Lirası formatı
  };
  </script>
  