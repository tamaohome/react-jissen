import { useEffect, useRef, useCallback, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useConsoleCapture } from "@/hooks/useConsoleCapture";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type LogLevel = "info" | "warn" | "error" | "success";

const LOG_LEVEL_COLORS: Record<LogLevel, string> = {
  info: "text-blue-600",
  warn: "text-amber-600",
  error: "text-red-600",
  success: "text-emerald-600",
};

export interface LogEntry {
  id: string;
  level: LogLevel;
  message: string;
  timestamp: string;
}

interface ConsoleViewerProps {
  className?: string;
}

interface LogEntryItemProps {
  log: LogEntry;
}

function LogEntryItem({ log }: LogEntryItemProps) {
  return (
    <li className="flex gap-2 leading-relaxed transition-colors">
      <time className="w-13 shrink-0 tracking-tighter">{log.timestamp}</time>
      <span
        className={clsx(
          "min-w-17 shrink-0 font-bold",
          LOG_LEVEL_COLORS[log.level],
        )}
        aria-label={`Log level: ${log.level}`}
      >
        [{log.level.toUpperCase()}]
      </span>
      <span className="break-all">{log.message}</span>
    </li>
  );
}

export function ConsoleViewer({ className }: ConsoleViewerProps) {
  const { logs } = useConsoleCapture();
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // スクロール位置の監視（デバウンス処理付き）
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    // 前回のタイムアウトをクリア
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // デバウンス：150msの遅延後にスクロール位置を判定
    scrollTimeoutRef.current = setTimeout(() => {
      if (!scrollContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShouldAutoScroll(isAtBottom);
    }, 150);
  }, []);

  // ログ更新時の自動スクロール
  useEffect(() => {
    if (shouldAutoScroll && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [logs, shouldAutoScroll]);

  // クリーンアップ：アンマウント時にタイムアウトをクリア
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <ul
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className={cn(
        "max-h-60 flex-1 space-y-1 overflow-y-auto font-mono text-xs",
        className,
      )}
    >
      {logs.length === 0 ? (
        <li className="leading-relaxed">No events</li>
      ) : (
        logs.map((log) => <LogEntryItem key={log.id} log={log} />)
      )}
    </ul>
  );
}
