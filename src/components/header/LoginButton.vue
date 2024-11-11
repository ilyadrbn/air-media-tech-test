<script setup lang="ts">
defineProps<{
    currentTheme: { background: string; text: string; icon: string };
}>();
</script>

<template>
    <button
        class="relative cursor-pointer overflow-hidden text-base uppercase transition-colors duration-200 hover:text-gray-400"
        :class="currentTheme.text"
        @click.prevent
    >
        Login
    </button>
</template>
