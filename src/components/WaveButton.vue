<script setup lang="ts">
import {
    useEnableWave,
    useRemoveWave,
    isHovered,
} from "@/composables/useWaveAnimation";

interface Props {
    btnText: string;
}

defineProps<Props>();
</script>

<template>
    <button
        class="relative min-w-[140px] cursor-pointer overflow-hidden rounded-md border-2 border-white bg-black px-10 text-base transition-all duration-300 hover:scale-110"
        @click.prevent
        @mouseover="useEnableWave($event)"
        @mouseleave="useRemoveWave($event)"
    >
        <span
            class="wave-effect pointer-events-none absolute left-1/2 top-1/2 z-0 h-[350px] w-[350px] rounded-full bg-white"
        ></span>
        <span
            class="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
            :class="isHovered ? 'text-black' : 'text-white'"
        >
            {{ btnText.toUpperCase() }}
        </span>
    </button>
</template>

<style scoped lang="scss">
.wave-effect {
    transform: translate(-50%, -50%) scale(0);
}
</style>
