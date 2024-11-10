<script setup lang="ts">
import MetadataLogo from "../MetadataLogo.vue";
import MediatechLogo from "../MediatechLogo.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
import HeaderWaveButton from "../WaveButton.vue";

const navItems: Array<string> = [
    "About",
    "How it works",
    "Cases",
    "Pricing",
    "Faq",
];
</script>

<template>
    <header
        id="header"
        class="sticky top-0 flex min-w-full items-center justify-between bg-black px-20 py-4 border-b border-b-[#4E4E4E]"
    >
        <div class="flex h-[42px] items-center gap-4">
            <MetadataLogo />
            <div class="divider"></div>
            <MediatechLogo />
        </div>

        <HeaderNavbar :nav-items />

        <div class="auth-methods auth flex h-14 gap-6">
            <button
                class="relative cursor-pointer overflow-hidden bg-black text-base text-white transition-colors duration-200 hover:text-gray-400"
                @click.prevent
            >
                {{ "Login".toUpperCase() }}
            </button>
            <HeaderWaveButton btn-text="sign up" />
        </div>
    </header>
</template>

<style scoped lang="scss">
#header {
    .divider {
        height: 100%;
        &::after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            background-color: #414141;
        }
    }
}
</style>
