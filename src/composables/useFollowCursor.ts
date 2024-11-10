import { ref, onMounted } from "vue";

export function useFollowCursor(maxDistance = 10, smoothing = 0.1) {
    const currentX = ref(0);
    const currentY = ref(0);
    const targetX = ref(0);
    const targetY = ref(0);

    const button = ref<HTMLElement | null>(null);

    const handleMouseMove = (event: MouseEvent) => {
        if (!button.value) return;

        const rect = button.value.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        targetX.value = Math.min(Math.max(offsetX, -maxDistance), maxDistance);
        targetY.value = Math.min(Math.max(offsetY, -maxDistance), maxDistance);
    };

    const handleMouseEnter = () => {
        if (button.value) {
            button.value.style.transition = "transform 0.1s ease";
        }
    };

    const handleMouseLeave = () => {
        if (button.value) {
            button.value.style.transition = "transform 0.1s ease";
            button.value.style.transform = "translate(0, 0)";
        }
    };

    const updatePosition = () => {
        if (!button.value) return;

        currentX.value += (targetX.value - currentX.value) * smoothing;
        currentY.value += (targetY.value - currentY.value) * smoothing;

        button.value.style.transform = `translate(${currentX.value}px, ${currentY.value}px)`;

        requestAnimationFrame(updatePosition);
    };

    onMounted(() => {
        updatePosition();
    });

    return { button, handleMouseMove, handleMouseEnter, handleMouseLeave };
}
