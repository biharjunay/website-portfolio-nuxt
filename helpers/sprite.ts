import { AnimationState, frameHeight, frameWidth, type CharacterAssets } from "~/constants/character-assets"

export class Sprite {
  public ctx: CanvasRenderingContext2D
  public fps!: number
  public position: { x: number, y: number }
  public image = new Image()
  public totalFrames!: number
  public frameIndex = 0
  public lastFrameTime = 0
  public frameWidth!: number
  public frameHeight!: number
  public imageLoaded = false
  public updatedPosition: {x: number, y: number} | null = null
  public scale: number

  public characterAssets: CharacterAssets

  constructor(ctx: CanvasRenderingContext2D, characterAssets: CharacterAssets, position = { x: 0, y: 0 }, initialState = AnimationState.Idle, scale = 1) {
    this.ctx = ctx
    this.position = position
    this.characterAssets = characterAssets
    this.scale = scale
    this.loadAnimation(initialState)
  }

  public loadAnimation(state: AnimationState) {
    const assets = this.characterAssets[state]
    if (!assets) {
      console.error("Assets not found")
      return
    }
    this.totalFrames = assets.totalFrames
    this.fps = assets.fps
    this.frameWidth = assets.frameWidth
    this.frameHeight = assets.frameHeight
    this.image.src = assets.src
    this.image.onload = () => {
      this.imageLoaded = true
    }
  }

  public updatePosition(x: number, y: number) {
    this.updatedPosition = {x, y}
  }

  public draw(timestamp: number) {
    if (!this.imageLoaded) return

    if (timestamp - this.lastFrameTime > 1000 / this.fps) {
      this.frameIndex = (this.frameIndex + 1) % this.totalFrames
      this.lastFrameTime = timestamp
    }

    if (this.updatedPosition) {
      this.loadAnimation(AnimationState.Run)
      this.position.x += this.updatedPosition.x
      this.position.y += this.updatedPosition.y
      this.updatedPosition = null
    } else {
      this.loadAnimation(AnimationState.Idle)
    }

    this.ctx.drawImage(
      this.image,
      this.frameIndex * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.position.x,
      this.position.y,
      this.frameWidth * this.scale,
      this.frameHeight * this.scale
    )
  }
}