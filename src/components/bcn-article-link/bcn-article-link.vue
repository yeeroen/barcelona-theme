<template>
    <div class="bcn-article-link-container">
        <div class="bcn-article-link" :class="classes">
            <div class="bcn-article-link__image-wrapper">
                <bcn-image
                    class="bcn-article-link__image"
                    :source="image.source"
                    :alt="image.alt"
                    :sizes="[
                        {
                            width: 300,
                            height: 170,
                            media: '',
                        },
                    ]"
                />
            </div>
            <div class="bcn-article-link__content">
                <div class="bcn-article-link__content__title u-header-5" v-html="title" />
                <div class="bcn-article-link__content__text" v-html="text" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue';
import BcnImage from '../bcn-image/bcn-image.vue';

const { image, title, text, border } = defineProps({
    image: {
        type: Object,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },

    border: {
        type: Boolean,
        default: false,
    },
});

const aspectRatio = image?.aspectRatio || '16/9';

const classes = computed(() => {
    let classes = [];

    if(border) classes.push('bcn-article-link--border');

    return classes;
});
</script>

<style lang="scss" scoped>
@use 'bcn-article-link';

.bcn-article-link {
    --aspect-ratio: v-bind('aspectRatio');
}
</style>
