<script setup lang="ts">
import { useFilterCocktails } from '../compostables/filterCocktails';
import { global } from '../store/store';

const model = defineModel();
const props = defineProps<{
    iconName: string;
    label: string;
}>();

const { iconName, label } = props;

const { darkMode } = global.settings;

const onKeyUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    useFilterCocktails();
};

const clear = () => {
    model.value = '';
    useFilterCocktails();
};
</script>

<template>
    <label class="input--label-wrapper">
        <div class="input--label">
            {{ label }}
        </div>
        <div class="input--input-wrapper">
            <input
                @keyup="onKeyUp"
                v-model="model"
                class="input--element"
                :class="{ 'input--element__round-right': !model }"
            />
            <button @click="clear" v-if="model" class="input--clear-button">
                <v-icon
                    :name="iconName"
                    :fill="global.settings.darkMode ? '#ffffff' : '#5050ff'"
                />
            </button>
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
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        margin-top: 0.5rem;
    }
    &--label {
        font-size: 0.75rem;
        font-weight: bold;
        padding-left: 0.375rem;
        text-transform: uppercase;
        letter-spacing: 0.125rem;
        color: #ffffff;
    }
    &--element {
        padding: 0.5rem 0.75rem;
        border-radius: 0 $input-size $input-size 0;
        border: 0;
        border-radius: $input-size 0 0 $input-size;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1;
        width: 100%;
        height: 2rem;
        background-color: #282828;
        color: #ffffff;
        &__round-right {
            border-radius: $input-size;
        }

        @media (prefers-color-scheme: light) {
            background-color: #ffffff;
            color: #282828;
        }
    }
    &--input-wrapper {
        display: flex;
        margin-top: 0.125rem;
    }
    &--icon-wrapper {
        display: flex;
        place-items: center;
        @media (prefers-color-scheme: light) {
            background-color: #ffffff;
            color: #282828;
        }

        svg {
            height: 1.75rem;
            width: auto;
            // transform: translate(0.125rem, 0.3175rem);
        }
    }
    &--clear-button {
        align-self: flex-end;
        height: 2rem;
        width: 2rem;
        border-radius: 0 0.25rem 0.25rem 0;
        border: 0;
    }
}
</style>
../compostables/filterCocktails
