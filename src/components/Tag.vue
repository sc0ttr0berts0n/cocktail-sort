<script setup lang="ts">
import { global } from '../store/store';
import { useFilterDrinks } from '../compostables/filterDrinks';
import { computed, ref } from 'vue';
import Tag from './Tag.vue';
import { addOrRemoveTagFromInclude } from '../compostables/toggleTagFromInclude';

const props = defineProps<{ name: string }>();

const { name } = props;

const el = ref<HTMLDivElement | null>(null);

const isActive = computed(() => {
    return global.include.includes(name);
});
</script>

<template>
    <div
        ref="el"
        class="tag"
        :class="{ active: isActive }"
        @click.stop="addOrRemoveTagFromInclude(name)"
    >
        {{ name }}
    </div>
</template>

<style lang="scss" scoped>
.tag {
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
        transform: translateY(-2px);
        background-color: #ffffff;
    }
    &:active {
        transform: scale(1.1);
    }

    &.active {
        background-color: #ff5050;
        @media (prefers-color-scheme: light) {
            background-color: #282828;
            color: #ffffff;
        }
    }
}
</style>
../compostables/filterCocktails
