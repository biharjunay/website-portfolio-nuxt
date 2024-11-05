<template>
    <div class="flex flex-col lg:flex-row h-dvh text-white bg-gradient-to-br from-slate-900 to-zinc-950 relative">
        <div class="w-full h-[10%] lg:w-[10%] lg:h-full order-2 lg:order-1">
            <SidebarItem />
        </div>
        <div class="w-full lg:w-[90%] px-3 py-5 h-full overflow-auto order-1 lg:order-2">
            <slot />
        </div>
    </div>
</template>