import { Button, Slider } from "@mantine/core";

import { useAnimation } from "../../contexts/animation";
import { useMenu } from "../../contexts/menu";
import { useImage } from "../../contexts/image";

import "./Header.css";

export default function Header() {
  const { files } = useMenu();
  const { selectedFrames, setSelectedFrames } = useAnimation();
  const { scale, setScale } = useImage();
  const allSelected = selectedFrames.length === files.length;

  function handleSelect() {
    if (allSelected) {
      setSelectedFrames([]);
    } else {
      setSelectedFrames(files);
    }
  }

  return (
    <div className="header">
      <Slider
        className="header__scale"
        m="sm"
        defaultValue={1}
        marks={[
          { value: 0.25, label: "25%" },
          { value: 0.5, label: "50%" },
          { value: 1, label: "100%" },
          { value: 1.5, label: "150%" },
          { value: 2, label: "200%" },
        ]}
        min={0.25}
        max={2}
        step={0.25}
        value={scale}
        onChange={setScale}
      />

      <Button m="sm" onClick={handleSelect}>
        {allSelected ? "Deselect all" : "Select all"}
      </Button>
    </div>
  );
}
