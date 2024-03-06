<script setup lang="ts">
import CocktailList from './components/CocktailList.vue';
import FilterPanel from './components/FilterPanel.vue';
import pjson from '../package.json';
</script>

<template>
    <header>🍸 Cocktail Sort (v{{ pjson.version }})</header>
    <FilterPanel />
    <CocktailList />
</template>

<style scoped>
header {
    width: 100%;
    text-align: center;
    background: #5050ff;
    color: #ffffff;
    font-family: monospace;
    padding: 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
}
</style>
./components/CocktailList.vue
