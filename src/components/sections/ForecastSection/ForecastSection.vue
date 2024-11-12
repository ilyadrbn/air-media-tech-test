<script setup lang="ts">
import { ref, type Ref, defineEmits } from "vue";

const isHovered: Ref<boolean> = ref(false);

const forecastHovered = () => {
    isHovered.value = true;
    emit("hover", isHovered.value);
};
const forecastNotHovered = () => {
    isHovered.value = false;
    emit("hover", isHovered.value);
};

const emit = defineEmits(["hover"]);
</script>

<template>
    <section
        class="dark flex flex-col items-center bg-white px-64 pb-72 pt-32 text-center text-white"
        @mouseenter="forecastHovered"
        @mouseleave="forecastNotHovered"
    >
        <h2 class="mb-8 text-[7vw] leading-[125%]">
            Still Not Sure What Results Can You Expect?
        </h2>
        <p class="w-2/3 text-xl font-light leading-[200%]">
            Find out how many views AI Metadata Translation can bring to your
            channel, and how much time it saves!
        </p>
        <button
            class="mt-9 hidden rounded-lg bg-[#0B42FF] px-20 py-6 uppercase"
        >
            read more
        </button>
    </section>
</template>

<style scoped lang="scss">
section {
    background-image: url("/public/forecast-bg.png");
    background-size: cover;
    background-position: center;

    &:hover {
        cursor: none;
    }

    @media (max-width: 879px) {
        padding-left: 1rem;
        padding-right: 1rem;
        button {
            display: block;
        }
    }
}
</style>
