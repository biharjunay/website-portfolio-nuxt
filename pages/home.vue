<template>
  <main class="h-full flex flex-col gap-5 poppins-bold">
    <div class="flex flex-col lg:flex-row lg:h-4/6 gap-5">
      <div class="w-full lg:w-7/12 bg-[url('@/assets/images/galaxy.avif')] bg-center bg-cover rounded-3xl">
        <div class="z-10 w-full h-full rounded-3xl p-5 backdrop-blur-lg grid grid-rows-[auto_1fr] overflow-y-auto">
          <h6 class="text-xl">Recent Projects</h6>
          <div class="bg-white rounded-3xl mt-5 lg:grid lg:grid-cols-2">
            <div class="bg-red-500 rounded-3xl">
              <img class="w-full h-full object-cover rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                src="@/assets/images/bg-tech.avif" alt="project image">
            </div>
            <div class="text-black p-5 text-center flex flex-col justify-between">
              <h1 class="border-b border-b-zinc-300 font-bold text-3xl text-slate-800">sdfsafd</h1>
              <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae impedit suscipit
                et labore cum placeat fuga ad, velit dolore.</p>
              <button
                class="self-end mt-5 bg-black rounded-full text-white px-5 py-2 text-xs hover:text-black hover:bg-white hover:shadow" @click="navigateTo('/portfolio')">See
                More Projects <i class="fas fa-arrow-right ml-5"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-5/12 flex flex-col bg-black rounded-3xl">
        <h1 class="poppins-bold text-xl mt-5 ml-5">Latest Activity</h1>
        <VChart class="chart" :option="chartOptions" ref="v-chart"></VChart>
      </div>
    </div>
    <div class="h-2/6 flex flex-col md:flex-row gap-5">
      <div
        class="w-full md:w-1/3 bg-gradient-to-br from-emerald-950 to-emerald-800 rounded-3xl flex flex-col gap-3 p-5">
        <h1 class="poppins-regular">Years of Experience</h1>
        <h1 class="text-7xl">1</h1>
      </div>
      <div class="w-full md:w-1/3 bg-gradient-to-br from-teal-950 to-teal-800 rounded-3xl flex flex-col gap-3 p-5">
        <h1 class="poppins-regular">Projects Finished</h1>
        <h1 class="text-7xl">1</h1>
      </div>
      <div class="w-full md:w-1/3 bg-gradient-to-br from-slate-950 to-slate-800 rounded-3xl flex flex-col gap-3 p-5">
        <h1 class="poppins-regular">Active Projects</h1>
        <h1 class="text-7xl">5</h1>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import { NavigationFailureType } from 'vue-router';

const chart = useTemplateRef('v-chart')
const chartOptions = ref<EChartsOption>(
    {
        xAxis: {
            show: false,
            type: 'category',
            name: 'b',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            show: false,
            name: 'a',
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                name: 'Legend A',
                smooth: true,
            },
            {
                data: [233, 345, 121, 880, 1231, 1330, 1320],
                type: 'line',
                smooth: true,
                name: 'Legend B'
            },
        ],
        legend: {
            data: ['Legend A', 'Legend B'],
            orient: 'horizontal',
            bottom: 15,
            left: 15,
            textStyle: {
                fontWeight: 600,
                color: 'white',
            },
        },
        tooltip: {
            show: true,
            borderRadius: 9999
        },
        grid: {
            width: '100%',
            left: 0
        }
    }
)

onMounted(() => {
  window.onresize = () => chart.value?.resize()
})
</script>

<style scoped lang="scss">
.chart {
  height: 100%;
  min-height: 300px;
}
</style>