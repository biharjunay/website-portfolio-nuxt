<template>
    <div class="p-5 poppins-regular relative min-h-screen">
        <h1
            class="poppins-bold text-3xl bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">
            Contact me</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div class="flex justify-between flex-col">
                <p class="text-xl">If you have several questions, feel free to ask me in email</p>
                <div class="flex flex-col gap-3 my-5">
                    <div class="flex gap-3">
                        <i class="fas fa-envelope text-3xl w-10 text-center"></i>
                        <span class="text-xl">biharjunay@gmail.com</span>
                    </div>
                    <div class="flex gap-3">
                        <i class="fas fa-location-pin text-3xl w-10 text-center"></i>
                        <span class="text-xl">Semarang, Indonesia</span>
                    </div>
                </div>

                <div>
                    <h6>Or you can also connect me here</h6>
                    <div class="flex gap-5 mt-5">
                        <i class="fa-brands fa-linkedin-in text-3xl cursor-pointer hover:scale-110"></i>
                        <i class="fa-brands fa-instagram text-3xl cursor-pointer hover:scale-110"></i>
                        <i class="fa-brands fa-facebook-f text-3xl cursor-pointer hover:scale-110"></i>
                        <i class="fa-brands fa-github text-3xl cursor-pointer hover:scale-110"></i>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 place-items-center">
                <div class="w-full h-96 overflow-y-auto rounded-b-lg py-5">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name"
                        class="w-full bg-transparent outline-none border-b border-b-slate-200 py-2 mb-3"
                        placeholder="Enter your name">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"
                        class="w-full bg-transparent outline-none border-b border-b-slate-200 py-2 mb-3"
                        placeholder="Enter your name">
                    <label for="message">Message</label>
                    <textarea name="message" id="message"
                        class="w-full border-b border-b-slate-200 bg-transparent outline-none py-2" rows="3"
                        placeholder="Enter your message here"></textarea>
                    <button type="submit"
                        class="w-full rounded bg-slate-900 py-2 mt-3 transition-all hover:bg-slate-800 duration-150 active:bg-slate-900">Submit</button>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <b class="bg-gradient-to-r from-slate-200 to-slate-600 inline-block text-transparent bg-clip-text">Yusuf
                Biharjuna</b> <br>
            Copyright © 2024 All Rights Reserved
        </div>
    </div>
</template>