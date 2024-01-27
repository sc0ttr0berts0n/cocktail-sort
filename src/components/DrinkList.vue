<script setup lang="ts">
import Drink from './Drink.vue';
import { global } from '../store/store';
import { computed } from 'vue';

const visibleDrinkCount = computed(() => {
    return global.drinks.filter((drink) => !drink.hidden).length;
});
const fitlersOn = computed(() => {
    return global.include || global.exclude;
});

const clearFilters = () => {
    global.include = '';
    global.exclude = '';
    global.drinks.forEach((drink) => (drink.hidden = false));
};
</script>

<template>
    <div class="drink-list--wrapper">
        <div class="drink-list--counter-wrapper">
            <div class="drink-list--counter">
                {{ visibleDrinkCount }} Drinks Found
            </div>

            <a
                href="#"
                class="drink-list--filter-indicator"
                v-if="fitlersOn"
                @click="clearFilters"
            >
                Filters Applied
                <span class="drink-list--clear-button">(Clear)</span>
            </a>
        </div>
        <Drink
            v-for="(drink, index) in global.drinks"
            :key="index"
            :metadata="drink"
        />
    </div>
</template>

<style lang="scss" scoped>
.drink-list {
    &--wrapper {
        padding: 0.5rem;
        margin-bottom: 4rem;
        & > *:nth-child(even) {
            background-color: #ffffff11;
        }
    }
    &--counter-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 0.5rem;
    }
    &--filter-indicator {
        color: #888888;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    &--clear-button {
        font-style: oblique;
    }
}
</style>
