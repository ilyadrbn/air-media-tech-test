<script setup lang="ts">
import { useFollowCursor } from "@/composables/useFollowCursor";

defineProps<{ text: string }>();

const { button, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useFollowCursor();
</script>

<template>
    <button
        ref="button"
        class="try-free bottom-28 right-12 flex h-40 w-40 items-center justify-center rounded-full bg-[#2E59E7] hover:brightness-75"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <span class="text-sm">{{ text.toUpperCase() }}</span>
    </button>
</template>

<style scoped lang="scss">
.try-free {
    position: absolute;
    transition: transform 0.1s ease;

    @media (max-width: 1023px) {
        bottom: 24px;
        width: 120px;
        height: 120px;
    }

    @media (max-width: 879px) {
        position: initial;
        border-radius: 10px;
        width: 100%;
        max-width: 276px;
        margin-bottom: 22px;
        height: initial;
        padding: 24px 0;
    }
}
</style>
