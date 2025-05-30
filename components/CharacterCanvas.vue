<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { AnimationState, KnightCharacter } from '~/constants/character-assets'
import { Sprite } from '~/helpers/sprite'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let knight: Sprite
let knightScale = 2
let animationFrameId: number
let pageScrolled = 0

function initCanvas() {
  const canvas = canvasRef.value!
  const ctx = canvas.getContext("2d")!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  knight = new Sprite(ctx, KnightCharacter, { x: 0 - KnightCharacter[AnimationState.Idle].frameWidth * knightScale, y: canvas.height - KnightCharacter[AnimationState.Idle].frameHeight * knightScale }, AnimationState.Idle, knightScale)
  animationFrameId = requestAnimationFrame(gameLoop)
}

function gameLoop(timestamp: number) {
  const canvas = canvasRef.value!
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  knight.draw(timestamp)
  animationFrameId = requestAnimationFrame(gameLoop)
}

function handleResize() {
  const canvas = canvasRef.value!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function handleScroll(e: Event) {
  knight.updatePosition(window.scrollY - pageScrolled, 0)
  pageScrolled = window.scrollY
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})
</script>
