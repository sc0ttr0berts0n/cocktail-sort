<script setup lang="ts">
import { ref } from 'vue';
import { global } from '../store/store';
import Tag from './Tag.vue';
import { useFilterCocktails } from '../compostables/filterCocktails';
import { CocktailListState } from '../compostables/createCocktailListState';

const props = defineProps<{ metadata: CocktailListState }>();

const { tags, name, recipe, isFirstChar } = props.metadata;

const recipeHTML = recipe.join('<br />');

const collapsed = ref(true);

const toggle = () => {
    collapsed.value = !collapsed.value;
};

const showLetter = () => {
    const _anyVisibleLetters = global.drinks?.some((drink) => {
        return (
            !drink.hidden &&
            name[0].toLocaleLowerCase() === drink.name[0].toLocaleLowerCase()
        );
    });

    return isFirstChar && _anyVisibleLetters;
};

const headerLetter = name[0].match(/[0-9]/) ? '#' : name[0];

const addTagToInclude = (tag: string) => {
    if (global.include.includes(tag)) {
        return;
    }

    global.include = `${global.include} ${tag}`.trim();
    useFilterCocktails();
};
</script>

<template>
    <div class="divider" v-if="showLetter()">
        {{ headerLetter }}
    </div>
    <div
        class="drink--wrapper"
        @click="toggle"
        :class="{ 'drink--wrapper__collapsed': collapsed }"
        v-if="!props.metadata.hidden"
    >
        <div class="drink--header">
            <div class="drink--name">{{ name }}</div>
            <!-- <div class="drink--menu">{{ props.metadata.Menu }}</div> -->
        </div>

        <div class="drink--recipe" v-html="recipeHTML"></div>
        <div class="drink--tags">
            <Tag v-for="tag in tags" :key="tag" v-if="tags" :name="tag" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.divider {
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.25rem;
    color: #ffffff;
    @media (prefers-color-scheme: light) {
        color: #282828;
    }
}
.drink {
    &--wrapper {
        padding: 0.5rem 1rem 0.75rem;
        margin-bottom: 0.5rem;
        background-color: #ffffff11;
        border-radius: 0.5rem;
        transition: 100ms;
        @media (prefers-color-scheme: light) {
            background-color: #00000011;
        }
        &:hover {
            background-color: #ffffff33;
            @media (prefers-color-scheme: light) {
                background-color: #bbbbbb;
            }
        }
        &.drink--wrapper__collapsed {
            cursor: pointer;
        }
    }
    &--header {
        text-transform: capitalize;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &--name {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1;
        color: #ffffff;
        @media (prefers-color-scheme: light) {
            color: #282828;
        }
    }
    &--menu {
        line-height: 1;
        &:before {
            content: '[🍸] ';
        }
    }
    &--recipe {
        line-height: 1.1;
        margin-top: 0.5rem;
        color: #ffffff;
        @media (prefers-color-scheme: light) {
            color: #282828;
        }

        .drink--wrapper__collapsed & {
            display: none;
        }
    }
    &--tags {
        margin-top: 0.75rem;
        display: flex;
        gap: 0.375rem;
        cursor: pointer;
        flex-wrap: wrap;
    }

    &--tag {
        background-color: #888888;
        color: #282828;
        padding: 0.25rem 0.375rem;
        border-radius: 0.5rem;
        line-height: 1;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.75rem;
        white-space: nowrap;
        transition: 100ms;
        @media (prefers-color-scheme: light) {
            background-color: #cccccc;
            color: #444444;
        }
        &:hover {
            background-color: #ffffff;
            @media (prefers-color-scheme: light) {
                background-color: #282828;
                color: #ffffff;
            }
        }
    }
}
</style>
../compostables/filterCocktails../compostables/processCocktailData../compostables/c
