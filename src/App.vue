<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GreetingSection from "@/components/sections/GreetingSection.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
    <CustomCursor />
    <default-layout>
        <GreetingSection />
    </default-layout>
</template>
