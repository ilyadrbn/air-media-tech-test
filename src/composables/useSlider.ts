import { ref } from "vue";

const startX = ref(0);
const scrollLeft = ref(0);

export const useSlider = () => {
    const startTouch = (e: TouchEvent) => {
        startX.value = e.touches[0].clientX;
        if (e.currentTarget instanceof HTMLElement)
            scrollLeft.value = e.currentTarget.scrollLeft;
    };

    const moveTouch = (e: TouchEvent) => {
        const x = e.touches[0].clientX;
        if (e.currentTarget instanceof HTMLElement) {
            const walk = (x - startX.value) * 2;
            e.currentTarget.scrollLeft = scrollLeft.value - walk;
        }
    };

    return { startTouch, moveTouch };
};
