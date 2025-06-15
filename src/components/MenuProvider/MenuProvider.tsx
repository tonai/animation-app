import { useMemo, type ReactNode } from "react";
import { useTree } from "@mantine/core";

import menu from "../../assets/menu.json";
import { menuContext } from "../../contexts/menu";
import { isImage } from "../../lib/menu";
import type { Menu } from "../../types/menu";

interface MenuProviderProps {
  children: ReactNode;
}

export default function MenuProvider(props: MenuProviderProps) {
  const { children } = props;
  const tree = useTree();

  const files = useMemo(() => {
    const path = tree.selectedState?.[0];
    const selectedDirs = path?.split("/").slice(1);
    if (selectedDirs) {
      let directory = menu as Menu;
      for (const dir of selectedDirs) {
        directory = directory[dir] as Menu;
      }
      return directory?._contents
        .filter(isImage)
        .map((file) => `${path}/${file}`);
    }
    return [];
  }, [tree.selectedState]);

  const context = useMemo(
    () => ({
      tree,
      files,
    }),
    [tree, files]
  );

  return (
    <menuContext.Provider value={context}>{children}</menuContext.Provider>
  );
}
