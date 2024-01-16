<script setup lang="ts">
import DrinkList from './components/DrinkList.vue';
import FilterPanel from './components/FilterPanel.vue';
</script>

<template>
    <header>🍸 Cocktail Sort</header>
    <DrinkList />
    <FilterPanel />
</template>

<style scoped>
header {
    text-align: center;
    background: #ff5050;
}
</style>
