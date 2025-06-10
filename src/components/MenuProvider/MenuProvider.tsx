import type { ReactNode } from "react";
import { useTree } from "@mantine/core";

import { menuContext } from "../../contexts/menu";

interface MenuProviderProps {
  children: ReactNode;
}

export default function MenuProvider(props: MenuProviderProps) {
  const { children } = props;
  const tree = useTree();
  // console.log(tree.selectedState)
  return <menuContext.Provider value={tree}>{children}</menuContext.Provider>;
}
