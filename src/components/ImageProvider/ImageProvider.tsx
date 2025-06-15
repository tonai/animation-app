import { useMemo, useState, type ReactNode } from "react";

import { imageContext } from "../../contexts/image";

interface ImageProviderProps {
  children: ReactNode;
}

export default function ImageProvider(props: ImageProviderProps) {
  const { children } = props;
  const [scale, setScale] = useState(1);

  const context = useMemo(
    () => ({
      scale,
      setScale,
    }),
    [scale]
  );

  return (
    <imageContext.Provider value={context}>
      {children}
    </imageContext.Provider>
  );
}
