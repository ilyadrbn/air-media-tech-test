<script setup lang="ts">
import {
    animateWave,
    removeWave,
    isHovered,
} from "@/composables/waveBtnAnimation";

interface Props {
    btnText: string;
}

defineProps<Props>();
</script>

<template>
    <button
        class="relative cursor-pointer overflow-hidden rounded-md border-2 border-white bg-black px-10 text-base transition-colors duration-300"
        :class="isHovered ? 'text-black' : 'text-white'"
        @click.prevent
        @mouseover.stop="animateWave($event)"
        @mouseleave.stop="removeWave($event)"
    >
        <span
            class="wave-effect pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300%] w-[300%] rounded-full bg-white"
        ></span>
        <p class="relative z-10">
            {{ btnText.toUpperCase() }}
        </p>
    </button>
</template>

<style scoped lang="scss">
.wave-effect {
    transform: translate(-50%, -50%) scale(0);
}
</style>
