<template>sdafasdfas</template>
<script setup lang="ts">
const { loggedIn, user, session, fetch, clear } = useUserSession()
onMounted(() => {
    console.log(loggedIn.value)
    navigateTo('/about')
})
</script>