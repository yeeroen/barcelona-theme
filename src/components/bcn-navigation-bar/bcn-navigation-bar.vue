<template>
    <div
        :class="{
            'bcn-navigation-bar': true,
            'bcn-navigation-bar--open': open,
        }"
    >
        <div class="bcn-navigation-bar__top">
            <div class="bcn-navigation-bar__top-inner">
                <img
                    class="bcn-navigation-bar__logo"
                    :src="logo"
                    alt="Logo"
                />

                <bcn-navigation-search
                    :placeholder="searchPlaceholder"
                    @search="search"
                />

                <font-awesome-icon
                    v-if="!open.value"
                    class="bcn-navigation-bar__menu-icon"
                    icon="far fa-bars"
                    @click="open = !open.value"
                />

                <font-awesome-icon
                    v-else-if="open.value"
                    class="bcn-navigation-bar__menu-icon"
                    icon="far fa-xmark"
                    @click="open = !open.value"
                />
            </div>
        </div>

        <div class="bcn-navigation-bar__bottom">
            <div class="bcn-navigation-bar__bottom-inner">
                <bcn-navigation-search
                    :placeholder="searchPlaceholder"
                    @search="search"
                />

                <div class="bcn-navigation-bar__navigation">
                    <a
                        v-for="(item, index) in navigation"
                        :key="index"
                        :href="item.url"
                        class="bcn-navigation-bar__navigation-item"
                    >
                        {{ item.label }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BcnNavigationSearch from '../bcn-navigation-bar/bcn-navigation-search/bcn-navigation-search.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const emit = defineEmits(['search']);

const { logo, searchPlaceholder } = defineProps({
    logo: {
        type: String,
        default: '//via.placeholder/150x50',
    },

    searchPlaceholder: {
        type: String,
        default: '',
    },

    navigation: {
        type: Array,
        default: () => [
            {
                label: 'Home',
                url: '/',
            },
            {
                label: 'About',
                url: '/about',
            },
            {
                label: 'Contact',
                url: '/contact',
            }
        ],
    },
});

const search = value => {
    emit('search', value);
};

const open = ref(false);
</script>

<style lang="scss" scoped>
@use 'bcn-navigation-bar';
</style>
