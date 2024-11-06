<script setup lang="ts">
defineProps<{ navItems: Array<string> }>();
</script>

<template>
    <nav class="ml-auto mr-24 flex gap-6">
        <li v-for="item in navItems" :key="item" class="list-none">
            <a
                href="#"
                class="nav__link text-xs uppercase text-white no-underline transition-colors duration-200 hover:text-gray-400"
                >{{ item.toUpperCase() }}</a
            >
        </li>
    </nav>
</template>
