<script setup lang="ts">
import LoudSpeaker from "./LoudSpeaker.vue";
import StepsComponent from "./StepsComponent.vue";
import ArrowDown from "./ArrowDown.vue";
import QuestionsBlock from "./QuestionsBlock.vue";
</script>

<template>
    <section class="flex flex-col items-center overflow-hidden bg-white">
        <StepsComponent />
        <LoudSpeaker />
        <h2>Are your videos understandable without voice narration?</h2>
        <p>Choose answer</p>
        <ArrowDown />
        <QuestionsBlock />
    </section>
</template>

<style scoped lang="scss"></style>
