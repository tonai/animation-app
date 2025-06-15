import type { UseTreeReturnType } from "@mantine/core";
import { createContext, useContext } from "react";

export interface MenuContext {
    tree: UseTreeReturnType
    files: string[]
}

export const menuContext = createContext<MenuContext | null>(null)

export function useMenu() {
    const menu = useContext(menuContext)
    if (menu === null) {
        throw new Error('useMenu should be used inside MenuProvider')
    }
    return menu;
}