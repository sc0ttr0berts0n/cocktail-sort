<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
    defineProps<{ header: string; collapsed?: boolean }>(),
    {
        header: 'Section',
        collapsed: false,
    }
);
const { header, collapsed } = props;

const isHidden = ref(collapsed);
</script>

<template>
    <section>
        <div class="header-wrapper" @click="isHidden = !isHidden">
            <div class="toggle-arrow-wrapper">
                <div class="toggle-arrow" :class="{ active: !isHidden }"></div>
            </div>
            <h2>{{ header }}</h2>
        </div>
        <div class="content-wrapper" :class="{ hidden: isHidden }">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.header-wrapper {
    display: flex;
    border-bottom: 1px solid white;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    align-items: center;
}
.content-wrapper {
    padding: 1rem 0.5rem;
    &.hidden {
        display: none;
    }
}
h2 {
    font-weight: 100;
    font-size: 2rem;
    letter-spacing: 1px;
    width: 100%;
    margin-left: 0.5rem;
}
section {
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
}
.icon {
    width: 10rem;
    height: 10rem;
    fill: white;
}
.toggle-arrow {
    $size: 0.75rem;
    width: $size;
    height: $size;
    border: 0 solid white;
    border-width: 0.125rem 0.125rem 0 0;
    margin-top: 0.25rem;
    transform: rotate(45deg);
    transition: 75ms;
    &.active {
        transform: rotate(45deg+90deg);
    }
}
</style>
