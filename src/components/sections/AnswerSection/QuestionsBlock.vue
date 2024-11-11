<script setup lang="ts">
import QuestionsSvg from "./QuestionsSvg.vue";

const questions: Array<{ answer: string; description: string }> = [
    {
        answer: "Partially",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia animi libero suscipit earum, facere velit voluptatibus dolores iste nam odit.",
    },
    {
        answer: "Yes",
        description:
            "Awesome! Localizing your YouTube metadata is a perfect choice for you. Let's translate your video titles, descriptions, and tags, so people from all around the globe can discover your content.",
    },
    {
        answer: "No",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam excepturi nemo inventore culpa, ullam, neque blanditiis nulla, natus libero adipisci facere aliquam est ea soluta!",
    },
];
</script>

<template>
    <div class="flex gap-14">
        <QuestionsSvg :questions />
    </div>
</template>

<style scoped lang="scss">
div {
    @media (max-width: 879px) {
        flex-direction: column;
    }
}
</style>
