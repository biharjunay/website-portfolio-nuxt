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
        <div tabindex="0" onclick="this.focus()"
            class="grid-stack-item-content relative group p-4 bg-cover bg-center rounded-md shadow-md flex items-center justify-center text-gray-700 cursor-pointer hover:bg-slate-500 focus:bg-slate-500 active:cursor-grabbing">
          <img :src="widget.data?.imageUrl"
               class="absolute w-full h-full object-cover group-hover:brightness-50 group-focus:brightness-50 duration-200 transition-all">
          <span
              class="relative hidden group-hover:flex group-focus:flex flex-col justify-center items-center gap-4 font-bold text-white">
            <h5 class="text-[2em]">{{ widget.data?.title }}</h5>
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
        <img :src="itemDetail.data?.imageUrl" alt="imageUrl" class="rounded">
      </div>
      <div class="w-full md:w-1/2">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold">{{ itemDetail.data?.title }}</h1>
          <a v-if="!!itemDetail.data.projectUrl" class="px-2 py-1 rounded my-3 hover:text-gray-300"
             :href="itemDetail.data?.projectUrl"
             target="_blank">
            <i class="fas fa-external-link"></i>
          </a>
        </div>
        <p class="my-3">{{ itemDetail.data?.description }}</p>
        <small>Available on</small>
        <div class="flex gap-3 flex-wrap">
          <span class="text-nowrap" v-for="(item, index) in parseArray(itemDetail.data?.availableOn)" :key="index">
            <i :class="item.icon" class="mr-1"></i> {{ item.name }}
          </span>
        </div>
        <br>
        <small class="mt-1">Tech Stack</small>
        <div class="flex gap-3 flex-wrap">
          <span class="text-nowrap" v-for="(item, index) in parseArray(itemDetail.data?.techStack)" :key="index">
            <i :class="item.icon" class="mr-1"></i> {{ item.name }}
          </span>
        </div>
        <AuthState v-slot="{loggedIn}">
          <div class="flex justify-end gap-3 mt-3 text-white" v-if="loggedIn">
            <button class="bg-yellow-600 px-3 py-1 rounded" @click="editPortfolio">Edit</button>
            <button class="bg-red-600 px-3 py-1 rounded">Delete</button>
          </div>
        </AuthState>
      </div>
    </div>
  </Modal>
  <Modal ref="modalForm" size="lg" @close="onCloseFormModal">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/2">
        <ImageDragDrop :image-url="editMode ? itemDetail.data?.imageUrl : ''"
                       @on-change="handleSelectImage"></ImageDragDrop>
      </div>
      <div class="w-full md:w-1/2">
        <form method="post" @submit.prevent="submit">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" class="border-2 w-full rounded outline-zinc-300 p-2 mb-3" required
                 v-model="form.title">
          <label for="description">Description</label>
          <textarea type="text" name="description" id="description" required
                    class="border-2 w-full rounded outline-zinc-300 p-2 mb-3" v-model="form.description"></textarea>
          <label for="url">URL</label>
          <input type="text" name="url" id="url" class="border-2 w-full rounded outline-zinc-300 p-2 mb-3" required
                 v-model="form.projectUrl">
          <label for="available">Available On</label>
          <div class="flex items-center gap-3 mb-3" v-for="(item, index) in availableOn" :key="index">
            <div class="flex-grow flex items-stretch gap-3">
              <input type="text" name="available-name" id="available-name" required
                     class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Name"
                     v-model="item.name">
              <input type="text" name="available-icon" id="available-icon" required
                     class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Icon"
                     v-model="item.icon">
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
              <input type="text" name="tech-name" id="tech-name" required
                     class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Name"
                     v-model="item.name">
              <input type="text" name="tech-icon" id="tech-icon" required
                     class="border-2 w-full rounded outline-zinc-300 p-2 flex-grow" placeholder="Icon"
                     v-model="item.icon">
            </div>
            <button type="button" @click="techStack.splice(index, 1)">
              <i class="fas fa-trash-can text-red-500"></i>
            </button>
          </div>
          <button class="w-full p-2 my-3 rounded bg-slate-600 text-white" type="button"
                  @click="techStack.push({ ...formItem })">
            <i class="fas fa-plus"></i>
          </button>

          <button class="w-full p-2 mt-10 rounded text-white font-bold disabled:bg-gray-400 flex justify-center"
                  :class="`bg-${editMode ? 'yellow' : 'green'}-600`" type="submit" :disabled="loading">
            <span v-if="!loading">Submit</span>
            <div role="status" v-if="loading">
              <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import {GridStack} from "gridstack";
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

const alertStore = useAlertStore();
const loading = ref(false)
const itemDetail = ref<any>({})
const editMode = ref(false)

const modal = useTemplateRef('modal')
const modalForm = useTemplateRef('modalForm')
const grid = ref<GridStack | null>(null);

const widgets = ref<GridItem[]>([
  {id: '1', grid: {x: 0, y: 0, w: 2, h: 2},},
  {id: '2', grid: {x: 2, y: 0, w: 2, h: 2},},
  {id: '3', grid: {x: 0, y: 2, w: 2, h: 2},},
  {id: '4', grid: {x: 2, y: 2, w: 2, h: 2},},
  {id: '5', grid: {x: 3, y: 2, w: 2, h: 2},},
  {id: '6', grid: {x: 3, y: 2, w: 2, h: 2},},
])

let form = reactive({
  title: '',
  description: '',
  projectUrl: '',
  availableOn: '',
  techStack: '',
  imageUrl: ''
})

const formItem = ref({
  name: '',
  icon: ''
})

const imageForm = ref<File | null>(null)
const availableOn = ref<{ name: string; icon: string; }[]>([])
const techStack = ref<{ name: string; icon: string; }[]>([])


onMounted(() => {
  window.addEventListener("resize", handleResize)
  loadData()
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})

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

function handleResize() {
  if (grid.value?.getColumn() === 6 && window.innerWidth < 768) {
    grid.value.column(2)
  } else if (grid.value?.getColumn() === 2 && window.innerWidth > 768) {
    grid.value.column(6)
  }
}

function initGridStack() {
  grid.value?.removeAll()
  grid.value = GridStack.init({
    column: window.innerWidth > 768 ? 6 : 2,
    cellHeight: 200,
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

function editPortfolio() {
  modal.value?.closeModal()
  editMode.value = true
  form = reactive(itemDetail.value.data)
  availableOn.value = JSON.parse(form.availableOn)
  techStack.value = JSON.parse(form.techStack)
  modalForm.value?.openModal()
}

function handleSelectImage(event: File) {
  imageForm.value = event
}

function parseArray(string: string): any[] {
  return !!string ? JSON.parse(string) : []
}

function onCloseFormModal() {
  editMode.value = false
  itemDetail.value = {}
  form = reactive({
    title: '',
    description: '',
    projectUrl: '',
    availableOn: '',
    techStack: '',
    imageUrl: ''
  })
  availableOn.value = []
  techStack.value = []
}

async function submit() {
  if (!editMode.value && !imageForm.value) {
    alertStore.addAlert("Image must be filled", "danger")
    return
  }
  form.availableOn = JSON.stringify(availableOn.value)
  form.techStack = JSON.stringify(techStack.value)
  try {
    loading.value = true
    if (imageForm.value) {
      const formData: FormData = new FormData()
      formData.append("file", imageForm.value!)
      form.imageUrl = await $fetch("/api/upload-image", {
        method: "POST",
        body: formData
      })
    }

    if (editMode.value) {
      await $fetch(`/api/portfolios/${itemDetail.value.data?.id}`, {
        method: "PUT",
        body: form
      })
    } else {
      await $fetch("/api/portfolios", {
        method: "POST",
        body: form
      })
    }
    alertStore.addAlert("Success adding data", "success")
    modalForm.value?.closeModal()
    await loadData()
  } catch (err: any) {
    console.error(err)
    alertStore.addAlert(err.message, "danger")
  } finally {
    loading.value = false
  }
}
</script>