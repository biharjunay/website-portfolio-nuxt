<template>
  <Transition>
    <div v-if="isVisible" class="fixed inset-0 bg-zinc-900 bg-opacity-75 z-50 h-dvh overflow-auto p-3"
      @click.self="closeModal">
      <div :style="modalStyle" class="bg-white p-6 rounded-lg shadow-lg w-full text-black m-auto">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const modalSize = ref('lg') // Default to 'sm'
const emit = defineEmits(['close'])
const isVisible = ref(false)

defineExpose({
  openModal, closeModal
})

const props = defineProps<{
  size?: string
}>()

onBeforeMount(() => {
  if (props.size) modalSize.value = props.size
  console.log(modalSize.value)
})

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown)

  // Use props.size to set modalSize if it exists
  if (props.size) {
    modalSize.value = props.size
  }
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown)
})

function handleKeyDown(e: KeyboardEvent) {
  e.key === "Escape" && closeModal()
}

function openModal(): void {
  isVisible.value = true
}

function closeModal(): void {
  isVisible.value = false
}

// Computed style based on modalSize value
const modalStyle = computed(() => {
  console.log(modalSize.value)
  return {
    'max-width': modalSize.value === 'sm' ? '640px' :
      modalSize.value === 'md' ? '768px' :
        modalSize.value === 'lg' ? '1024px' : '100%'
  }
})
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;

  div {
    transform: translateY(-2rem);
    transition: all .3s ease;
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: all .5s ease;
}

.v-enter-to,
.v-leave-from {
  div {
    transform: translateX(0);
    transition: all .3s ease;
  }
}
</style>