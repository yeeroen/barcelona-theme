<template>
    <form class="bcn-navigation-search" @submit.prevent="emit('search')">
        <div class="bcn-navigation-search__icon">
            <font-awesome-icon
                icon="far fa-search"
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
