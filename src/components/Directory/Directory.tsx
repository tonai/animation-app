import { useMemo } from "react";
import { Card } from "@mantine/core";

import { useMenu } from "../../contexts/menu";

import menu from "../../assets/menu.json";
import { isImage } from "../../lib/menu";
import type { Menu } from "../../types/menu";

import "./Directory.css";

export default function Directory() {
  const tree = useMenu();

  const files = useMemo(() => {
    const path = tree.selectedState?.[0]
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

  return (
    <ul className="directory">
      {files.map((file) => (
        <li key={file}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img src={file} alt="" title={file} />
            </Card.Section>
          </Card>
        </li>
      ))}
    </ul>
  );
}
