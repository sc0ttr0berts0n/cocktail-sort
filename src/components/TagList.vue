<script setup lang="ts">
import Tag from '../components/Tag.vue';
import { toRefs } from 'vue';

const props = defineProps<{ tags: string[] }>();

const { tags } = toRefs(props);
</script>

<template>
    <div class="tag-list--wrapper">
        <Tag v-for="tag in tags" :key="tag" v-if="tags" :name="tag" />
    </div>
</template>

<style lang="scss" scoped>
.tag-list {
    &--wrapper {
        padding: 0.5rem;
        max-width: calc(800 / 16 * 1rem);
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.75rem;
        gap: 0.375rem;
        cursor: pointer;
    }
}
</style>
