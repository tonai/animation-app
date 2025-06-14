import { useMemo, useState, type ReactNode } from "react";

import { animationContext } from "../../contexts/animation";

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider(props: AnimationProviderProps) {
  const { children } = props;
  const [selectedFrames, setSelectedFrames] = useState<string[]>([]);

  const context = useMemo(
    () => ({
      selectedFrames,
      setSelectedFrames,
    }),
    [selectedFrames]
  );

  return (
    <animationContext.Provider value={context}>
      {children}
    </animationContext.Provider>
  );
}
