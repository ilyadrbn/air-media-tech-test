import { ref, onMounted, onUnmounted } from "vue";

export function useTheme() {
    const themes = {
        light: {
            background: "bg-white",
            text: "text-black",
            icon: "#000000",
        },
        dark: {
            background: "bg-black",
            text: "text-white",
            icon: "#ffffff",
        },
    };

    const currentTheme = ref(themes["dark"]);

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("light")) {
                        currentTheme.value = themes["light"];
                    } else {
                        currentTheme.value = themes["dark"];
                    }
                }
            });
        },
        {
            rootMargin: "0px 0px -50% 0px",
        },
    );

    onMounted(() => {
        document
            .querySelectorAll("section")
            .forEach((section) => sectionObserver.observe(section));
    });

    onUnmounted(() => {
        sectionObserver.disconnect();
    });

    return { currentTheme };
}
