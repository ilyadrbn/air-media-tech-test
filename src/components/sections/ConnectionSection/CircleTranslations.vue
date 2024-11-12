<template>
    <div class="translations flex flex-col items-center gap-[40px] pl-[160px]">
        <div
            v-for="i in 3"
            :key="i"
            class="relative left-6 flex max-h-32 flex-row-reverse items-center gap-6 rounded-3xl border-[2px] border-white p-6 text-white bg-black"
        >
            <img
                src="@/assets/images/profile.png"
                alt="profile-photo"
                class="max-h-[80px] rounded-xl"
            />
            <p class="text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus, excepturi.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.translations {
    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
