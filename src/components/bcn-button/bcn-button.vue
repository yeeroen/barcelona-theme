<template>
    <component
        :is="type"
        class="bcn-button u-header-6"
        :class="classes"
        :href="link"
    >
        <font-awesome-icon
            v-if="icon"
            class="bcn-button__icon"
            :icon="icon"
        />
        <span class="bcn-button__label">
            {{ label }}
        </span>
    </component>
</template>

<script setup>
import {computed} from 'vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const { icon, iconPosition, label, link } = defineProps({
    icon: {
        type: String,
        required: false,
        default: '',
    },

    iconPosition: {
        type: String,
        required: false,
        default: 'left',
    },

    label: {
        type: String,
        required: false,
        default: '',
    },

    link: {
        type: String,
        required: false,
        default: '',
    },
});

const type = computed(() => {
    if (link) {
        return 'a';
    }

    return 'button';
});

const classes = computed(() => {
    const classes = [];

    if (iconPosition === 'right') classes.push('bcn-button--icon-position-right');

    return classes;
});
</script>

<style lang="scss">
@use 'bcn-button';
</style>
