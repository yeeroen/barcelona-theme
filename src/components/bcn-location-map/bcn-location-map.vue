<template>
    <section class="bcn-location-map">
        <div class="bcn-location-map__content">
            <h2 class="bcn-location-map__title">
                {{ title }}
            </h2>
            <p class="bcn-location-map__description">
                {{ description }}
            </p>

            <div class="bcn-location-map__address">
                <h3 class="bcn-location-map__address-title">
                    Address:
                </h3>
                <p class="bcn-location-map__address-text">
                    {{ location.street }}, {{ location.housenumber }}
                </p>
                <p class="bcn-location-map__address-text">
                    {{ location.city }}, {{ location.postcode }}
                </p>
            </div>

            <div class="bcn-location-map__contact">
                <h3 class="bcn-location-map__contact-title">
                    Contact:
                </h3>
                <p class="bcn-location-map__contact-text">
                    <i class="fal fa-globe"></i>
                    <a :href="website" target="_blank" rel="noopener noreferrer">
                        {{ website }}
                    </a>
                </p>
                <p class="bcn-location-map__contact-text">
                    <i class="fal fa-phone-alt"></i>
                    <a :href="`tel:${phone.replace(/ /g,'')}`">
                        {{ phone }}
                    </a>
                </p>
            </div>
        </div>
        <MapboxMap
            class="bcn-location-map__map"
            map-id="cllsat7zn00a001pf6q4z8iwv"
            style="position: relative;"
            :options="{
                style: 'mapbox://styles/vemedia/cllsat7zn00a001pf6q4z8iwv',
                center: [location.lon, location.lat],
                zoom
            }"
        >
            <MapboxDefaultMarker
                :lnglat="[location.lon, location.lat]"
                :options="{
                    color: 'var(--primary)',
                    draggable: false,
                }"
            />
        </MapboxMap>
    </section>
</template>

<script setup>
const { title, description, zoom, location, website, phone } = defineProps([ 'title', 'description', 'zoom', 'location', 'website', 'phone' ]);
</script>

<style lang="scss">
@use 'bcn-location-map';
</style>
