<script setup lang="ts">
import TransparentButton from "../TransparentButton.vue";
import LineAnimation from "../LineAnimation.vue";
</script>

<template>
    <section
        ref="dynamicBlock"
        class="text-shadow-purple relative overflow-hidden bg-black px-24 py-[128px] text-[140px] leading-[150px] text-white"
    >
        <h2>AI YouTube</h2>
        <div class="flex items-center gap-8">
            <TransparentButton />
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
        <LineAnimation />
    </section>
</template>

<style scoped lang="scss">
section > * {
    position: relative;
    z-index: 10;
}
.text-shadow-purple {
    text-shadow:
        0 0 83.62px rgba(171, 79, 252, 0.48),
        0 0 2.32px rgba(171, 79, 252, 0.48);
}
</style>
