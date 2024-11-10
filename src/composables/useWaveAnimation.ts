import { gsap } from "gsap";
import { ref } from "vue";

const isHovered = ref(false);

interface ICoord {
    x: number;
    y: number;
}

function getMousePosition(event: MouseEvent, element: HTMLElement): ICoord {
    const rect = element.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function getWaveElement(button: HTMLButtonElement): HTMLElement | null {
    return button.querySelector(".wave-effect");
}

function useEnableWave(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    if (!button) return;

    isHovered.value = true;

    const wave = getWaveElement(button);
    if (!wave) return;

    gsap.set(wave, { scale: 0, x: 0, y: 0 });

    const { x, y } = getMousePosition(event, button);
    gsap.fromTo(
        wave,
        {
            x: x - button.offsetWidth / 2,
            y: y - button.offsetHeight / 2,
            scale: 0,
        },
        {
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
        },
    );
}

function useRemoveWave(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    if (!button) return;

    const wave = getWaveElement(button);
    if (!wave) return;

    const { x, y } = getMousePosition(event, button);

    gsap.to(wave, {
        x: x - button.offsetWidth / 2,
        y: y - button.offsetHeight / 2,
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
        onStart: () => {
            isHovered.value = false;
        },
    });
}

export { useEnableWave, useRemoveWave, isHovered };
