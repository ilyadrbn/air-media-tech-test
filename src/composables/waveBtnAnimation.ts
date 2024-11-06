import { gsap } from "gsap";
import { ref } from "vue";
const isHovered = ref(false);

function getMousePosition(event: MouseEvent, element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function animateWave(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;

    if (!button) return;
    isHovered.value = true;

    const wave = button.querySelector(".wave-effect");
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

function removeWave(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;

    if (!button) return;

    const wave = button.querySelector(".wave-effect");

    gsap.to(wave, {
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
        onStart: () => {
            isHovered.value = false;
        },
    });
}

export { animateWave, removeWave, isHovered };
