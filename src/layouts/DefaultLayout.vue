<script setup lang="ts">
import HeaderMain from "@/components/header/Header.vue";
</script>

<template>
    <div class="main-wrapper min-h-screen">
        <HeaderMain />
        <slot />
    </div>
</template>

<style scoped lang="scss"></style>
