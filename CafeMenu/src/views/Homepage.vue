<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-6">
        <router-link v-for="i in 6" :key="i" to="/category">
            <Card></Card>
        </router-link>
    </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
