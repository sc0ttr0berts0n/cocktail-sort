<script setup lang="ts">
import Drink from './Cocktail.vue';
import { global } from '../store/store';
import { computed } from 'vue';
import { useSanityClient } from '../compostables/sanityClient';
import { useCreateCocktailListState } from '../compostables/createCocktailListState';
const visibleDrinkCount = computed(() => {
    return global.drinks?.filter((drink) => !drink.hidden).length;
});
const fitlersOn = computed(() => {
    return global.include || global.exclude;
});

const clearFilters = () => {
    global.include = '';
    global.exclude = '';
    global.drinks?.forEach((drink) => (drink.hidden = false));
};

useSanityClient
    .fetch('*[_type=="cocktail"]{name,recipe,menu,tags[]->{name}}')
    .then((data) => {
        global.drinks = useCreateCocktailListState(data);
    })
    .catch((error) => {
        error;
    });
</script>

<template>
    <div class="drink-list--wrapper">
        <div class="drink-list--counter-wrapper" v-if="global.drinks">
            <div class="drink-list--counter" v-if="global.drinks">
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
        <div class="drink-list--prefetch" v-else>
            Fetching Drinks from Server...
        </div>
        <Drink
            v-if="global.drinks"
            v-for="(drink, index) in global.drinks"
            :key="index"
            :metadata="drink"
        />
    </div>
</template>

<style lang="scss" scoped>
@debug lol;
.drink-list {
    &--wrapper {
        padding: 0.5rem;
        margin-bottom: 4rem;
        max-width: calc(800 / 16 * 1rem);
        width: 100%;
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
    &--prefetch {
        text-align: center;
    }
}
</style>
./Cocktail.vue../compostables/processCocktailData../compostables/c
