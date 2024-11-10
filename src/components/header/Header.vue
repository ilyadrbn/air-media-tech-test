<script setup lang="ts">
import MetadataLogo from "./MetadataLogo.vue";
import MediatechLogo from "./MediatechLogo.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
import WaveButton from "./WaveButton.vue";
import LoginButton from "./LoginButton.vue";

import { useSlider } from "@/composables/useSlider";

const { startTouch, moveTouch } = useSlider();
</script>

<template>
    <header
        id="header"
        class="sticky top-0 z-50 flex min-w-full items-center justify-between border-b border-b-[#4E4E4E] bg-black px-20 py-4"
    >
        <div class="flex h-full gap-4">
            <MetadataLogo />
            <div class="divider hidden lg:block"></div>
            <MediatechLogo />
        </div>

        <div
            class="slider-menu flex items-center gap-24"
            @touchstart.passive="startTouch"
            @touchmove.passive="moveTouch"
        >
            <HeaderNavbar />
            <div class="auth-methods auth flex h-14 gap-6">
                <LoginButton />
                <WaveButton btn-text="sign up" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
#header {
    .divider {
        &::after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            background-color: #414141;
        }
    }

    @media (max-width: 1023px) {
        padding: 1rem 2rem;
        gap: 20px;
    }

    @media (max-width: 879px) {
        border: none;

        .slider-menu {
            gap: 24px;
            overflow: hidden;
            align-items: initial;

            .auth-methods {
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
}
</style>
