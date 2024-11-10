<script setup lang="ts">
import PlayIcon from "./PlayIcon.vue";
</script>

<template>
    <button
        class="border-gradient relative flex h-fit transform items-center gap-3 overflow-hidden rounded-[10px] border-2 px-5 py-4 text-xl transition-all duration-300 hover:scale-110"
    >
        <span class="z-10">{{ "What is this ?".toUpperCase() }}</span>
        <PlayIcon class="z-10" />
    </button>
</template>

<style scoped lang="scss">
@keyframes gradient {
    0% {
        background-position: 0% 100%;
    }
    25% {
        background-position: 25% 75%;
    }
    50% {
        background-position: 50% 50%;
    }
    75% {
        background-position: 75% 25%;
    }
    100% {
        background-position: 100% 0%;
    }
}
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
    background-size: 200% 200%;

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

    &:hover {
        animation: gradient 1.5s ease infinite;
    }

    @media (max-width: 879px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        background: white;
        position: initial;
        border-radius: 10px;
        width: 100%;
        max-width: 276px;
        margin-bottom: 22px;
        height: initial;
    }
}
</style>
