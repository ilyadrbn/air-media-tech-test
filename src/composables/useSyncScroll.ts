import { type Ref } from "vue";
import gsap from "gsap";

interface UseScrollSyncOptions {
    duration?: number;
    ease?: string;
}

export function useSyncScroll(
    sectionRef: Ref<HTMLElement | null>,
    sliderRef: Ref<HTMLElement | null>,
    options: UseScrollSyncOptions,
) {
    const handleScroll = () => {
        if (sectionRef.value && sliderRef.value) {
            const scrollPercent =
                sectionRef.value.scrollTop /
                (sectionRef.value.scrollHeight - sectionRef.value.clientHeight);

            const targetScrollTop =
                scrollPercent *
                (sliderRef.value.scrollHeight - sliderRef.value.clientHeight);

            gsap.to(sliderRef.value, {
                scrollTop: targetScrollTop,
                duration: options.duration,
                ease: options.ease,
            });
        }
    };

    return {
        handleScroll,
    };
}
