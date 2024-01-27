<script setup lang="ts">
import { ref } from 'vue';
import { global, DrinkListData } from '../store/store';
import { useFilterDrinks } from '../compostables/filterDrinks';

const props = defineProps<{ metadata: DrinkListData }>();

const { Tags, Name, Recipe, isFirstChar } = props.metadata;

const recipeHTML = Recipe.join('<br />');

const collapsed = ref(true);

const toggle = () => {
    collapsed.value = !collapsed.value;
};

const showLetter = () => {
    const _anyVisibleLetters = global.drinks.some((drink) => {
        return (
            !drink.hidden &&
            Name[0].toLocaleLowerCase() === drink.Name[0].toLocaleLowerCase()
        );
    });

    return isFirstChar && _anyVisibleLetters;
};

const headerLetter = Name[0].match(/[0-9]/) ? '#' : Name[0];

const addTagToInclude = (tag: string) => {
    if (global.include.includes(tag)) {
        return;
    }

    global.include = `${global.include} ${tag}`.trim();
    useFilterDrinks();
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
            <div class="drink--name">{{ Name }}</div>
            <!-- <div class="drink--menu">{{ props.metadata.Menu }}</div> -->
        </div>

        <div class="drink--recipe" v-html="recipeHTML"></div>
        <div class="drink--tags">
            <div
                class="drink--tag"
                v-for="tag in Tags"
                :key="tag"
                v-if="Tags"
                @click.stop="addTagToInclude(tag)"
            >
                {{ tag }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.divider {
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.25rem;
}
.drink {
    &--wrapper {
        padding: 0.5rem 1rem 0.75rem;
        margin-bottom: 0.5rem;
        background-color: #ffffff11;
        border-radius: 0.5rem;
        transition: 100ms;
        &:hover {
            background-color: #ffffff33;
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
        .drink--wrapper__collapsed & {
            display: none;
        }
    }
    &--tags {
        margin-top: 0.75rem;
        display: flex;
        gap: 0.5rem;
        cursor: pointer;
        flex-wrap: wrap;
    }

    &--tag {
        background-color: #888888;
        color: #282828;
        padding: 0.25rem;
        border-radius: 0.5rem;
        line-height: 1;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.75rem;
        white-space: nowrap;
        transition: 100ms;
        &:hover {
            background-color: #ffffff;
        }
    }
}
</style>
../store/store
