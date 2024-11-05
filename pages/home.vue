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
                class="self-end mt-5 bg-black rounded-full text-white px-5 py-2 text-xs hover:text-black hover:bg-white hover:shadow">See
                More Projects <i class="fas fa-arrow-right ml-5"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-5/12 flex flex-col md:flex-row gap-5">
        <div class="w-full md:w-6/12 bg-black flex flex-col rounded-3xl p-5 overflow-auto">
          <h6 class="text-xl">Tech Stack</h6>
          <div
            class="w-full grid grid-rows-2 grid-flow-col md:grid-flow-row md:grid-rows-none md:grid-cols-2 place-items-center self-center mt-5 tech-stack-container">
            <img class="tech-stack-img" src="@/assets/images/js.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/ts.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/php.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/java.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/react.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/vue.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/angular.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/laravel.png" alt="tech stack icon">
            <img class="tech-stack-img" src="@/assets/images/spring.png" alt="tech stack icon">
          </div>
        </div>
        <div class="w-full lg:w-6/12 flex flex-col justify-between bg-black rounded-3xl">
          <h6 class="text-xl m-5">What can I do?</h6>
          <div class="h-[90%] bg-zinc-950 rounded-3xl">
            <div class="flex flex-col justify-center items-center overflow-auto mb-5">
              <span class="w-10 h-1 my-3 bg-gray-400 rounded-full"></span>
              <div class="flex py-2">
                <span>Web Development</span>
              </div>
              <div class="flex py-2">
                <span>Mobile Development</span>
              </div>
              <div class="flex py-2">
                <span>Network Administrator</span>
              </div>
              <div class="flex py-2">
                <span>Database Administrator</span>
              </div>
            </div>
          </div>
        </div>
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

<style scoped lang="scss">
.tech-stack-container:hover .tech-stack-img {
  filter: grayscale(100%);
}

.tech-stack-container .tech-stack-img:hover {
  filter: none
}

.tech-stack-img {
  border-radius: 4px;
  width: 40px;
  margin-bottom: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
}
</style>