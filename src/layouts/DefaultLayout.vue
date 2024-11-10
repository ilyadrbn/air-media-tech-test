<script setup lang="ts">
import MainHeader from "@/components/header/HeaderComponent.vue";
</script>

<template>
    <div class="main-wrapper min-h-screen">
        <MainHeader />
        <slot />
    </div>
</template>

<style scoped lang="scss"></style>
