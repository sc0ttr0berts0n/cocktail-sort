<script setup lang="ts">
import { global } from '../store/store';
import FilterInput from './FilterInput.vue';
import { ref } from 'vue';

const darkMode = global.settings;

const isVisible = ref(true);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};
</script>

<template>
    <div class="filter-panel--container">
        <div class="filter-panel--wrapper" v-if="isVisible">
            <div class="filter-panel--ui-wrapper">
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
        <div class="filter-panel--tab" @click="toggleVisibility">
            <v-icon name="fa-sliders-h" fill="#ffffff" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-panel {
    &--container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: sticky;
        top: -1px;
        width: 100%;
        // bottom: env(safe-area-inset-bottom);
    }
    &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #5050ff;
        width: 100%;
    }
    &--ui-wrapper {
        display: flex;
        place-items: center;
        flex-direction: column;
        max-width: 400px;
        gap: 0.5rem;
        padding: 1rem;
        width: 100%;
    }
    &--tab {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5050ff;
        width: 80px;
        height: 40px;
        border-radius: 0 0 1.25rem 1.25rem;
    }
}
</style>
