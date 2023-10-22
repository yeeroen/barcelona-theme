<template>
    <bcn-navigation-bar
        logo="https://barcatrips.com/images/barcatrips-logo.svg"
    />

    <div class="resize">
        <bcn-article-highlight
            title="Test"
            description="aaaa"
            link="/"
            :image="{
                source: 'https://a.storyblok.com/f/190572/1280x640/74157625a4/header-4.jpg',
                alt: 'test',
                sizes: [
                    {
                        width: 500,
                        height: 500,
                        media: '',
                    },
                ],
            }"
            button-label="Read more"
        />
        <div style="margin-top: 40px;" />
        <bcn-article-link
            title="Barcelona <span class='u-highlight'>Taxi</span> Guide"
            text="All you need to know about taxis in the city!"
            :image="{
                source: 'https://a.storyblok.com/f/190572/1280x640/74157625a4/header-4.jpg',
                alt: 'test',
            }"
            :border="false"
        />
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px;">
            <bcn-article-link
                title="Barcelona <span class='u-highlight'>Taxi</span> Guide"
                text="All you need to know about taxis in the city!"
                :image="{
                    source: 'https://a.storyblok.com/f/190572/1280x640/74157625a4/header-4.jpg',
                    alt: 'test',
                }"
                :border="true"
            />
            <bcn-article-link
                title="Barcelona <span class='u-highlight'>Taxi</span> Guide"
                text="All you need to know about taxis in the city!"
                :image="{
                    source: 'https://a.storyblok.com/f/190572/1280x640/74157625a4/header-4.jpg',
                    alt: 'test',
                }"
                :border="true"
            />
            <bcn-article-highlight
                title="Test"
                description="aaaa"
                link="/"
                :image="{
                source: 'https://a.storyblok.com/f/190572/1280x640/74157625a4/header-4.jpg',
                alt: 'test',
                sizes: [
                    {
                        width: 500,
                        height: 500,
                        media: '',
                    },
                ],
            }"
                button-label="Read more"
            />

        </div>
    </div>
</template>

<script setup>
import BcnArticleHighlight from './components/bcn-article-highlight/bcn-article-highlight.vue';
import BcnArticleLink from './components/bcn-article-link/bcn-article-link.vue';
import BcnNavigationBar from './components/bcn-navigation-bar/bcn-navigation-bar.vue';
</script>

<style lang="scss">
@use 'scss/base';
</style>
<script setup>
</script>
