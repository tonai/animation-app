import { useEffect } from "react";
import { Badge, Card } from "@mantine/core";

import { useMenu } from "../../contexts/menu";
import { useAnimation } from "../../contexts/animation";
import { useImage } from "../../contexts/image";

import "./Directory.css";

export default function Directory() {
  const { files } = useMenu();
  const { selectedFrames, setSelectedFrames } = useAnimation();
  const { scale } = useImage();

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

  useEffect(() => {
    setSelectedFrames([]);
  }, [files]);

  return (
    <ul className="directory">
      {files.map((file) => {
        const index = selectedFrames.indexOf(file);
        return (
          <li
            key={file}
            className="directory__item"
            style={{
              scale: scale,
              width: "fit-content",
              marginBottom: `${scale * 100 - 100}%`,
              marginRight: `${scale * 100 - 100}%`,
              transformOrigin: "top left",
            }}
          >
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
              <Badge
                size="md"
                circle
                className="directory__badge"
                style={{
                  scale: 1 / scale,
                  transformOrigin: "top left",
                }}
              >
                {index + 1}
              </Badge>
            )}
          </li>
        );
      })}
    </ul>
  );
}
