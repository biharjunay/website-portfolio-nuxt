<template>
    <div class="p-5">
        <h1
            class="poppins-bold text-3xl bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            My Portfolio
        </h1>
        <div class="min-h-screen mt-10">
            <div class="grid-stack">
                <div v-for="widget in widgets" :key="widget.id" :id="widget.id" :gs-id="widget.id" :gs-x="widget.grid.x"
                    :gs-y="widget.grid.y" :gs-w="widget.grid.w" :gs-h="widget.grid.h" @click="openModal">
                    <div
                        class="grid-stack-item-content p-4 bg-[url('@/assets/images/background.jpg')] bg-cover bg-center rounded-md shadow-md flex items-center justify-center text-gray-700 cursor-pointer hover:bg-slate-500 active:cursor-grabbing">
                        <span class="text-2xl">{{ widget.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal ref="modal">
        <div class="text-black">fsdaf nsafh</div>
    </Modal>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { GridStack, } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";

interface GridItem {
    id: string;
    title: string;
    grid: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}

const modal = useTemplateRef('modal')
const grid = ref<GridStack | null>(null);
const widgets = ref<GridItem[]>([
    {
        id: '1',
        title: "First Widget",
        grid: { x: 0, y: 0, w: 2, h: 2 },
    },
    {
        id: '2',
        title: "Second Widget",
        grid: { x: 2, y: 0, w: 2, h: 1 },
    },
    {
        id: '3',
        title: "Third Widget",
        grid: { x: 0, y: 2, w: 2, h: 1 },
    },
    {
        id: '4',
        title: "Fourth Widget",
        grid: { x: 2, y: 2, w: 1, h: 2 },
    },
    {
        id: '5',
        title: "Fifth Widget",
        grid: { x: 3, y: 2, w: 1, h: 2 },
    },
]);

function initGridStack() {
    grid.value = GridStack.init({
        column: 4,
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

function openModal(event: Event) {
    if (!(event.target as HTMLElement).classList.contains('ui-resizable-handle')) modal.value?.openModal()
}

onMounted(() => {
    initGridStack();
});
</script>