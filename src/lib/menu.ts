import type { TreeNodeData } from "@mantine/core";

import type { Menu } from "../types/menu";

export const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];
export const IMAGE_DIR = "assets";

export function isImage(file: string) {
  const extension = file.substring(file.lastIndexOf("."));
  return IMAGE_EXTENSIONS.includes(extension);
}

export function isEntry(entry: [string, string[] | Menu]): entry is [string, Menu] {
  return entry[0] !== "_contents";
}

export function notNull<T>(value: T | null): value is T {
    return value !== null
}

export function getTree(tree: Menu, parents: string[] = [IMAGE_DIR]): TreeNodeData[] {
  return Object.entries(tree)
    .filter(isEntry)
    .map(([key, value]) => {
      const currentParents = parents.concat(key);
      const children = getTree(value, currentParents)
      const contents = value._contents.filter(isImage)
      if (children.length === 0 && contents.length === 0) {
        return null
      }
      return {
        label: key,
        value: `${currentParents.join("/")}`,
        children,
      };
    })
    .filter(notNull);
}
