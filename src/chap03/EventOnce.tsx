import { Button } from "@/components/ui/Button";
import { ConsoleViewer } from "@/components/ConsoleViewer";
import React from "react";

export function EventOnce() {
  // クリック済みかどうかを管理するためのフラグ
  const [clicked, setClicked] = React.useState(false);

  // 今日の運勢（点数）
  const [result, setResult] = React.useState("-");

  const handleClick = () => {
    // 未クリックの場合のみ運勢を算出
    if (!clicked) {
      setResult(String(Math.floor(Math.random() * 100) + 1));
      // フラグを反転
      setClicked(true);
      console.log("運勢を算出しました。");
    } else {
      console.error("既にクリック済みです。");
    }
  };

  return (
    <>
      <div className="mb-4 space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <Button onClick={handleClick} variant="info">
          結果表示
        </Button>
        <p>今日の運勢は{result}点です。</p>
      </div>
      <ConsoleViewer className="h-20 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
