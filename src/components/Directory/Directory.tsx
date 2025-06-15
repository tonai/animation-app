import { useEffect, useMemo } from "react";
import { Badge, Button, Card } from "@mantine/core";

import menu from "../../assets/menu.json";
import { useMenu } from "../../contexts/menu";
import { useAnimation } from "../../contexts/animation";
import { isImage } from "../../lib/menu";
import type { Menu } from "../../types/menu";

import "./Directory.css";

export default function Directory() {
  const tree = useMenu();
  const { selectedFrames, setSelectedFrames } = useAnimation();

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
  const allSelected = selectedFrames.length === files.length;

  function handleClick(file: string) {
    return () =>
      setSelectedFrames((prevState) => {
        const index = prevState.indexOf(file);
        if (index >= 0) {
          return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
        }
        return prevState.concat(file);
      });
  }

  function handleSelect() {
    if (allSelected) {
      setSelectedFrames([]);
    } else {
      setSelectedFrames(files);
    }
  }

  useEffect(() => {
    setSelectedFrames([]);
  }, [files]);

  return (
    <div className="directory">
      <div className="directory__header">
        <Button m="sm" onClick={handleSelect}>
          {allSelected ? "Deselect all" : "Select all"}
        </Button>
      </div>
      <ul className="directory__list">
        {files.map((file) => {
          const index = selectedFrames.indexOf(file);
          return (
            <li key={file} className="directory__item">
              <Card
                radius="md"
                withBorder
                onClick={handleClick(file)}
                shadow="sm"
                bg={index >= 0 ? "blue.1" : ""}
              >
                <Card.Section>
                  <img src={file} alt="" title={file} />
                </Card.Section>
              </Card>
              {index >= 0 && (
                <Badge size="md" circle className="directory__badge">
                  {index + 1}
                </Badge>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
