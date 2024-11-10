import { ref } from "vue";

export function useCursorPosition() {
    const cursorX = ref(0);
    const cursorY = ref(0);

    const handleMouseMove = (event: MouseEvent) => {
        cursorX.value = event.pageX;
        cursorY.value = event.pageY;
    };

    return {
        cursorX,
        cursorY,
        handleMouseMove,
    };
}
