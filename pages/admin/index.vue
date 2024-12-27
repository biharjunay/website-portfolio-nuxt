<template>
    <div class="h-full flex">
        <div class="w-2/3 flex flex-col gap-5">
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
                <div class="h-1/2 flex gap-5">
                    <div class="w-[40%] bg-white rounded-3xl p-5 drop-shadow-xl flex flex-col">
                        <div>
                            <div class="flex justify-between items-center">
                                <h1>Profile</h1>
                                <i class="fas fa-refresh"></i>
                            </div>
                            <div class="py-5">
                                <img src="@/assets/images/profiles.jpeg" alt="profile picture"
                                    class="w-24 h-24 rounded-full m-auto">
                                <h1 class="text-xl text-center mt-5">Yusuf Biharjuna</h1>
                                <p class="text-center text-gray-400">Software Developer</p>
                            </div>
                        </div>
                        <div class="flex justify-center gap-5 mt-auto">
                            <button class="outline-0 shadow-md px-5 py-1 rounded-full" v-for="items in [1, 2, 3]">
                                <i class="fa fa-check text-main font-bold"></i> 11
                            </button>
                        </div>
                    </div>
                    <div class="w-[60%] flex flex-col gap-5">
                        <div class="flex-grow flex gap-5">
                            <div class="overflow-hidden w-1/2 h-full bg-red-500 bg-gradient-to-tr from-purple-400 via-[white] to-red-500 relative before:absolute before:h-full before:content-[''] before:z-10 before:-top-[80%] before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-yellow-100 rounded-3xl after:absolute after:bg-pink-400 after:-bottom-[80%] after:h-full after:content-[''] after:z-20 after:w-1/2 after:left-1/2 after:-translate-x-2/3">
                                <div class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl rounded-3xl z-50 p-5">
                                    Prioritize <br> Tasks
                                </div>
                            </div>
                            <div class="overflow-hidden w-1/2 h-full bg-blue-300 bg-gradient-to-tr from-teal-400 via-[white] to-blue-600 relative before:absolute before:h-full before:content-[''] before:z-10 before:-top-[80%] before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-blue-100 rounded-3xl after:absolute after:bg-blue-400 after:-bottom-[80%] after:h-full after:content-[''] after:z-20 after:w-1/2 after:left-1/2 after:-translate-x-2/3">
                                <div class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl rounded-3xl z-50 p-5">
                                    Additional <br> Tasks
                                </div>
                            </div>
                            <div class=""></div>
                        </div>
                        <div class="bg-gray-300 h-24 rounded-3xl p-5">
                            sdfasadfasdf
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-1/3">sdfsadf</div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})
</script>