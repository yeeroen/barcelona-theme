<template>
    <div
        class="bcn-image-with-text"
    >

        <bcn-image
            source=""
            alt=""
            :sizes="[
                {
                    'width': 960,
                    'height': 360,
                    'media': '',
                }
            ]"
        />
    </div>
</template>
<script setup>
import BcnImage from '../bcn-image/bcn-image.vue';
</script>
