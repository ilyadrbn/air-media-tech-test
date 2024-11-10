<script setup lang="ts">
import WaveNavLink from "./WaveNavLink.vue";

const navItems: Array<string> = [
    "About",
    "How it works",
    "Cases",
    "Pricing",
    "Faq",
];
</script>

<template>
    <nav>
        <ul class="ml-auto flex gap-6">
            <li v-for="item in navItems" :key="item" class="h-full list-none">
                <WaveNavLink :label="item" />
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
@media (max-width: 879px) {
    nav {
        ul {
            gap: 6px;
            height: 100%;
        }
    }
}
</style>
