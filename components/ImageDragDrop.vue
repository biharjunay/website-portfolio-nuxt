<template>
    <div class="drag-drop-container">
        <div class="drop-area" @dragover.prevent="onDragOver" @dragleave="onDragLeave" @drop.prevent="onDrop" @click="fileInput?.click">
            <p ref="text" class="text-black m-5 absolute" v-if="!imageSrc">Drag & drop an image here or click to upload</p>
            <input type="file" accept="image/*" @change="onFileChange" ref="fileInput" hidden />
            <img v-if="imageSrc" :src="imageSrc" alt="Preview" class="preview" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fileInput = useTemplateRef("fileInput")
const text = useTemplateRef("text")
const imageSrc = ref<string | null>(null);
const emit = defineEmits(['onChange'])

const props = defineProps({
  imageUrl: {
    type: String,
  }
})

onMounted(() => {
  if (props.imageUrl) imageSrc.value = props.imageUrl
})

function onDragOver(event: DragEvent) {
    event.target && (event.target as HTMLElement).classList.add("drag-over");
    text.value!.style.display = "none"
}
function onDragLeave(event: DragEvent) {
    event.target && (event.target as HTMLElement).classList.remove("drag-over");
    text.value!.style.display = "block"
}
function onDrop(event: DragEvent) {
    (event.target as HTMLElement).classList.remove("drag-over");
    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith("image/")) {
        loadImage(file);
    } else {
        alert("Please drop a valid image file.");
    }
}
function onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type.startsWith("image/")) {
        loadImage(file);
    } else {
        alert("Please select a valid image file.");
    }
}
function loadImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imageSrc.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
    emit("onChange", file)
}
</script>

<style scoped>
.drag-drop-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.drop-area {
    border: 2px dashed #ccc;
    border-radius: 8px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    position: relative;
    padding: 10px;
}

.drop-area.drag-over {
    background-color: #e0f7fa;
    border-color: #26c6da;
}

.preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
</style>