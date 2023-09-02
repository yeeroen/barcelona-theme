<template>
  <bcn-article-link
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
</template>

<script setup>
import BcnArticleLink from './components/bcn-article-link/bcn-article-link.vue';
</script>

<style lang="scss">
@use 'scss/base'
</style>
