import type { UseTreeReturnType } from "@mantine/core";
import { createContext, useContext } from "react";

export const menuContext = createContext<UseTreeReturnType |null>(null)

export function useMenu() {
    const menu = useContext(menuContext)
    if (menu === null) {
        throw new Error('useMenu should be used inside MenuProvider')
    }
    return menu;
}