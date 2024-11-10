<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import { useEnableWave, useRemoveWave } from "@/composables/useWaveAnimation";

const isSmallScreen: Ref<boolean> = ref(window.innerWidth <= 840);

const props = defineProps<{
    label: string;
}>();

window.addEventListener("resize", () => {
    isSmallScreen.value = window.innerWidth <= 840;
});
</script>

<template>
    <a
        href="#"
        class="relative flex h-full items-center overflow-hidden whitespace-nowrap text-sm uppercase text-white no-underline transition-colors duration-200 hover:text-gray-400"
        @mouseover="isSmallScreen ? useEnableWave($event) : null"
        @mouseleave="isSmallScreen ? useRemoveWave($event) : null"
    >
        <span
            v-if="isSmallScreen"
            class="wave-effect pointer-events-none absolute left-1/2 top-1/2 z-0 h-[200px] w-[200px] rounded-full bg-white"
        ></span>
        <span class="pointer-events-none relative z-10">
            {{ props.label }}
        </span>
    </a>
</template>

<style scoped lang="scss">
a {
    .wave-effect {
        transform: translate(-50%, -50%) scale(0);
    }

    @media (max-width: 879px) {
        border-radius: 60px;
        border: 1px solid white;
        padding: 0 12px;
        &:hover {
            span:not(.wave-effect) {
                color: black;
            }
        }
    }
}
</style>
