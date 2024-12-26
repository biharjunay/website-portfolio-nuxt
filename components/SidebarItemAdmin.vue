<template>
    <div class="px-1 py-3 flex flex-col items-center h-full justify-between gap-3">
        <div class="flex flex-col gap-10">
            <img class="w-14 hidden lg:block" src="@/assets/images/logo-black.png" alt="image">
            <div class="flex flex-col gap-4 items-center">
                <NuxtLink to="" class="bg-white w-10 h-10 text-center flex justify-center items-center rounded-full cursor-pointer hover:text-white hover:bg-black"
                    v-for="item in sidebarItem">
                    <i class="text-lg m-auto" :class="item.icon"></i>
                </NuxtLink>
            </div>
        </div>
        <NuxtLink to="" class="bg-white w-10 h-10 text-center flex justify-center items-center rounded-full cursor-pointer hover:text-white hover:bg-black">
            <i class="fa fa-sign-out"></i>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const sidebarItem = ref<Array<{ icon: string, name: string }>>([
    { icon: 'fa-solid fa-objects-column', name: 'home' },
    { icon: 'fas fa-user', name: 'about' },
    { icon: 'fas fa-briefcase', name: 'portfolio' },
    { icon: 'fas fa-phone', name: 'contact' },
    { icon: 'fas fa-ellipsis-h', name: 'other' },
])
</script>