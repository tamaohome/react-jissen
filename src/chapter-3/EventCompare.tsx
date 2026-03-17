import React, { useState } from "react";

type EventType = "mouseenter" | "mouseover";

interface EventCompareProps {
  type?: EventType;
}

export function EventCompare({ type = "mouseenter" }: EventCompareProps) {
  const [result, setResult] = useState("");

  const handleIn = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;
    // ログテキストを次の行に追加
    const eventName = type === "mouseover" ? "Over" : "Enter";
    setResult((r) => `${r}${eventName} :${id}<br/>`);
  };

  const handleOut = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;
    // ログテキストを次の行に追加
    const eventName = type === "mouseover" ? "Out" : "Leave";
    setResult((r) => `${r}${eventName} :${id}<br/>`);
  };

  const eventHandlers =
    type === "mouseover"
      ? { onMouseOver: handleIn, onMouseOut: handleOut }
      : { onMouseEnter: handleIn, onMouseLeave: handleOut };

  return (
    <>
      <div
        id="outer"
        {...eventHandlers}
        className="border-slate-500 bg-olive-200 p-4"
      >
        外 (outer)
        <p id="inner" className="mt-4 border-slate-500 bg-olive-50 p-4">
          内 (inner)
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </>
  );
}
