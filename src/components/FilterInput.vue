<script setup lang="ts">
import { useFilterDrinks } from '../compostables/filterDrinks';

const model = defineModel();
const props = defineProps<{
    iconName: string;
    label: string;
}>();

const { iconName, label } = props;

const onKeyUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    useFilterDrinks();
};
</script>

<template>
    <label class="input--label-wrapper">
        <div class="input--label">{{ label }}</div>
        <div class="input--input-wrapper">
            <div class="input--icon-wrapper">
                <v-icon :name="iconName" />
            </div>
            <input
                @keyup="onKeyUp"
                v-model="model"
                class="input--element"
                type="search"
                name="q"
            />
        </div>
    </label>
</template>

<style lang="scss" scoped>
@use 'sass:math';

$input-size: 1rem;
.input {
    &--label-wrapper {
        position: relative;
        width: 100%;
    }
    &--label {
        font-size: 0.75rem;
        font-weight: bold;
        padding-left: 0.375rem;
        text-transform: uppercase;
        letter-spacing: 0.125rem;
    }
    &--element {
        padding: 0.5rem 0.25rem;
        border-radius: 0 $input-size $input-size 0;
        border: 0;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1;
        width: 100%;
        height: 2rem;
        background-color: #282828;
    }
    &--input-wrapper {
        display: flex;
        margin-top: 0.125rem;
    }
    &--icon-wrapper {
        background-color: #282828;
        display: flex;
        place-items: center;
        border-radius: $input-size 0 0 $input-size;
        padding: 0 0.25rem;

        svg {
            height: 1.75rem;
            width: auto;
            // transform: translate(0.125rem, 0.3175rem);
        }
    }
}
</style>
