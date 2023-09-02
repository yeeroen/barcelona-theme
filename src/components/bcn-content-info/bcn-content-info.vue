<template>
    <div class="bcn-content-info">
        <bcn-image
            :source="avatar"
            :alt="avatarAlt"
            :sizes="[
                {
                    width: 60,
                    height: 60,
                    media: '',
                },
            ]"
            class="bcn-content-info__image"
        />
        <div class="bcn-content-info__text-container">
            <p class="bcn-content-info__author">By <nuxt-link :to="`/${slug}`">{{ fullName }}</nuxt-link></p>
            <p class="bcn-content-info__text"><i class="fal fa-calendar" /><time :datetime="datetime">{{ formattedDate }}</time></p>
        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
    props: {
        avatar: {
            type: String,
            required: true,
        },

        avatarAlt: {
            type: String,
            required: true,
        },

        fullName: {
            type: String,
            required: true,
        },

        date: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            required: true,
        },
    },

    computed: {
        formattedDate() {
            return DateTime.fromISO(this.date).toFormat('cccc d LLLL yyyy');
        },

        datetime() {
            return DateTime.fromFormat(this.date, 'dd-MM-yyyy').toISO();
        }
    }
};
</script>

<style lang="scss">
@use 'bcn-content-info.scss';
</style>
