<template>
    <div class="p-5 poppins-regular">
        <h1
            class="poppins-bold text-3xl bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Introducing myself</h1>
        <template v-if="!loading">
            <img class="rounded-full w-32 h-32 mt-10" src="@/assets/images/profiles.jpeg" alt="profile pictures">
            <h1 class="poppins-bold text-2xl mt-5">Yusuf Biharjuna <i
                    class="fa-solid fa-badge-check ml-2 text-blue-400"></i></h1>
            <span class="mt-5">Software Developer</span>
            <p class="mt-5">I currently work as a Software Developer (focusing on Web and Mobile Development). I have so
                much experience in Computers. Not only in programming. but also, in Network engineering and graphic
                design. Passionate about computer makes me want to learn more. Anywhere, anytime</p>
        </template>
        <template v-else>
            <SkeletonLoader class="rounded-full w-32 h-32 mt-10" />
            <SkeletonLoader class="h-8 w-48 rounded mt-5" />
            <SkeletonLoader class="h-3 w-40 rounded mt-3" />

            <SkeletonLoader class="h-3 w-full rounded mt-8" />
            <SkeletonLoader class="h-3 w-full rounded mt-3" />
            <SkeletonLoader class="h-3 w-full rounded mt-3" />
        </template>
        <h1
            class="poppins-bold text-3xl mt-10 bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Education and Experience</h1>
        <div class="w-full grid grid-cols-1 md:grid-cols-2">
            <div class="mt-10">
                <h6 class="poppins-bold">Experience</h6>
                <ol class="relative space-y-2 mb-16 mt-5" style="counter-reset: step 0;">
                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;" v-for="(item, index) in experienceData" :key="index">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <h4 class="text-lg leading-6 poppins-bold mb-2">{{ item.name }}</h4>
                            <p class="roboto-bold text-lg">{{ item.officeName }}</p>
                            <b class="poppins-bold">2020 - 2024</b>
                            <div class="prose prose-slate prose-sm dark:prose-dark">
                                <p class="text-sm mt-3">{{ item.description }}</p>
                            </div>
                        </div>
                    </li>

                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;" v-if="loading" v-for="(_, index) in [0, 1]" :key="index">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <SkeletonLoader class="w-64 h-5 mb-3" />
                            <SkeletonLoader class="w-32 h-5 mb-2" />
                            <SkeletonLoader class="w-16 h-5" />
                            <SkeletonLoader class="w-full h-3 mt-5" />
                            <SkeletonLoader class="w-full h-3 mt-2" />
                            <SkeletonLoader class="w-full h-3 mt-2" />
                            <SkeletonLoader class="w-full h-3 mt-2" />
                        </div>
                    </li>
                </ol>
            </div>
            <div class="mt-10">
                <h6 class="poppins-bold">Education</h6>
                <ol class="relative space-y-2 mt-5" style="counter-reset: step 0;">
                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;" v-for="(item, index) in educationData">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <h4
                                class="text-lg leading-6 text-white font-semibold poppins-bold mb-2 dark:text-slate-200">{{item.major}}</h4>
                            <p class="roboto-bold text-lg">{{item.educationName}}</p>
                            <b class="poppins-bold">{{item.yearStart + '-' + item.yearEnd}}</b>
                            <div class="prose prose-slate prose-sm dark:prose-dark">
                                <p class="text-sm mt-3"></p>
                                <span>{{item.description}}</span>
                            </div>
                        </div>
                    </li>

                    <li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 before:bg-white dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 w-full"
                        style="counter-increment: step 1;" v-if="loading" v-for="(_, index) in [0, 1]" :key="index">
                        <div class="mb-6 col-span-full xl:mb-0 w-full">
                            <SkeletonLoader class="w-64 h-5 mb-3" />
                            <SkeletonLoader class="w-32 h-5 mb-2" />
                            <SkeletonLoader class="w-16 h-5" />
                            <SkeletonLoader class="w-full h-3 mt-5" />
                            <SkeletonLoader class="w-full h-3 mt-2" />
                            <SkeletonLoader class="w-full h-3 mt-2" />
                            <SkeletonLoader class="w-full h-3 mt-2" />
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

const alertStore = useAlertStore()

let pdfUrl = ref<string>('')

const loading = ref(false)
const userData = ref<Record<string, any>>({})
const educationData = ref<Array<Record<string, any>>>([])
const experienceData = ref<Array<Record<string, any>>>([])
const certificationsData = ref<Array<Record<string, any>>>([])
const achievementsData = ref<Array<Record<string, any>>>([])

onMounted(async () => {
    try {
        pdfUrl.value = (await import('@/assets/pdfs/cv.pdf')).default
        await loadData()
    } catch (err) {
        console.error(err)
    } finally {
        loading.value = false
    }
})

async function loadData(): Promise<void> {
    loading.value = true
    try {
        const response = await Promise.all([
            $fetch("/api/users"),
            $fetch("/api/educations"),
            $fetch("/api/experiences"),
            $fetch("/api/certifications"),
            $fetch("/api/achievements")
        ])
        userData.value = response[0][0]
        educationData.value = response[1]
        experienceData.value = response[2]
        certificationsData.value = response[3]
        achievementsData.value = response[4]
    } catch (error: any) {
        alertStore.addAlert(error.message, "danger")
    } finally {
        loading.value = false
    }

}
</script>