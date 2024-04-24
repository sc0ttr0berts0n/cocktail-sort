<script setup lang="ts">
import pjson from '../package.json';
import CocktailList from './components/CocktailList.vue';
import TagSection from './components/TagSection.vue';
import TagList from './components/TagList.vue';
import AppSection from './components/AppSection.vue';
import FilterInput from './components/FilterInput.vue';
import { global } from './store/store';
</script>

<template>
    <header>🍸 Cocktail Sort (v{{ pjson.version }})</header>
    <AppSection header="Filters">
        <FilterInput
            label="Include"
            v-model="global.include"
            iconName="ri-close-circle-fill"
        />
        <FilterInput
            label="Exclude"
            v-model="global.exclude"
            iconName="ri-close-circle-fill"
        />
    </AppSection>
    <AppSection header="Menus" collapsed>
        <TagList :tags="global.menus" v-if="global.menus" />
    </AppSection>
    <AppSection header="Tags">
        <TagSection />
    </AppSection>
    <AppSection header="Cocktails">
        <CocktailList />
    </AppSection>
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
