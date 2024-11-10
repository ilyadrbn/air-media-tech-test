<script setup lang="ts">
import PlayIcon from "./PlayIcon.vue";
</script>

<template>
    <button
        class="border-gradient relative flex h-fit items-center gap-3 overflow-hidden rounded-[10px] border-2 px-5 py-4 text-xl"
    >
        <span class="z-10">{{ "What is this ?".toUpperCase() }}</span>
        <PlayIcon class="z-10" />
    </button>
</template>

<style scoped lang="scss">
.border-gradient {
    border-radius: 12px;
    background: linear-gradient(
        30deg,
        #ffffff 0%,
        #fd86ff 25%,
        #8bff78 50%,
        #3858ff 75%,
        #ffffff 100%
    );
    border-style: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background: black;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        z-index: 0;
    }
}
</style>
