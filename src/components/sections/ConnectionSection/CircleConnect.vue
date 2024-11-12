<template>
    <div class="connect relative flex h-full items-center justify-center p-3">
        <span class="text-[100px] text-white">+</span>
        <div
            class="img-block absolute right-0 top-0 h-[158px] w-[158px] -translate-y-1/4 translate-x-1/4 transform overflow-hidden rounded-full border-[4px] border-solid border-white"
        >
            <img src="@/assets/images/dance.png" alt="dance" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.connect {
    width: 260px;
    height: 260px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='999' ry='999' stroke='white' stroke-width='6' stroke-dasharray='2%2c 17' stroke-dashoffset='5' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 999px;
}
</style>
