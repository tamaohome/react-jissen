import { useEffect, useState, useRef } from "react";
import type { LogEntry, LogLevel } from "@/components/ConsoleViewer";

interface UsePrintCaptureOptions {
  maxLogs?: number;
}

/**
 * console.log, console.info, console.warn, console.errorをキャプチャしてログエントリを生成するカスタムフック
 * @param options.maxLogs - 保持する最大ログ数（デフォルト：1000）
 * @returns キャプチャされたログと、ログをクリアする関数
 */
export function useConsoleCapture(options: UsePrintCaptureOptions = {}) {
  const { maxLogs = 1000 } = options;
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const originalConsoleRef = useRef<{
    log?: typeof console.log;
    info?: typeof console.info;
    warn?: typeof console.warn;
    error?: typeof console.error;
  }>({});

  useEffect(() => {
    // 元のconsoleメソッドを保存
    originalConsoleRef.current = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    };

    // ログエントリを生成する関数
    const createLogEntry = (level: LogLevel, args: unknown[]): LogEntry => {
      const message = args
        .map((arg) => {
          if (typeof arg === "string") return arg;
          if (typeof arg === "object") {
            try {
              return JSON.stringify(arg, null, 2);
            } catch {
              return String(arg);
            }
          }
          return String(arg);
        })
        .join(" ");

      return {
        id: `${Date.now()}-${Math.random()}`,
        level,
        message,
        timestamp: new Date().toLocaleTimeString("ja-JP", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
    };

    // console.logをオーバーライド
    console.log = (...args: unknown[]) => {
      originalConsoleRef.current.log?.(...args);
      const entry = createLogEntry("info", args);
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, entry];
        // maxLogsを超えた場合は古いログを削除
        return newLogs.length > maxLogs ? newLogs.slice(-maxLogs) : newLogs;
      });
    };

    // console.infoをオーバーライド
    console.info = (...args: unknown[]) => {
      originalConsoleRef.current.info?.(...args);
      const entry = createLogEntry("info", args);
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, entry];
        return newLogs.length > maxLogs ? newLogs.slice(-maxLogs) : newLogs;
      });
    };

    // console.warnをオーバーライド
    console.warn = (...args: unknown[]) => {
      originalConsoleRef.current.warn?.(...args);
      const entry = createLogEntry("warn", args);
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, entry];
        return newLogs.length > maxLogs ? newLogs.slice(-maxLogs) : newLogs;
      });
    };

    // console.errorをオーバーライド
    console.error = (...args: unknown[]) => {
      originalConsoleRef.current.error?.(...args);
      const entry = createLogEntry("error", args);
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, entry];
        return newLogs.length > maxLogs ? newLogs.slice(-maxLogs) : newLogs;
      });
    };

    // クリーンアップ：元のconsoleメソッドを復元
    return () => {
      if (originalConsoleRef.current.log)
        console.log = originalConsoleRef.current.log;
      if (originalConsoleRef.current.info)
        console.info = originalConsoleRef.current.info;
      if (originalConsoleRef.current.warn)
        console.warn = originalConsoleRef.current.warn;
      if (originalConsoleRef.current.error)
        console.error = originalConsoleRef.current.error;
    };
  }, [maxLogs]);

  const clearLogs = () => setLogs([]);

  return { logs, clearLogs };
}
