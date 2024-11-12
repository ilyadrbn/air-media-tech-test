<script setup lang="ts">
const descriptions = [
    {
        title: "Connect Your Channel",
        description:
            "Link your channel to AIR Media-Tech with just a few clicks. It's an ultimate space for creators with over 30 tailored services, including AI Metadata translation.",
    },
    {
        title: "Get Translations",
        description:
            "AI Metadata Translation analyzes your channel, generates translations in minutes, and adds them to your channel automatically.",
    },
    {
        title: "Monitor Growth",
        description:
            "Watch your channel's global views grow! After adding metadata in new languages, you’ll see your content reaching new countries along with boosting your income.",
    },
];
</script>

<template>
    <div
        v-for="(description, index) in descriptions.length"
        :key="description"
        class="description-block mb-24 flex flex-col items-end gap-8 pl-14 pr-16 text-end"
    >
        <span
            class="number flex h-2 w-2 items-center justify-center rounded-full border-[2px] border-black p-6 px-6 font-bold"
        >
            {{ index + 1 }}
        </span>
        <h3 class="text-[4vw] font-bold leading-[125%]">
            {{ descriptions[index].title }}
        </h3>
        <p class="text-[18px] font-light">
            {{ descriptions[index].description }}
        </p>
    </div>
</template>

<style scoped lang="scss">
@media (max-width: 879px) {
    .description-block {
        margin: 0;
        border-radius: 30px;
        border: 2px solid black;
        padding: 60px 30px;
        align-items: flex-start;
        min-height: 400px;
        width: 400px;
        max-width: calc(100vw - 4rem);
    }
}
</style>
