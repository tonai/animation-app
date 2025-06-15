import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export interface ImageContext {
    scale: number
    setScale: Dispatch<SetStateAction<number>>
}

export const imageContext = createContext<ImageContext | null>(null)

export function useImage() {
    const image = useContext(imageContext)
    if (image === null) {
        throw new Error('useImage should be used inside ImageProvider')
    }
    return image;
}