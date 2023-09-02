<template>
    <picture class="bcn-image" :class="pictureClass">
        <template v-for="size in sizes">
            <source
                :srcset="`${source}/m/${size.width}x${size.height}/filters:format(avif)`"
                :media="size.media"
            />
            <source
                :srcset="`${source}/m/${size.width}x${size.height}/filters:format(webp)`"
                :media="size.media"
            />
            <source
                :srcset="`${source}/m/${size.width}x${size.height}`"
                :media="size.media"
            />
        </template>
        <img class="bcn-image__img"  :loading="loading" :src="source" :alt="alt" />
    </picture>
</template>

<script setup>
defineProps({
    source: {
        type: String,
        required: true,
    },

    alt: {
        type: String,
        required: true,
    },

    pictureClass: {
        type: String,
        required: false,
        default: '',
    },

    sizes: {
        type: Array,
        required: true,
    },

    loading: {
        type: String,
        required: false,
        default: '',
    },
});
</script>

<style lang="scss">
@use 'bcn-image';
</style>
