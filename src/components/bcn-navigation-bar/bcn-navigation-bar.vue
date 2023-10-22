<template>
    <div
        :class="{
            'bcn-navigation-bar': true,
            'bcn-navigation-bar--open': open,
        }"
    >
        <div class="bcn-navigation-bar__top">
            <div class="bcn-navigation-bar__top-inner">
                <a class="bcn-navigation-bar__logo-wrapper" href="/">
                    <img
                        class="bcn-navigation-bar__logo"
                        :src="logo"
                        alt="Logo"
                    />
                </a>

                <bcn-navigation-search
                    :placeholder="searchPlaceholder"
                    @search="search"
                />

                <font-awesome-icon
                    v-show="!open"
                    class="bcn-navigation-bar__menu-icon"
                    icon="far fa-bars"
                    @click="toggleNavigation"
                />

                <font-awesome-icon
                    v-show="open"
                    class="bcn-navigation-bar__menu-icon"
                    icon="far fa-xmark"
                    @click="toggleNavigation"
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
        default: () => [],
    },
});

const search = value => {
    emit('search', value);
};

const open = ref(false);

const toggleNavigation = () => {
    open.value = !open.value;
};
</script>

<style lang="scss" scoped>
@use 'bcn-navigation-bar';
</style>
