<script setup lang="ts">
defineProps<{ navItems: Array<string> }>();
</script>

<template>
    <nav class="ml-auto flex gap-6">
        <li v-for="item in navItems" :key="item" class="list-none">
            <a
                href="#"
                class="nav__link whitespace-nowrap text-xs uppercase text-white no-underline transition-colors duration-200 hover:text-gray-400"
                >{{ item.toUpperCase() }}</a
            >
        </li>
    </nav>
</template>

<style scoped lang="scss">
@media (max-width: 1024px) {
    nav {
        margin-right: 20px;
        margin-left: 20px;
    }
}
@media (max-width: 840px) {
    nav {
        gap: 6px;
        li {
            a {
                border-radius: 60px;
                border: 1px solid white;
                padding: 10px;
                &:hover {
                    border-color: #9ca3af;
                }
            }
        }
    }
}
</style>
