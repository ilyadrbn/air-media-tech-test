import { onMounted, ref, type Ref } from "vue";

export function useSvgPosition() {
    const descriptionPos: Ref<number> = ref(0);
    const innerContentHeight: Ref<number> = ref(0);
    const isHovered: Ref<boolean> = ref(false);
    const hoveredIndex: Ref<number | null> = ref(null);

    const calculateDescriptionPos = (index: number) => {
        const figure = document.querySelectorAll(".figure svg")[index];
        const innerContent = document.querySelectorAll(
            ".inner-block .description-block",
        )[index];

        if (figure && innerContent) {
            isHovered.value = true;
            descriptionPos.value = figure.getBoundingClientRect().height / 2;
            innerContentHeight.value =
                innerContent.getBoundingClientRect().height + 28;
        }
    };
    onMounted(() => {
        calculateDescriptionPos(0);
    });

    return {
        descriptionPos,
        innerContentHeight,
        isHovered,
        hoveredIndex,
        calculateDescriptionPos,
    };
}
