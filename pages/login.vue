<template>
    <div class="h-dvh flex justify-center items-center">
        <div class="bg-zinc-700 p-5 m-auto rounded-xl">
            <img src="@/assets/images/logo.png" alt="Logo"
                class="w-16 h-16 p-3 mx-auto -mt-16 mb-10 rounded-full bg-black">
            <form @submit.prevent="login" class="flex flex-col text-white">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="h-10 rounded px-3 mb-3 text-black"
                    v-model="body.email" required>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="h-10 rounded px-3 text-black"
                    v-model="body.password" required>
                <button type="submit"
                    class="bg-emerald-800 mt-5 rounded p-1 hover:bg-emerald-600 active:bg-emerald-900">Login</button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
const { fetch: refreshSession } = useUserSession()
definePageMeta({
    layout: "empty"
})

const body = reactive({
    email: '',
    password: ''
})

async function login() {
    try {
        await $fetch("/api/login", {
            method: "POST",
            body
        })
        await refreshSession()
        await navigateTo('/')
    } catch (err) {
        alert(err)
    }
}
</script>