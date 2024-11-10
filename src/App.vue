<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GreetingSection from "@/components/sections/GreetingSection/GreetingSection.vue";
import AnswerSection from "./components/sections/AnswerSection/AnswerSection.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
    <CustomCursor />
    <default-layout>
        <GreetingSection />
        <AnswerSection />
    </default-layout>
</template>
