<script setup lang="ts">
import PlayIcon from "../PlayIcon.vue";
</script>

<template>
    <section
        class="text-shadow-purple bg-black px-[72px] py-[128px] text-[140px] leading-[150px] text-white"
    >
        <h2>AI YouTube</h2>
        <div class="flex items-center gap-8">
            <button
                class="border-gradient relative flex h-fit items-center gap-3 overflow-hidden rounded-[10px] border-2 px-5 py-4 text-xl"
            >
                <span class="z-10">{{ "What is this ?".toUpperCase() }}</span>
                <PlayIcon class="z-10" />
            </button>
            <h2>Metadata</h2>
        </div>
        <div class="flex items-center gap-5">
            <h2>Translation</h2>
            <p
                class="relative top-4 w-[200px] text-lg font-light leading-[166%]"
            >
                Take Your YouTube Content Global by Localizing Your YouTube
                Metadata.
            </p>
        </div>
        <div class="animation"></div>
    </section>
</template>

<style scoped lang="scss">
.text-shadow-purple {
    text-shadow:
        0 0 83.62px rgba(171, 79, 252, 0.48),
        0 0 2.32px rgba(171, 79, 252, 0.48);
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
