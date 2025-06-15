import { Tree } from "@mantine/core";

import menu from "../../assets/menu.json";
import { useMenu } from "../../contexts/menu";
import { getTree } from "../../lib/menu";
import type { Menu } from "../../types/menu";

import "./Menu.css";

const data = getTree(menu);

export default function Menu() {
  const { tree } = useMenu();

  return (
    <div className="menu">
      <Tree data={data} selectOnClick tree={tree} />
    </div>
  );
}
