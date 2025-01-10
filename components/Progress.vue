<template>
    <div class="w-full h-3 rounded-full bg-gray-200">
        <div class="h-full rounded-full bg-blue-500" :style="{ width: `${progress}%` }"></div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    progress: {
        type: Number,
        required: true
    },
})
</script>