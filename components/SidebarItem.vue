<template>
    <div class="flex flex-row lg:flex-col items-center h-full">
        <img class="w-14 my-5 mx-3 hidden lg:block" src="@/assets/images/logo.png" alt="image">
        <div
            class="flex lg:flex-col justify-between lg:justify-start h-full w-full text-white py-5 px-5 md:px-10 lg:px-0">
            <NuxtLink :to="`/${item.name}`"
                class="flex flex-col justify-center text-center relative py-3 cursor-pointer hover:text-blue-600 transition-all"
                :class="{ 'text-blue-400': route.name === item.name }" v-for="(item, index) in sidebarItem"
                :key="index">
                <i :class="item.icon + ' text-2xl'"></i>
                <div v-if="route.name === item.name"
                    class="hidden lg:block absolute w-1 h-full bg-blue-400 rounded-full right-0 top-1/2 -translate-y-1/2">
                </div>
            </NuxtLink>
            <AuthState v-slot="{ loggedIn, clear }">
                <a class="flex flex-col justify-center text-center relative py-3 cursor-pointer hover:text-blue-600 transition-all" @click="clear" v-if="loggedIn">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </AuthState>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const sidebarItem = ref<Array<{ icon: string, name: string }>>([
    { icon: 'fas fa-house', name: 'home' },
    { icon: 'fas fa-user', name: 'about' },
    { icon: 'fas fa-briefcase', name: 'portfolio' },
    { icon: 'fas fa-phone', name: 'contact' },
    { icon: 'fas fa-ellipsis-h', name: 'other' },
])
</script>