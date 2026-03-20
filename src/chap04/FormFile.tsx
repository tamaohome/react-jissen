import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

export function FormFile() {
  // ファイル入力ボックスへの参照
  const file = useRef<HTMLInputElement>(null);

  // 送信ボタンクリックでファイル情報をログ出力
  function show() {
    const fs = file.current?.files;

    // ファイルが選択されていない場合は処理を中断（ガード節）
    if (!fs) {
      console.log("ファイルが選択されていません");
      return;
    }

    // 取得したファイル群を順に走査
    for (const f of fs) {
      console.log(`ファイル名：${f.name}`);
      console.log(`種類：${f.type}`);
      console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);
    }
  }

  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <input
          type="file"
          ref={file}
          multiple
          className="rounded-sm border border-slate-300 p-1 text-sm text-slate-600"
        />
        <Button type="button" onClick={show} variant="info">
          送信
        </Button>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
