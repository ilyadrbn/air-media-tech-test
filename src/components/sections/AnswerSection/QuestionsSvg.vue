<script setup lang="ts">
import { useSvgPosition } from "@/composables/useSvgPosition";

const props = defineProps<{
    questions: Array<{ answer: string; description: string }>;
}>();

const svgProps: Array<{
    rectTransform: string;
    pathD: string;
}> = [
    {
        rectTransform: "translate(0.537842 0.352539)",
        pathD: "M193.876 257.632V321.997L129.511 321.997V257.632H65.1461V193.267H129.511V193.266H65.1461V128.902V128.901V64.5373H129.511V0.172577L193.876 0.172546V64.5373H258.241V128.902H322.602V193.267H258.241V257.632H193.876ZM65.1432 128.901V193.266H0.778078L0.778076 128.901H65.1432Z",
    },
    {
        rectTransform: "translate(0.845947 0.352539)",
        pathD: "M65.4513 257.631V321.996L1.08656 321.996L1.08656 257.631H65.4513ZM194.181 257.632V321.996L129.816 321.996V257.632H129.809V257.631H65.4545V193.267V193.266V128.902V128.902V64.5378H129.809V0.173553H194.174V64.5382V128.902V128.903V193.267H129.819V193.267H194.174V257.631H194.177L194.177 193.267H258.542V257.632H194.181ZM322.91 193.268V128.903L258.545 128.903V193.268H322.91ZM258.542 128.902V64.5383H194.177V128.902L194.177 128.903V193.267H258.542V128.903V128.902ZM65.4513 64.5382V0.173553H1.0865L1.0865 64.5382H65.4513ZM322.91 257.631V321.996L258.545 321.996V257.631H322.91ZM322.91 64.5382V0.173553H258.545V64.5382H322.91ZM65.4513 128.902V193.266H1.08656L1.08656 128.902H65.4513Z",
    },
    {
        rectTransform: "translate(0.154053 0.352539)",
        pathD: "M107.427 268.538L53.7907 322.174L0.153732 268.537L53.7888 214.902L53.7872 214.901L53.7892 214.899L0.153732 161.263L53.7888 107.628L53.7872 107.626L53.7892 107.624L0.153732 53.9889L53.7907 0.351898L107.428 53.9889L161.064 0.351898L214.701 53.9889L214.701 53.9893L268.338 107.626L214.701 161.263L214.701 161.263V161.264L268.338 214.901L214.701 268.537L214.701 268.538L161.064 322.174L107.427 268.538ZM107.426 53.9909L161.061 107.626L107.426 161.261L107.427 161.263L161.064 107.626L161.064 107.626V107.626L107.428 53.9889L107.426 53.9909ZM107.426 161.265L107.427 161.263L161.064 214.9V214.9L161.064 214.901L107.427 268.537L107.426 268.536L161.061 214.901L107.426 161.265ZM268.341 322.174L321.978 268.537L268.341 214.9L214.704 268.537L268.341 322.174ZM268.341 214.9L321.978 161.263L268.341 107.626L214.704 161.263L268.341 214.9ZM321.978 53.9889L268.341 107.626L214.704 53.9889L268.341 0.351898L321.978 53.9889Z",
    },
];

const {
    descriptionPos,
    innerContentHeight,
    isHovered,
    hoveredIndex,
    calculateDescriptionPos,
} = useSvgPosition();
</script>

<template>
    <div
        v-for="(svgData, index) in svgProps"
        :key="index"
        class="figure text-white transition-all duration-500"
        :style="{
            height:
                hoveredIndex === index
                    ? descriptionPos + innerContentHeight + 'px'
                    : descriptionPos * 2 + 'px',
        }"
        @mouseover="calculateDescriptionPos(index), (hoveredIndex = index)"
        @mouseleave="
            (isHovered = false), (innerContentHeight = 0), (hoveredIndex = null)
        "
    >
        <div class="relative">
            <h3
                class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl"
            >
                {{ props.questions[index].answer }}
            </h3>
            <svg
                viewBox="0 0 322 322"
                width="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g :clip-path="`url(#clip0_${index})`">
                    <rect
                        width="322"
                        height="322"
                        :transform="svgData.rectTransform"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        :d="svgData.pathD"
                        fill="black"
                        width="322"
                    />
                </g>
                <defs>
                    <clipPath :id="`clip0_${index}`">
                        <rect
                            width="322"
                            height="322"
                            fill="white"
                            :transform="svgData.rectTransform"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>

        <div
            class="inner-block relative left-[1px] max-h-0 w-[calc(100%-1px)] overflow-hidden bg-black pt-8 opacity-0 transition-all duration-500"
            :style="{
                top: -descriptionPos + 'px',
                minHeight: innerContentHeight + 'px',
            }"
        >
            <div class="description-block flex flex-col items-center p-8">
                <p class="mb-10 hidden text-center font-light">
                    {{ props.questions[index].description }}
                </p>
                <button class="rounded-xl bg-[#0B42FF] px-16 py-6 uppercase">
                    Start for free
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.figure {
    svg {
        width: 100%;
    }
    .inner-block {
        min-height: 0;
    }
    &:hover {
        .inner-block {
            opacity: 1;
            .description-block {
                position: absolute;
                p {
                    display: block;
                }
            }
        }
    }
}
</style>
