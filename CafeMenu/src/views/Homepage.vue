<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <router-link 
            v-for="category in categories" 
            :key="category.id" 
            :to="`/category/${category.id}`">
            <Card :title="category.name" :image="category.image" />
        </router-link>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Card from '../components/Card.vue';

const categories = ref([]);

onMounted(async () => {
    const res = await fetch('http://localhost:3000/categories');
    categories.value = await res.json();
});
</script>
