<template>
    <div class="grid grid-cols-2 gap-24 mt-6">
        <router-link v-for="i in 8" :key="i" to="/products">
            <Card />
        </router-link>
    </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
