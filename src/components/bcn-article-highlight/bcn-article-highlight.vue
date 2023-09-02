<template>
    <div class="bcn-article-highlight-container">
        <div class="bcn-article-highlight" :class="classes">
            <div class="bcn-article-highlight__image-wrapper">
                <bcn-image
                    class="bcn-article-highlight__image"
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
            <div class="bcn-article-highlight__content">
                <div class="bcn-article-highlight__content__title" v-html="title" />
                <div class="bcn-article-highlight__content__text" v-html="text" />
            </div>
        </div>
    </div>
</template>

<script setup>
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

const classes = computed(() => {
    let classes = [];

    if(border) classes.push('bcn-article-highlight--border');

    return classes;
});
</script>
