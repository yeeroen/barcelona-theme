<template>
    <form class="bcn-navigation-search" @submit.prevent="event => emit('search', event)">
        <div class="bcn-navigation-search__icon">
            <font-awesome-icon
                :icon="faSearch"
            />
        </div>

        <input
            ref="input"
            class="bcn-navigation-search__input"
            type="search"
            :placeholder="placeholder"
        />
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faSearch} from '@fortawesome/pro-regular-svg-icons';

const emit = defineEmits(['search']);

const { placeholder } = defineProps({
    placeholder: {
        type: String,
        default: '',
    },
});

const input = ref(null);

onMounted(() => {
    const search = new URLSearchParams(window.location.search).get('search');

    if(search) {
        input.value.value = search;
    }
})
</script>

<style lang="scss" scoped>
@use 'bcn-navigation-search';
</style>
