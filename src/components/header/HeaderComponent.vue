<script setup lang="ts">
import MetadataLogo from "../MetadataLogo.vue";
import MediatechLogo from "../MediatechLogo.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
import HeaderWaveButton from "../WaveButton.vue";
import { useSlider } from "@/composables/useSlider";

const { startTouch, moveTouch } = useSlider();

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
        class="sticky top-0 flex min-w-full items-center justify-between border-b border-b-[#4E4E4E] bg-black px-20 py-4"
    >
        <div class="flex h-[42px] items-center gap-4">
            <MetadataLogo />
            <div class="divider"></div>
            <MediatechLogo />
        </div>

        <div
            class="slider-menu flex items-center gap-16"
            @touchstart="startTouch"
            @touchmove="moveTouch"
        >
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
    @media (max-width: 1024px) {
        padding: 28px 24px;
        .divider {
            display: none;
        }
    }
}
@media (max-width: 840px) {
    #header {
        gap: 20px;
    }
    .slider-menu {
        gap: 6px;
        max-width: 540px;
        overflow: hidden;
        height: 40px;
        .auth-methods {
            height: auto;
            gap: 6px;
            button {
                border-radius: 60px;
                border: 1px solid white;
                padding: 10px;
                font-size: 0.75rem;
                line-height: 1rem;
                &:hover {
                    border-color: #9ca3af;
                }
            }
        }
        nav {
            margin: initial;
        }
    }
}
@media (max-width: 640px) {
    #header {
        border: none;
        .divider {
            display: none;
        }
    }
}
</style>
