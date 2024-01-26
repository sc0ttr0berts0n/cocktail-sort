<script setup lang="ts">
import { global } from '../store/store';
import FilterInput from './FilterInput.vue';
</script>

<template>
    <div class="filter-panel--container">
        <div class="filter-panel--wrapper">
            <FilterInput
                label="Include"
                v-model="global.include"
                iconName="io-search-circle-sharp"
            />
            <FilterInput
                label="Exclude"
                v-model="global.exclude"
                iconName="ri-close-circle-fill"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-panel {
    &--container {
        display: flex;
        place-items: center;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        position: fixed;
        background: #5050ff;
        bottom: 0;
    }
    &--wrapper {
        display: flex;
        place-items: center;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 400px;
        width: 100%;
    }
}
</style>
