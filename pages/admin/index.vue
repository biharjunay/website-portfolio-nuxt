<template>
    <div class="h-auto md:h-full flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/3 flex flex-col gap-5 py-5 px-3">
            <div class="my-auto">
                <div class="flex items-center gap-3">
                    <img src="@/assets/images/power-icon.png" alt="Power Icon"
                        class="w-10 h-10 rounded-full bg-blue-500 p-2">
                    <span>
                        <h1 class="text-xl">Hi There</h1>
                        <p class="text-gray-500">Look at my amazing website portfolio</p>
                    </span>
                </div>
            </div>
            <div class="flex-grow flex flex-col gap-5">
                <div class="min-h-80 flex flex-col md:flex-row p-4 gap-5">
                    <div class="w-full md:w-[40%] bg-white rounded-3xl p-5 flex flex-col">
                        <div>
                            <div class="flex justify-between items-center">
                                <h1>Profile</h1>
                                <i class="fas fa-refresh"></i>
                            </div>
                            <div class="py-5">
                                <img src="@/assets/images/profiles.jpeg" alt="profile picture"
                                    class="w-24 h-24 rounded-full m-auto">
                                <h1 class="text-xl text-center mt-5 font-bold">Yusuf Biharjuna</h1>
                                <p class="text-center text-gray-400">Software Developer</p>
                            </div>
                        </div>
                        <div class="flex justify-center gap-5 mt-auto">
                            <button class="outline-0 shadow-md px-3 p-1 rounded-full" v-for="items in [1, 2, 3]">
                                <i class="fa fa-check text-main font-bold"></i> 11
                            </button>
                        </div>
                    </div>
                    <div class="w-full md:w-[60%] flex flex-col gap-5 bg-primary">
                        <div class="flex-grow flex gap-5 min-h-40">
                            <div
                                class="overflow-hidden flex-grow bg-red-500 bg-gradient-to-tr from-purple-400 via-[white] to-red-500 relative before:absolute before:h-full before:content-[''] before:z-10 before:-top-[80%] before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-yellow-100 rounded-3xl after:absolute after:bg-pink-400 after:-bottom-[80%] after:h-full after:content-[''] after:z-20 after:w-1/2 after:left-1/2 after:-translate-x-2/3">
                                <div
                                    class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl rounded-3xl z-50 p-5">
                                    Prioritize <br> Tasks
                                </div>
                            </div>
                            <div
                                class="overflow-hidden flex-grow bg-blue-300 bg-gradient-to-tr from-teal-400 via-[white] to-blue-600 relative before:absolute before:h-full before:content-[''] before:z-10 before:-top-[80%] before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-blue-100 rounded-3xl after:absolute after:bg-blue-400 after:-bottom-[80%] after:h-full after:content-[''] after:z-20 after:w-1/2 after:left-1/2 after:-translate-x-2/3">
                                <div
                                    class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl rounded-3xl z-50 p-5">
                                    Additional <br> Tasks
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-300 h-24 rounded-3xl p-5">
                            sdfasadfasdf
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between items-center">
                        <span>
                            <h1 class="font-bold text-2xl">Focusing</h1>
                            <p class="text-gray-400">Productivity Analytics</p>
                        </span>
                        <!-- <v-select id="v-select" :options="['Canada', 'United States']" class="select-menu" placeholder="Select Range"></v-select> -->
                        <select class="py-3 px-5 outline-none rounded-full bg-white select-menu">
                            <option value="">oke</option>
                            <option value="">df</option>
                            <option value="">dfd</option>
                        </select>
                    </div>
                    <VChart class="chart" :option="chartOptions" ref="v-chart"></VChart>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/3 px-3 py-5">
            <div class="flex justify-between items-center">
                <h1 class="font-semibold text-xl">Recent Projects</h1>
                <button
                    class="bg-white w-10 h-10 rounded-full active:bg-black active:text-white transition-all duration-300">
                    <i class="fas fa-briefcase"></i>
                </button>
            </div>
            <div class="border-b border-b-gray-300 py-5 flex" v-for="item in [1, 2, 3, 4]">
                <img class="w-11 h-11 rounded-full mx-3" src="@/assets/images/laravel.png" alt="logo">
                <div class="flex-grow">
                    <h1 class="font-semibold">Sistem Tracking Indonesia</h1>
                    <p class="line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cumque! Accusantium ipsam atque inventore, fugit hic commodi culpa facere laudantium?</p>
                </div>
                <button class="p-3">
                    <i class="fas fa-external-link"></i>
                </button>
            </div>
            <button class="text-center mt-5 p-3 w-full text-gray-500">
                See All Projects <i class="fas fa-angle-right ml-3"></i>
            </button>
            <h1 class="font-semibold text-xl">Skills</h1>
            <p class="text-gray-400">Let you know about my skills</p>
            <div class="grid grid-cols-[auto,1fr,auto] gap-3 items-center">
                <template v-for="item in [1, 2, 3, 4]">
                    <div class="mt-5">Web Development</div>
                    <Progress class="mt-5" :progress="15" />
                    <div class="mt-5">90%</div>
                    <div class="mt-5">Mobile Development</div>
                    <Progress class="mt-5" :progress="75" />
                    <div class="mt-5">75%</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';

definePageMeta({
    layout: 'admin'
})

const vchart = useTemplateRef('v-chart')
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
                color: 'black',
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
    window.onresize = () => vchart.value?.resize()
})
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
    display: none;
}

.chart {
    height: 400px;
    // border: 1px solid black;
}

.select-menu {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
</style>