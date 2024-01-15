<script setup lang="ts">
import Drink from './Drink.vue';
import drinkData from '../../public/data/drinklist.json';
</script>

<template>
    <div class="drink-list">
        <Drink v-for="drink in drinkData" :key="drink" :metadata="drink" />
    </div>
</template>

<style scoped>
.drink-list > *:nth-child(2n) {
    background-color: #ffffff11;
}
</style>
