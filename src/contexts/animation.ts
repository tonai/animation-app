import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export interface AnimationContext {
    selectedFrames: string[]
    setSelectedFrames: Dispatch<SetStateAction<string[]>>
}

export const animationContext = createContext<AnimationContext | null>(null)

export function useAnimation() {
    const animation = useContext(animationContext)
    if (animation === null) {
        throw new Error('useAnimation should be used inside AnimationProvider')
    }
    return animation;
}