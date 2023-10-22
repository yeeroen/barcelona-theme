<template>
    <form class="bcn-navigation-search" @submit="emit">
        <div class="bcn-navigation-search__icon">
            <font-awesome-icon
                icon="far fa-search"
            />
        </div>

        <input
            class="bcn-navigation-search__input"
            type="search"
            :placeholder="placeholder"
        />
    </form>
</template>

<script setup>
const { placeholder } = defineProps({
    placeholder: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
@use 'bcn-navigation-search';
</style>
