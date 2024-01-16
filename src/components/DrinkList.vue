<script setup lang="ts">
import Drink from './Drink.vue';
import { global } from '../store/store';
</script>

<template>
    <div class="drink-list--wrapper">
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
}
</style>
