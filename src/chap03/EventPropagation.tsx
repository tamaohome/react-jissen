import { ConsoleViewer } from "@/components/ConsoleViewer";

type EventPhase = "bubble" | "capture";

interface EventPropagationProps {
  eventPhase?: EventPhase;
  suppressPropagation?: boolean;
}

export function EventPropagation({
  eventPhase = "bubble",
  suppressPropagation = false,
}: EventPropagationProps) {
  const handleParent = (e: React.MouseEvent) => {
    if (suppressPropagation) {
      e.stopPropagation();
    }
    console.log("#parent run...");
  };
  const handleMy = (e: React.MouseEvent) => {
    if (suppressPropagation) {
      e.stopPropagation();
    }
    console.log("#my run...");
  };
  const handleChild = (e: React.MouseEvent) => {
    if (suppressPropagation) {
      e.stopPropagation();
    }
    console.log("#child run...");
  };

  const useCapture = eventPhase === "capture";

  return (
    <>
      <div
        id="parent"
        {...(useCapture
          ? { onClickCapture: handleParent }
          : { onClick: handleParent })}
        className="mb-4 rounded-sm border border-slate-300 bg-slate-200 p-4"
      >
        親要素
        <div
          id="my"
          {...(useCapture
            ? { onClickCapture: handleMy }
            : { onClick: handleMy })}
          className="m-4 rounded-sm border border-slate-300 bg-white/40 p-4"
        >
          現在要素
          <a
            id="child"
            href="https://wings.msn.to"
            target="_blank"
            {...(useCapture
              ? { onClickCapture: handleChild }
              : { onClick: handleChild })}
            className="m-4 block rounded-sm border border-slate-300 bg-white/40 p-4 text-blue-700 underline"
          >
            子要素（リンク）
          </a>
        </div>
      </div>
      <ConsoleViewer className="h-20 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
