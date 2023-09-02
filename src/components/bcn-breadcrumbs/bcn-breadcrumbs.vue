<template>
    <nav class="bcn-breadcrumbs">
        <div v-html="`<script type='application/ld+json'>${JSON.stringify(structuredData)}</script>`" />
        <ul class="bcn-breadcrumbs__list">
            <li
                v-for="(item, index) in parents"
                :key="index"
                class="bcn-breadcrumbs__item"
            >
                <nuxt-link :to="`/${item.full_slug}`">
                    {{ item.name }}
                </nuxt-link>
            </li>

            <li class="bcn-breadcrumbs__item bcn-breadcrumbs__item--active">
                {{ current.name }}
            </li>
        </ul>
    </nav>
</template>

<script setup>
const structuredData = ref({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [],
});

const { parents, current } = defineProps([ 'parents', 'current' ]);

parents.forEach((item, index) => {
    structuredData.value.itemListElement.push({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
            '@id': `https://barcatrips.com/${item.full_slug}`,
            'name': item.name,
        },
    });
});

structuredData.value.itemListElement.push({
    '@type': 'ListItem',
    'position': parents.length + 1,
    'item': {
        '@id': `https://barcatrips.com/${current.full_slug}`,
        'name': current.name,
    },
});
</script>

<style lang="scss">
@use 'bcn-breadcrumbs';
</style>
