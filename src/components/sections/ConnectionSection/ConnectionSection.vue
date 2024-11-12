<script setup lang="ts">
import { useTemplateRef } from "vue";
import { useSyncScroll } from "@/composables/useSyncScroll";

import DescriptionPart from "./DescriptionPart.vue";
import CircleWrapper from "./CircleWrapper.vue";

const section = useTemplateRef("section");
const slider = useTemplateRef("circle-wrapper");

const { handleScroll } = useSyncScroll(section, slider, {
    duration: 0.7,
    ease: "power2.out",
});
</script>

<template>
    <section
        ref="section"
        class="light relative my-32 ml-24 box-content flex h-[600px] max-h-min flex-row-reverse items-start justify-between gap-16 overflow-y-auto overflow-x-hidden bg-white pr-24 text-black"
        @scroll="handleScroll"
    >
        <div class="description pb-28 pt-0">
            <DescriptionPart />
        </div>
        <div ref="circle-wrapper" class="circle-wrapper gap-20">
            <CircleWrapper />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    direction: rtl;

    // mask-image: linear-gradient(
    //     to bottom,
    //     rgba(0, 0, 0, 0.9) 0%,
    //     rgba(0, 0, 0, 1) 25%,
    //     rgba(0, 0, 0, 1) 50%,
    //     rgba(0, 0, 0, 1) 65%,
    //     rgba(0, 0, 0, 0.2) 100%
    // );
    // mask-repeat: no-repeat;

    .circle-wrapper {
        background: black;
        aspect-ratio: 480/600;
        max-width: 480px;
        min-width: 400px;
        border-radius: 240px;
        overflow-x: hidden;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 1023px) {
        margin-left: 2rem;
        padding-right: 2rem;
    }

    @media (max-width: 879px) {
        margin-left: 0;
        padding-left: 2rem;
        direction: ltr;
        overflow-y: hidden;
        overflow-x: auto;

        .circle-wrapper {
            display: none;
        }

        .description {
            display: flex;
            gap: 20px;
            min-width: max-content;
            padding-bottom: 42px;

            * {
                text-align: left;
            }
        }
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f4f3f3;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2e59e7;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }
}
</style>
