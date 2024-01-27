<script setup lang="ts">
import DrinkList from './components/DrinkList.vue';
import FilterPanel from './components/FilterPanel.vue';
import pjson from '../package.json';
</script>

<template>
    <header>🍸 Cocktail Sort (v{{ pjson.version }})</header>
    <FilterPanel />
    <DrinkList />
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
