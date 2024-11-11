<script setup lang="ts">
import { ref } from "vue";
import TransparentButton from "./TransparentButton.vue";
import LineAnimation from "./LineAnimation.vue";
import BigBlueButton from "./BigBlueButton.vue";

const isSmallScreen = ref(window.innerWidth <= 879);

window.addEventListener("resize", () => {
    isSmallScreen.value = window.innerWidth <= 879;
});
</script>

<template>
    <section
        ref="dynamicBlock"
        class="text-shadow-purple dark relative overflow-hidden bg-black px-20 py-32 pb-60 text-9xl leading-[150px] text-white lg:text-[140px]"
    >
        <h2>AI YouTube</h2>
        <div class="flex items-center gap-8">
            <TransparentButton v-if="!isSmallScreen" />
            <h2>Metadata</h2>
        </div>
        <div class="description flex items-center gap-5">
            <h2>Translation</h2>
            <p
                class="relative top-4 w-[200px] text-lg font-light leading-[166%]"
            >
                Take Your YouTube Content Global by Localizing Your YouTube
                Metadata.
            </p>
        </div>
        <BigBlueButton text="Try for free" />
        <TransparentButton v-if="isSmallScreen" />
        <LineAnimation />
    </section>
</template>

<style scoped lang="scss">
section {
    & > * {
        position: relative;
        z-index: 10;
    }
    @media (max-width: 1023px) {
        padding: 8rem 2rem;
    }
    @media (max-width: 879px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            text-align: center;
            line-height: 100%;
        }

        .description {
            flex-direction: column;
            gap: 48px;
            margin-bottom: 16px;

            p {
                width: auto;
                top: initial;
            }
        }
    }
}
@media (max-width: 640px) {
    h2 {
        font-size: 64px;
    }
    p {
        text-align: center;
    }
}
@media (max-width: 480px) {
    h2 {
        font-size: 48px;
    }
}
.text-shadow-purple {
    text-shadow:
        0 0 83.62px rgba(171, 79, 252, 0.48),
        0 0 2.32px rgba(171, 79, 252, 0.48);
}
</style>
