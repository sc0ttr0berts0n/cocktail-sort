<script setup lang="ts">
interface DrinkListData {
    ID: string;
    Name: string;
    Menu: string;
    Recipe: string;
    Tags: string;
}

const props = defineProps<{ metadata: DrinkListData }>();
</script>

<template>
    <div class="drink--wrapper">
        {{ props.metadata.Name }}
        <br />
        {{ props.metadata.Menu }}
        <br />
        {{ props.metadata.Recipe.split('|').join('\n') }}
        <br />
        {{ props.metadata.Tags.split('|').join(', ') }}
    </div>
</template>

<style scoped></style>
