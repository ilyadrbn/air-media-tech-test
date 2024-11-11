<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount } from "vue";
import { useCursorPosition } from "@/composables/useCursorPosition";

const { cursorX, cursorY, handleMouseMove } = useCursorPosition();

const cursorStyle = computed(() => {
    let styles: Record<string, string> = {
        left: `${cursorX.value}px`,
        top: `${cursorY.value}px`,
    };

    return styles;
});

onMounted(() => {
    document.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
    document.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
    <div
        :style="cursorStyle"
        class="custom-cursor pointer-events-none fixed z-[100] h-5 w-5 translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-[#2E59E7] transition-transform duration-300"
    ></div>
</template>

<style lang="scss" scoped>
@media (hover: none) {
    .custom-cursor {
        display: none;
    }
}
</style>
