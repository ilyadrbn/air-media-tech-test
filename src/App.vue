<script setup lang="ts">
import { ref, type Ref } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GreetingSection from "@/components/sections/GreetingSection/GreetingSection.vue";
import AnswerSection from "./components/sections/AnswerSection/AnswerSection.vue";
import ForecastSection from "./components/sections/ForecastSection/ForecastSection.vue";
import ConnectionSection from "./components/sections/ConnectionSection/ConnectionSection.vue";
import CustomCursor from "./components/CustomCursor.vue";

const hoverState: Ref<boolean> = ref(false);

const handleHover = (state: boolean) => {
    hoverState.value = state;
};
</script>

<template>
    <CustomCursor :hover-state />
    <default-layout>
        <GreetingSection />
        <AnswerSection />
        <ForecastSection @hover="handleHover" />
        <ConnectionSection />
    </default-layout>
</template>
