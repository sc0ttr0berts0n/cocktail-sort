<script setup lang="ts">
import { global } from '../store/store';
import FilterInput from './FilterInput.vue';
import { ref } from 'vue';
import { useFilterDrinks } from '../compostables/filterDrinks';
import { addOrRemoveTagFromInclude } from '../compostables/toggleTagFromInclude';

const darkMode = global.settings;

const isVisible = ref(true);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};

const setInclude = (word: string) => {
    global.include = word;
    useFilterDrinks();
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
        <div class="filter-panel--quick-links-container">
            <div class="filter-panel--quick-links-wrapper">
                <div
                    class="filter-panel--quick-link"
                    @click="addOrRemoveTagFromInclude('sassafras')"
                >
                    Sassafras
                </div>
                <div
                    class="filter-panel--quick-link"
                    @click="addOrRemoveTagFromInclude('48 record bar')"
                >
                    48 Record Bar
                </div>
                <!-- <div class="filter-panel--quick-link">Favorites</div> -->
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
    &--quick-links-container {
        font-family: monospace;
        width: 100%;
        background-color: #5050ff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &--quick-links-wrapper {
        display: flex;
        align-self: center;
        width: 100%;
        max-width: 400px;
        justify-content: space-evenly;
        padding: 0 1rem 0.5rem;
    }
    &--quick-link {
        background-color: #ffffff;
        border-radius: 9999rem;
        color: #282828;
        padding: 0.25rem 0.5rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        user-select: none;
    }
}
</style>
