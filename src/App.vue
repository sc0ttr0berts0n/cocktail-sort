<script setup lang="ts">
import DrinkList from './components/DrinkList.vue';
import FilterPanel from './components/FilterPanel.vue';
</script>

<template>
    <header>🍸 Cocktail Sort</header>
    <FilterPanel />
    <DrinkList />
</template>

<style scoped>
header {
    text-align: center;
    background: #5050ff;
    color: #ffffff;
    font-family: monospace;
    padding: 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
}
</style>
