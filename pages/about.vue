<template>
    <div class="p-5 poppins-regular">
        <h1
            class="poppins-bold text-3xl bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Introducing myself</h1>
        <img class="rounded-full w-32 h-32 mt-10" src="@/assets/images/profiles.jpeg" alt="profile pictures">
        <h1 class="poppins-bold text-2xl mt-5">Yusuf Biharjuna <i
                class="fa-solid fa-badge-check ml-2 text-blue-400"></i>
        </h1>
        <span class="mt-5">Software Developer</span>
        <p class="mt-5">I currently work as a Software Developer (focusing on Web and Mobile Development). I have so
            much
            experience in Computers. Not only in programming. but also, in Network engineering and graphic design.
            Passionate
            about computer makes me want to learn more. Anywhere, anytime</p>
        <h1
            class="poppins-bold text-3xl mt-10 bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Education and Experience</h1>
        <div class="w-full grid grid-cols-1 md:grid-cols-2">
            <div class="mt-10">
                <h6 class="poppins-bold">Experience</h6>
                <ol class="relative space-y-2 mb-16 mt-5" style="counter-reset: step 0;">

                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <h4 class="text-lg leading-6 poppins-bold mb-2">Front End Developer</h4>
                            <p class="roboto-bold text-lg">E solution</p>
                            <b class="poppins-bold">2020 - 2024</b>
                            <div class="prose prose-slate prose-sm dark:prose-dark">
                                <p class="text-sm mt-3">I'm a Frontend Developer with a focus on building robust web-based applications using Angular and mobile frontend with NativeScript. Skilled in TypeScript programming with an object-oriented programming paradigm, implementing software design patterns, and adept at bug fixing and problem solving. Passionate about creating user-friendly interfaces and delivering high-quality software solutions.</p>
                            </div>
                        </div>
                    </li>

                </ol>
            </div>
            <div class="mt-10">
                <h6 class="poppins-bold">Education</h6>
                <ol class="relative space-y-2 mt-5" style="counter-reset: step 0;">
                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;" v-for="sdaf of [1,2,3]">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <h4
                                class="text-lg leading-6 text-white font-semibold poppins-bold mb-2 dark:text-slate-200">
                                Computer and
                                Network Engineering</h4>
                            <p class="roboto-bold text-lg">SMK Negeri 2 Purwodadi</p>
                            <b class="poppins-bold">2020 - 2023</b>
                            <div class="prose prose-slate prose-sm dark:prose-dark">
                                <p class="text-sm mt-3"></p>
                                <ul class="text-sm">
                                    <li>Implemented web servers using Linux and Apache.</li>
                                    <li>Built Internet networks using MikroTik and Cisco.</li>
                                    <li>Developed web applications using HTML, CSS, JavaScript, and PHP.</li>
                                    <li>Utilized frameworks such as Laravel and Vue.js for web development.</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                </ol>
            </div>
        </div>
        <h1
            class="poppins-bold text-3xl mt-5 bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Certification and Achievements</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
                <div class="rounded-xl divide-y divide-slate-100 bg-gradient-to-r from-slate-900 to-slate-800">
                    <div class="p-4 flex cursor-pointer">
                        <div class="flex-grow">
                            <h6 class="poppins-bold text-xl">Google IT Support</h6>
                            <b>2022-2025</b>
                            <p class="mt-5">Credential: 12312313</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fa-solid fa-angle-right align-middle"></i>
                        </div>
                    </div>
                    <div class="p-4 flex cursor-pointer">
                        <div class="flex-grow">
                            <h6 class="poppins-bold text-xl">MTCNA</h6>
                            <b>2022-2025</b>
                            <p class="mt-5">Credential: 12312313</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fa-solid fa-angle-right align-middle"></i>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <ol class="relative space-y-2 mt-5" style="counter-reset: step 0;">
                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <h4
                                class="text-lg leading-6 text-white font-semibold poppins-bold mb-2 dark:text-slate-200">
                                #1 Regency
                                LKS SMK Web Technologies</h4>
                            <div class="prose prose-slate prose-sm dark:prose-dark">
                                <p class="mt-3 poppins-bold">2023</p>
                                <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro
                                    exercitationem?
                                    Repellendus eveniet nobis totam? Tempore necessitatibus placeat dolore quidem.</p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>

        <h1
            class="poppins-bold text-3xl my-10 bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Or Check my CV Below</h1>
        <div class="grid grid-cols-1 place-items-center">
            <div class="rounded-lg bg-slate-700 w-full divide-y divide-slate-100">
                <div class="flex justify-start gap-2 px-3 py-2">
                    <i class="w-3 h-3 rounded-full bg-red-500"></i>
                    <i class="w-3 h-3 rounded-full bg-yellow-500"></i>
                    <i class="w-3 h-3 rounded-full bg-green-500"></i>
                </div>
                <div class="w-full h-96 overflow-y-auto rounded-b-lg">
                    <iframe :src="pdfUrl" class="w-full h-full" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

let pdfUrl = ref<string>('')

onMounted(async () => {
    try {
        pdfUrl.value = (await import('@/assets/pdfs/cv.pdf')).default
    } catch (err) {
        console.error(err)
    }
})
</script>