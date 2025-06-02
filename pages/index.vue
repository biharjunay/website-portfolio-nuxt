<template>
  <div class="fixed inset-0 -z-10">
    <CharacterCanvas />
  </div>

  <div class="relative w-full overflow-x-hidden bg-gray-100 text-black">
    <section id="sect1" class="h-screen flex justify-center items-center relative">
      <img id="rocket" src="@/assets/images/rocket.png" alt="rocket" class="absolute w-20">
      <div class="font-gloomie">
        <div class="portfolio-text flex items-end gap-2 pb-10">
          <span v-for="(_, i) in portfolioLetters" :key="i"
            :ref="(el) => el && (lettersRefs[i] = el as HTMLSpanElement)" class="pb-10" :class="letterClass(i)">
            {{ portfolioLetters[i] }}
          </span>
        </div>
      </div>
    </section>

    <section id="sect2" class="h-screen flex justify-center items-center relative">
      <div
        class="font-oldschoool transition-all text-[5vw] w-[70%] flex flex-col justify-center items-center scale-150">
        <div>What you see here</div>
        <span>
          <span class="is-my">is my </span>
          <b id="innovation" class="text-blue-500">Innovation</b>
          <b id="motivation" class="text-red-500">Motivation</b>
          <b id="creation" class="text-green-500">Creation</b>
        </span>
      </div>
    </section>

    <section id="sect3" class="flex h-screen">
      <div v-for="item in [1, 2, 3, 4]" :key="item" class="bg-black flex-grow"></div>
    </section>
  </div>

  <div class="absolute top-0 left-0 rounded-full w-10 h-10 bg-black"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const lettersRefs: HTMLSpanElement[] = [];
const letters = ref<HTMLSpanElement[]>([]);

const portfolioLetters = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];
const letterClass = (i: number) => [
  'text-[15vw]', 'text-[10.35vw] mb-3', 'text-[12vw] mb-3 -rotate-12',
  'text-[15vw]', 'text-[12vw] mb-5', 'text-[13.5vw]',
  'text-[16.5vw]', 'text-[15vw] rotate-12', 'text-[13.5vw]'
][i];

function animatePortfolioLetters() {

  if (!letters.value.length) return;

  letters.value.forEach((letter) => {
    letter.addEventListener('mouseenter', () => {
      gsap.to(letter, {
        scale: 1.2,
        filter: 'drop-shadow(0px 0px 1px black)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    letter.addEventListener('mouseleave', () => {
      gsap.to(letter, {
        scale: 1,
        filter: 'drop-shadow(0px 0px 0px black)',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    });

    const [x, y, rotate] = [
      gsap.utils.random(-500, 500),
      gsap.utils.random(-300, 300),
      gsap.utils.random(-360, 360)
    ];

    gsap.to(letter, {
      x, y, rotation: rotate, opacity: 0,
      scrollTrigger: {
        trigger: letter,
        start: '+=1000',
        end: 'bottom+=1500',
        scrub: true,
      }
    });
  });

  gsap.from(letters.value, {
    duration: 3,
    x: () => gsap.utils.random(-500, 500),
    y: () => gsap.utils.random(-300, 300),
    opacity: 0,
    ease: 'bounce.out',
    stagger: 0.05,
    delay: 1
  });
}

function animateSections() {
  ScrollTrigger.create({
    trigger: '#sect1',
    start: 'top top',
    end: '+=1500',
    pin: true,
    scrub: true,
  });
  animateSection1()

  ScrollTrigger.create({
    trigger: '#sect2',
    start: 'top top',
    end: '+=4000',
    pin: true,
    scrub: true
  });
  animateSection2()
}

function animateSection1() {
  const rocket = document.getElementById("rocket")

  gsap.set(rocket, { bottom: `-${rocket?.clientHeight}` })

  gsap.to(rocket, {
    bottom: 0,
    scrollTrigger: {
      trigger: '#sect1',
      start: 0,
      end: '+=200',
      scrub: true,
    }
  })

}

function animateSection2() {
  const textSplit = new SplitText('#sect2 .font-oldschoool', { type: 'words' });
  gsap.from(textSplit.words, {
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#sect2',
      start: 'top',
      end: 'bottom',
      scrub: 1,
    }
  });

  gsap.set(['#innovation', '#motivation', '#creation'], {
    opacity: 0,
    scale: 0.5,
    display: 'none'
  });

  const wordTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#sect2',
      start: 'top top',
      end: '+=3000',
      scrub: true
    }
  });

  wordTimeline.to("#sect2 div", {
    scale: 1
  }, 1)

  wordTimeline.fromTo('#innovation',
    { opacity: 0, display: "none" },
    { opacity: 1, duration: 0.5, ease: 'power2.out', display: "inline" }, 2)
    .to('#innovation',
      { opacity: 0, display: 'none', duration: 0.5, ease: 'power2.in' }, 3)
    .fromTo('#motivation',
      { opacity: 0, display: "none" },
      { opacity: 1, duration: 0.5, ease: 'power2.out', display: "inline" }, 3.5)
    .to('#motivation',
      { opacity: 0, display: 'none', duration: 0.5, ease: 'power2.in' }, 4.5)
    .fromTo('#creation',
      { opacity: 0, display: "none" },
      { opacity: 1, duration: 0.5, ease: 'power2.out', display: "inline" }, 5)
}

onMounted(() => {
  letters.value = lettersRefs;
  animatePortfolioLetters();
  animateSections();
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>