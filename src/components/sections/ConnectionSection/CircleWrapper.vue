<script setup lang="ts">
import CircleConnect from "./CircleConnect.vue";
import CircleTranslations from "./CircleTranslations.vue";
import CircleMonitor from "./CircleMonitor.vue";

const circleSlides = [CircleConnect, CircleTranslations, CircleMonitor];
</script>
<template>
    <div
        v-for="(slide, index) in circleSlides"
        :key="index"
        class="sticky top-0 flex min-h-full min-w-full items-center justify-center rounded-[240px] bg-black"
    >
        <component :is="slide" />
    </div>
</template>

<style scoped lang="scss"></style>
