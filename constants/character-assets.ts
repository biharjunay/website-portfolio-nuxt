export const frameWidth = 100
export const frameHeight = 64

export enum AnimationState {
    Idle = 'idle',
    Run = 'run'
}

export type CharacterConfig = {
    totalFrames: number,
    fps: number
    src: string,
    frameWidth: number,
    frameHeight: number
}

export type CharacterAssets = Record<AnimationState, CharacterConfig>

export const KnightCharacter: CharacterAssets = {
    [AnimationState.Idle]: {
        src: new URL("@/assets/images/characters/idle.png", import.meta.url).href,
        totalFrames: 4,
        fps: 4,
        frameWidth: 100,
        frameHeight: 64
    },
    [AnimationState.Run]: {
        src: new URL("@/assets/images/characters/walking.png", import.meta.url).href,
        totalFrames: 4,
        fps: 5,
        frameWidth: 100,
        frameHeight: 64
    }
}