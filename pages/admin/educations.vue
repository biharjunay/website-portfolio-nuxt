<template>
  <div class="p-5">
    <h1 class="text-3xl">Educations</h1>
    <UCard class="mt-5 shadow-lg">
      <template #header>
        <div class="flex justify-end">
          <UButton>Add New</UButton>
        </div>
      </template>

      <UTable class="w-full" :ui="{td: {base: 'whitespace-pre-line'}, th: {base: 'text-nowrap'}}" :rows="educationsData" :loading="loading"></UTable>
    </UCard>
  </div>
</template>
<script setup lang="ts">
import {formatCamelCaseKeys} from "~/helpers";

definePageMeta({
  layout: "admin"
})

onMounted(() => {
  loadData()
})

const alertStore = useAlertStore()

const loading = ref<boolean>(false)
const educationsData = ref<Array<any>>([{}])

async function loadData() {
  try {
    loading.value = true
    const response = await $fetch("/api/educations")
    educationsData.value = formatCamelCaseKeys(response)
  } catch (e: any) {
    alertStore.addAlert(e.message, "danger")
  } finally {
    loading.value = false
  }
}
</script>