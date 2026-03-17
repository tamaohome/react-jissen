import { useState } from "react";

interface EventMouseProps {
  defaultSrc: string;
  afterSrc: string;
  alt: string;
}

export function EventMouse({ defaultSrc, afterSrc, alt }: EventMouseProps) {
  // 現在表示している画像
  const [current, setCurrent] = useState(defaultSrc);

  // イベントハンドラー
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(defaultSrc);

  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
