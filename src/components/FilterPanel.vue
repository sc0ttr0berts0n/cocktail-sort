<script setup lang="ts">
import { global } from '../store/store';

const filter = () => {
    return global.drinks.forEach((drink) => {
        const megaString = `${drink.Name}${drink.Menu}${drink.Recipe}${
            drink?.Tags ?? ''
        }`.toLocaleLowerCase();
        const includeTest =
            global.include === '' ||
            megaString.includes(global.include.toLocaleLowerCase());
        const excludeTest =
            global.exclude !== '' &&
            megaString.includes(global.exclude.toLocaleLowerCase());

        drink.hidden = !includeTest || excludeTest;
    });
};
</script>

<template>
    <div class="filter-panel--container">
        <div class="filter-panel--wrapper">
            <label
                class="filter-panel--label-wrapper filter-panel--label-wrapper__include"
            >
                <div class="filter-panel--label filter-panel--label__include">
                    Include
                </div>
                <input
                    @keyup="filter"
                    v-model="global.include"
                    class="filter-panel--input filter-panel--input__include"
                    type="text"
                />
            </label>
            <label
                class="filter-panel--label-wrapper filter-panel--label-wrapper__exclude"
            >
                <div class="filter-panel--label filter-panel--label__exclude">
                    Exclude
                </div>
                <input
                    @keyup="filter"
                    v-model="global.exclude"
                    class="filter-panel--input filter-panel--input__exclude"
                    type="text"
                />
            </label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-panel {
    &--container {
        display: flex;
        place-items: center;
        flex-direction: column;
        padding: 1rem;
        position: sticky;
        background: #5050ff;
        bottom: 0;
    }
    &--wrapper {
        max-width: 320px;
        width: 100%;
    }
    &--label-wrapper {
        width: 100%;
    }
    &--input {
        width: 100%;
        height: 2rem;
    }
}
</style>
