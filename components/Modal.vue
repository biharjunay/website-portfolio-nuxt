<template>
    <Transition>
        <div v-if="isVisible" class="fixed inset-0 bg-zinc-900 bg-opacity-75 flex justify-center items-center z-50"
            @click.self="closeModal">
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">

defineExpose({
    openModal, closeModal
})
const isVisible = ref(false)

function openModal(): void {
    isVisible.value = true
}

function closeModal(): void {
    isVisible.value = false
}
</script>

<style scoped lang="scss">
.v-enter-active, .v-leave-active {
  transition: all 0.5s ease;

  div {
    transform: translateY(-2rem);
    transition: all .3s ease;
  }
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transition: all .5s ease;
}

.v-enter-to, .v-leave-from {
    div {
        transform: translateX(0);
        transition: all .3s ease;
    }
}
</style>