import { useEffect, useRef, useState } from "react";
import { ActionIcon, Card, Group } from "@mantine/core";
import {
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
  IconRestore,
} from "@tabler/icons-react";

import { useAnimation } from "../../contexts/animation";
import { startAnimation } from "../../lib/animation";

import "./Preview.css";

export default function Preview() {
  const { selectedFrames } = useAnimation();
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  async function handlePlay() {
    const image = ref.current;
    if (image) {
      setPlay(true);
      await startAnimation(image, selectedFrames)[0];
      setPlay(false);
    }
  }

  function handleLoop() {
    setLoop(prevState => !prevState);
  }

  useEffect(() => {
    const image = ref.current;
    if (image && loop) {
      return startAnimation(image, selectedFrames, true)[1];
    }
  }, [loop, selectedFrames]);

  return (
    <div className="preview">
      {selectedFrames.length > 0 && (
        <Card radius="md" withBorder shadow="sm">
          <Card.Section>
            <img ref={ref} src={selectedFrames[0]} alt="" />
          </Card.Section>

          <Group gap="xs" justify="center">
            <ActionIcon
              color="blue"
              variant="filled"
              radius="md"
              onClick={handlePlay}
              disabled={play || loop}
            >
              <IconPlayerPlayFilled style={{ width: "18px" }} />
            </ActionIcon>
            <ActionIcon
              color="blue"
              variant="filled"
              radius="md"
              onClick={handleLoop}
              disabled={play}
            >
              {loop ? (
                <IconPlayerStopFilled style={{ width: "18px" }} />
              ) : (
                <IconRestore style={{ width: "18px" }} />
              )}
            </ActionIcon>
          </Group>
        </Card>
      )}
    </div>
  );
}
