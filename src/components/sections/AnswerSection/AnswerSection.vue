<script setup lang="ts">
import LoudSpeaker from "./LoudSpeaker.vue";
import StepsComponent from "./StepsComponent.vue";
import ArrowDown from "./ArrowDown.vue";
import QuestionsBlock from "./QuestionsBlock.vue";
</script>

<template>
    <section
        class="flex flex-col items-center overflow-hidden bg-white px-36 pb-44"
    >
        <StepsComponent />
        <LoudSpeaker />
        <h2 class="mb-16 text-center text-[6vw] font-semibold leading-[100%]">
            Are your videos understandable without voice narration?
        </h2>
        <p class="text-center text-[4vw] font-semibold">Choose answer</p>
        <ArrowDown />
        <QuestionsBlock />
    </section>
</template>

<style scoped lang="scss">
section {
    @media (max-width: 1023px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
</style>
