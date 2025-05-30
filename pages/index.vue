<template>
    <div class="fixed inset-0 -z-10">
        <CharacterCanvas />
    </div>

    <div class="relative w-full overflow-x-hidden">
        <div id="sect1" class="h-screen w-full flex flex-col justify-center items-center">
            <div class="font-gloomie text-white">
                <span ref="welcome-text">Welcome to my</span>
                <div class="portfolio-text flex items-end gap-2 h-[148px]">
                    <span v-for="(_, i) in portfolioLetters" :key="i"
                        :ref="(el) => { if (el) lettersRefs[i] = el as HTMLSpanElement }" :class="letterClass(i)">
                        {{ portfolioLetters[i] }}
                    </span>
                </div>
            </div>
        </div>
        <div id="sect2" class="h-screen flex justify-center items-center">
            <p class="font-gloomie">We built a software who can help y</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const lettersRefs: HTMLSpanElement[] = []
const letters = ref<HTMLSpanElement[]>([])
const welcomeText = useTemplateRef("welcome-text")

// Simplify: removed headerClass and scroll logic
const portfolioLetters = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
const letterClass = (i: number) => {
    const classes = [
        'text-[128px]', 'text-[88px] mb-3', 'text-[104px] mb-3 -rotate-12',
        'text-[128px]', 'text-[102px] mb-5', 'text-[116px]',
        'text-[142px]', 'text-[128px] rotate-12', 'text-[116px]'
    ]
    return classes[i]
}

function animatePortfolioLetters() {
    if (welcomeText.value) {
        const splitWelcomeText = new SplitText(welcomeText.value, { type: "chars" });
        gsap.from(splitWelcomeText.chars, {
            duration: 2,
            y: -50,
            opacity: 0,
            ease: 'bounce.out',
            stagger: .1,
        });
    }

    if (letters.value.length === 0) return;

    letters.value.forEach(letter => {
        letter.addEventListener('mouseenter', () => {
            gsap.to(letter, {
                scale: 1.2,
                filter: 'drop-shadow(0px 0px 10px white)',
                duration: 0.3,
                ease: 'power2.out'
            });
        })
        letter.addEventListener('mouseleave', () => {
            gsap.to(letter, {
                scale: 1,
                filter: 'drop-shadow(0px 0px 0px white)',
                duration: 0.3,
                ease: 'power2.inOut'
            });
        })

        const x = gsap.utils.random(-500, 500);
        const y = gsap.utils.random(-300, 300);
        const rotate = gsap.utils.random(-360, 360);

        gsap.to(letter, {
            x, y, rotation: rotate, opacity: 0,
            scrollTrigger: {
                trigger: letter,
                start: 300,
                end: 'bottom+=1000',
                scrub: true
            }
        })
    })

    gsap.from(letters.value, {
        duration: 5,
        x: () => gsap.utils.random(-500, 500),
        y: () => gsap.utils.random(-300, 300),
        opacity: 0,
        ease: 'bounce.out',
        stagger: 0.05,
        delay: 2
    })
}

function animateSections() {
    ScrollTrigger.create({
        trigger: '#sect1',
        start: 'top top',
        pin: true,
        end: '+=500',
        scrub: true,
        markers: true
    })
}

onMounted(() => {
    letters.value = lettersRefs;
    animatePortfolioLetters()
    animateSections()
})

onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
