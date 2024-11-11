<script setup lang="ts">
import { useEnableWave, useRemoveWave } from "@/composables/useWaveAnimation";

const props = defineProps<{
    btnText: string;
    currentTheme: { background: string; text: string; icon: string };
}>();
</script>

<template>
    <button
        class="relative min-w-[140px] cursor-pointer overflow-hidden rounded-md border-2 border-white px-10 text-base transition-all duration-300 hover:scale-110"
        :class="
            currentTheme.text === 'text-black'
                ? 'bg-white text-black'
                : 'bg-black text-white'
        "
        @click.prevent
        @mouseover="useEnableWave($event)"
        @mouseleave="useRemoveWave($event)"
    >
        <span
            class="wave-effect pointer-events-none absolute left-1/2 top-1/2 z-0 h-[350px] w-[350px] transform rounded-full"
            :class="
                currentTheme.text === 'text-black' ? 'bg-black' : 'bg-white'
            "
        ></span>
        <span
            class="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform uppercase"
        >
            {{ props.btnText }}
        </span>
    </button>
</template>

<style scoped lang="scss">
button {
    &:hover {
        span:not(.wave-effect) {
            filter: invert(1);
        }
    }
    .wave-effect {
        transform: translate(-50%, -50%) scale(0);
    }
}
</style>
