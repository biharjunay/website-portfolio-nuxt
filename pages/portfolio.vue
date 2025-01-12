<template>
  <div class="min-h-screen p-5">
    <div class="flex justify-between items-center">
      <h1
        class="poppins-bold text-3xl bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text mb-0">
        My Portfolio</h1>
      <AuthState v-slot="{ loggedIn }">
        <button class="bg-slate-500 rounded hover:bg-slate-600 active:bg-slate-700 py-1 px-3" @click="addPortfolio"
          v-if="loggedIn">
          <i class="fas fa-plus"></i>
        </button>
      </AuthState>
    </div>
    <div class="grid-stack mt-10">
      <div v-for="widget in widgets" :key="widget.id" :id="widget.id" :gs-id="widget.id" :gs-x="widget.grid.x"
        :gs-y="widget.grid.y" :gs-w="widget.grid.w" :gs-h="widget.grid.h">
        <div
          class="grid-stack-item-content relative group p-4 bg-cover bg-center rounded-md shadow-md flex items-center justify-center text-gray-700 cursor-pointer hover:bg-slate-500 active:cursor-grabbing">
          <img :src="widget.data?.imageUrl"
            class="absolute w-full h-full object-cover group-hover:brightness-50 duration-200 transition-all">
          <span
            class="relative hidden group-hover:flex flex-col justify-center items-center gap-4 font-bold text-white">
            <h5 class="text-3xl">{{ widget.data?.title }}</h5>
            <button class="bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-900 px-3 py-1 rounded-lg"
              @click="() => openModal(widget)">See Detail</button>
          </span>
        </div>
      </div>
    </div>
  </div>
  <Modal ref="modal">
    <div class="text-black flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/2">
        <img :src="itemDetail.data.imageUrl" alt="imageUrl" class="rounded">
      </div>
      <div class="w-full md:w-1/2">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold">{{ itemDetail.data.title }}</h1>
          <a v-if="!!itemDetail.data.projectUrl" class="px-2 py-1 rounded my-3" :href="itemDetail.data.projectUrl"
            target="_blank">
            <i class="fas fa-external-link"></i>
          </a>
        </div>
        <p class="my-3">{{ itemDetail.data.description }}</p>
        <small>Available on</small>
        <div class="flex gap-3">
          <span v-for="(item, index) in parseArray(itemDetail.data.availableOn)" :key="index">
            <i :class="item.icon" class="mr-1"></i> {{ item.name }}
          </span>
        </div>
        <br>
        <small class="mt-1">Tech Stack</small>
        <div class="flex gap-3">
          <span v-for="(item, index) in parseArray(itemDetail.data.techStack)" :key="index">
            <i :class="item.icon" class="mr-1"></i> {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </Modal>
  <Modal ref="modalForm" size="lg">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/2">
        <ImageDragDrop @on-change="handleSelectImage"></ImageDragDrop>
      </div>
      <div class="w-full md:w-1/2">
        <form action="" method="post">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" class="border-2 w-full rounded outline-zinc-300 p-2 mb-3"
            v-model="form.title">
          <label for="description">Description</label>
          <textarea type="text" name="description" id="descriptiotitlen"
            class="border-2 w-full rounded outline-zinc-300 p-2 mb-3" v-model="form.description"></textarea>
          <label for="url">URL</label>
          <input type="text" name="url" id="url" class="border-2 w-full rounded outline-zinc-300 p-2 mb-3"
            v-model="form.projectUrl">
          <label for="available">Available On</label>
          <div class="flex items-center gap-3 mb-3" v-for="(item, index) in availableOn" :key="index">
            <div class="flex-grow flex items-stretch gap-3">
              <input type="text" name="available-name" id="available-name"
                class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Name" v-model="item.name">
              <input type="text" name="available-icon" id="available-icon"
                class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Icon" v-model="item.icon">
            </div>
            <button type="button" @click="availableOn.splice(index, 1)">
              <i class="fas fa-trash-can text-red-500"></i>
            </button>
          </div>
          <button class="w-full p-2 my-3 rounded bg-slate-600 text-white" type="button"
            @click="availableOn.push({ ...formItem })">
            <i class="fas fa-plus"></i>
          </button>
          <label for="tech">Tech Stack</label>
          <div class="flex items-center gap-3 mb-3" v-for="(item, index) in techStack" :key="index">
            <div class="flex-grow flex items-stretch gap-3">
              <input type="text" name="tech-name" id="tech-name"
                class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Name" v-model="item.name">
              <input type="text" name="tech-icon" id="tech-icon"
                class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Icon" v-model="item.icon">
            </div>
            <button type="button" @click="techStack.splice(index, 1)">
              <i class="fas fa-trash-can text-red-500"></i>
            </button>
          </div>
          <button class="w-full p-2 my-3 rounded bg-slate-600 text-white" type="button"
            @click="techStack.push({ ...formItem })">
            <i class="fas fa-plus"></i>
          </button>

          <button class="w-full p-2 mt-10 rounded bg-green-400 text-white font-bold" type="button" @click="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";

interface GridItem {
  id: string;
  grid: {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
  };
  data?: any
}

const modal = useTemplateRef('modal')
const modalForm = useTemplateRef('modalForm')
const grid = ref<GridStack | null>(null);
const widgets = ref<GridItem[]>([
  { id: '1', grid: { x: 0, y: 0, w: 2, h: 2 }, },
  { id: '2', grid: { x: 2, y: 0, w: 2, h: 2 }, },
  { id: '3', grid: { x: 0, y: 2, w: 2, h: 2 }, },
  { id: '4', grid: { x: 2, y: 2, w: 2, h: 2 }, },
  { id: '5', grid: { x: 3, y: 2, w: 2, h: 2 }, },
  { id: '6', grid: { x: 3, y: 2, w: 2, h: 2 }, },
])
const form = reactive({
  title: '',
  description: '',
  projectUrl: '',
  availableOn: '',
  techStack: '',
  imageUrl: ''
})
const imageForm = ref<File | null>(null)
const availableOn = ref<{ name: string; icon: string; }[]>([])
const techStack = ref<{ name: string; icon: string; }[]>([])
const formItem = ref({
  name: '',
  icon: ''
})
const loading = ref(false)
let itemDetail = ref<any>({})
const alertStore = useAlertStore();

onMounted(() => {
  loadData()
  window.addEventListener("resize", handleResize)
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})

function handleResize() {
  if (grid.value?.getColumn() === 6 && window.innerWidth < 768) {
    grid.value.column(2)
  } else if (grid.value?.getColumn() === 2 && window.innerWidth > 768) {
    grid.value.column(6)
  }
}

async function loadData() {
  widgets.value = [];
  const response = await $fetch("/api/portfolios");
  response.forEach((item, index) => {
    widgets.value.push({
      id: index.toString(),
      data: item,
      grid: {
        w: 2,
        h: 2
      }
    });
  });

  setTimeout(() => {
    initGridStack();
  }, 0);
}


function initGridStack() {
  grid.value?.removeAll()
  grid.value = GridStack.init({
    column: window.innerWidth > 768 ? 6 : 2,
    cellHeight: 100,
    minRow: 1,
    margin: 10,
  });
  makeWidgets(widgets.value);
}

function makeWidgets(widgets: GridItem[]) {
  widgets.forEach(widget => {
    grid.value?.makeWidget(`#${widget.id}`);
  });
}

function openModal(args: any) {
  itemDetail.value = args
  modal.value?.openModal()
}

function addPortfolio() {
  modalForm.value?.openModal()
}

function handleSelectImage(event: File) {
  imageForm.value = event
}

function parseArray(string: string): any[] {
  return !!string ? JSON.parse(string) : []
}

async function submit() {
  form.availableOn = JSON.stringify(availableOn.value)
  form.techStack = JSON.stringify(techStack.value)

  const formData: FormData = new FormData()
  formData.append("file", imageForm.value!)
  formData.append("text", "portfolio")
  try {
    loading.value = true
    const uploadResponse = await $fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })
    form.imageUrl = uploadResponse.url
    await $fetch("/api/portfolios", {
      method: "POST",
      body: form
    })
    alertStore.addAlert("Success adding data", "success")
    modalForm.value?.closeModal()
    loadData()
  } catch (err: any) {
    console.error(err)
    alertStore.addAlert(err.message, "danger")
  } finally {
    loading.value = false
  }
}
</script>