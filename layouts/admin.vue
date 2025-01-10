<template>
    <div class="bg-[#f0f6f6] h-dvh text-black flex flex-col lg:flex-row">
        <div class="w-full lg:w-24 h-[10%] lg:h-full order-2 lg:order-1">
            <SidebarItemAdmin/>
        </div>
        <div class="w-full overflow-y-auto order-1 lg:order-2">
            <slot></slot>
        </div>
    </div>
</template>