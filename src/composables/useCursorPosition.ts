import { ref } from "vue";

export function useCursorPosition() {
    const cursorX = ref(0);
    const cursorY = ref(0);

    const handleMouseMove = (event: MouseEvent) => {
        cursorX.value = event.x;
        cursorY.value = event.y;
    };

    return {
        cursorX,
        cursorY,
        handleMouseMove,
    };
}
