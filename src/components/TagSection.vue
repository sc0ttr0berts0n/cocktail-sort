<script setup lang="ts">
import { Ref, watch } from 'vue';
import { global } from '../store/store';
import { ref } from 'vue';
import TagList from '../components/TagList.vue';
import { CocktailListState } from '../compostables/createCocktailListState';

type TagData = {
    name: string;
    count: number;
};

const tagMap = ref(new Map<string, number>());
const tags: Ref<undefined | string[]> = ref();

const generateTags = (drinks: null | CocktailListState[]) => {
    if (!drinks) return;

    tagMap.value.clear();

    drinks.forEach((el) => {
        // only visible drinks in the tag list
        if (el.hidden) return;

        el.tags?.forEach((tag) => {
            if (tagMap.value.has(tag)) {
                const count = tagMap.value.get(tag);
                if (!count) return;
                tagMap.value.set(tag, count + 1);
            } else {
                tagMap.value.set(tag, 1);
            }
        });
    });

    // sort by count
    return [...tagMap.value.entries()]
        .sort(([, aCount], [, bCount]) => bCount - aCount)
        .map((entry) => entry[0]);
};

watch(
    global,
    (newGlobal) => {
        tags.value = generateTags(newGlobal.drinks);
        watch(global, () => {
            tags.value = generateTags(global.drinks);
        });
    },
    { once: true }
);
</script>

<template>
    <TagList :tags="tags" v-if="tags" />
</template>

<style lang="scss" scoped></style>
