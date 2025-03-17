<template>
    <div class="border shadow-2xl shadow-gray-400 rounded-2xl hover:bg-gray-50 hover:scale-105 transition-transform duration-300">
      <!-- Kart boyutlarını doğru ayarlayın ve object-cover kullanın -->
      <div class="w-76 h-76 rounded-2xl overflow-hidden relative group">
        <!-- Fotoğraf, dinamik olarak verilen image ile görüntülenir -->
        <img 
          :src="image" 
          alt="Fotoğraf" 
          class="w-full h-full object-cover rounded-2xl transition duration-300 group-hover:filter group-hover:blur-sm" 
        />
        
        <!-- Yazı, dinamik olarak verilen title ile görüntülenir -->
        <h2 class="absolute bottom-0 left-0 m-4 text-white font-bold text-xl z-10 transition duration-300 group-hover:text-2xl 
                   bg-gray-500 bg-opacity-50 p-2 rounded-tl-xl">
          {{ title }}
        </h2>
      </div>
    </div>
  </template>
  
  <script setup>
    // Props ile başlık ve resim bilgileri alınır
    defineProps({
      title: String,
      image: String
    });
  </script>
  
  <style scoped>
    /* Fotoğrafın üzerine gelindiğinde bulanıklık uygulanır */
    .group:hover img {
      filter: blur(4px);
    }
    
    /* Yazının üzerine gelindiğinde büyümesi */
    .group:hover h2 {
      font-size: 1.5rem;
      transition: 0.5s;
    }
  </style>
  