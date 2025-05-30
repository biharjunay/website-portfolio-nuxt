// import { Character } from "./character" 

// export class Game {
//   private canvas: HTMLCanvasElement
//   private ctx: CanvasRenderingContext2D
//   private character: Character
//   private animationFrameId: number = 0

//   constructor(canvas: HTMLCanvasElement) {
//     this.canvas = canvas
//     this.ctx = canvas.getContext('2d')!
//     this.character = new Character(this.ctx)

//     this.handleKeyDown = this.handleKeyDown.bind(this)
//     this.handleKeyUp = this.handleKeyUp.bind(this)

//     window.addEventListener('keydown', this.handleKeyDown)
//     window.addEventListener('keyup', this.handleKeyUp)
//   }

//   private handleKeyDown(e: KeyboardEvent) {
//     this.character.updateKeys(e.key, true)
//   }

//   private handleKeyUp(e: KeyboardEvent) {
//     this.character.updateKeys(e.key, false)
//   }

//   private loop = (timestamp: number) => {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
//     this.character.draw(timestamp)
//     this.animationFrameId = requestAnimationFrame(this.loop)
//   }

//   start() {
//     this.character.draw(0) // initial draw
//     this.animationFrameId = requestAnimationFrame(this.loop)
//   }

//   destroy() {
//     cancelAnimationFrame(this.animationFrameId)
//     window.removeEventListener('keydown', this.handleKeyDown)
//     window.removeEventListener('keyup', this.handleKeyUp)
//   }
// }
