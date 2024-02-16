<template>
    <div class="bcn-article-highlight-container">
        <div class="bcn-article-highlight">
            <div class="bcn-article-highlight__content">
                <div class="bcn-article-highlight__title u-header-3" v-html="title" />
                <p class="bcn-article-highlight__description u-paragraph">
                    {{ description }}
                </p>
                <bcn-button
                    v-if="link"
                    :label="buttonLabel"
                    :link="link"
                    :icon="faArrowRight"
                    icon-position="right"
                />
            </div>
            <bcn-image
                class="bcn-article-highlight__image"
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
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";

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
@use 'bcn-article-highlight';
</style>
