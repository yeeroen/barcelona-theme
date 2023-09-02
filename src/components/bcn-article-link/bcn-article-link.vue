<template>
    <div class="bcn-article-link-container">
        <div class="bcn-article-link">
            <div class="bcn-article-link__content">
                <div class="bcn-article-link__title u-header-3" v-html="title" />
                <p class="bcn-article-link__description u-paragraph">
                    {{ description }}
                </p>
                <bcn-button
                    v-if="link"
                    :label="buttonLabel"
                    :link="link"
                    icon="fa fa-arrow-right"
                    icon-position="right"
                />
            </div>
            <bcn-image
                class="bcn-article-link__image"
                :source="image.source"
                :alt="image.alt"
                loading="lazy"
                :sizes="image.sizes"
            />
        </div>
    </div>
</template>
<script setup>
import BcnButton from "../bcn-button/bcn-button.vue";
import BcnImage from "../bcn-image/bcn-image.vue";

const { title, description, link, buttonLabel, image } = defineProps({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: false,
        default: '',
    },

    buttonLabel: {
        type: String,
        required: false,
        default: '',
    },

    image: {
        type: Object,
        required: true,
    },
});
</script>

<style lang="scss">
@use 'bcn-article-link';
</style>
