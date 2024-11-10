import { gsap } from "gsap";

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

function getWaveElement(
    button: HTMLButtonElement | HTMLLinkElement,
): HTMLElement | HTMLLinkElement | null {
    return button.querySelector(".wave-effect");
}

function useEnableWave(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement | HTMLLinkElement;
    const wave = getWaveElement(button);
    if (!button || !wave) return;

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
    const wave = getWaveElement(button);
    if (!button || !wave) return;

    const { x, y } = getMousePosition(event, button);
    gsap.to(wave, {
        x: x - button.offsetWidth / 2,
        y: y - button.offsetHeight / 2,
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
    });
}

export { useEnableWave, useRemoveWave };
