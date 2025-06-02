<template>
    <div class="content">
        <slot />
    </div>
    <div id="morph">
        <!-- <div class="blob blob-1"></div> -->
        <div class="blob blob-2" ref="mouseBlob"></div>
        <!-- <div class="blob blob-3"></div> -->
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const loadedTIme = 1000
const mouseBlob = ref<HTMLDivElement | null>(null)

function handleMouseMove(e: MouseEvent) {
    if (mouseBlob.value) {
        // mouseBlob.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        mouseBlob.value.style.left = `${e.clientX}px`
        mouseBlob.value.style.top = `${e.clientY}px`
    }
}

function onFirstLoad() {
    const morph = document.getElementById("morph")!
    setTimeout(() => {
        morph.style.opacity = '1'
    }, loadedTIme);

}

onMounted(() => {
    onFirstLoad()
    window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<!-- <style scoped>
/* Fullscreen animated gradient background */
#morph {
    opacity: 0;
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    background: linear-gradient(
      -45deg,
      #150b2a,
      #140c22,
      #082324,
      #301361
    );
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    transition: all .3s ease;
}

/* Slot content */
.content {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
}

/* Animated blobs */
.blob {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle at center, rgb(90, 14, 14), transparent);
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    mix-blend-mode: screen;
    transition: transform 0.1s ease-out;
}

.blob-1 {
    top: 10%;
    left: 20%;
    animation: float 12s ease-in-out infinite;
}

.blob-2 {
    width: 300px;
    height: 300px;
    transition: transform 0.05s ease-out;
    transform: translate(-50%, -50%);
}

.blob-3 {
    bottom: 10%;
    right: 15%;
    animation: float 10s ease-in-out infinite reverse;
}

/* Gradient background animation */
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* Blob float animation */
@keyframes float {
    0%, 100% {
        transform: translateY(0px) scale(1);
    }
    50% {
        transform: translateY(-200px) scale(2);
    }
}
</style> -->
