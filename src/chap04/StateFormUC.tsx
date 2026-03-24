import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

export function StateFormUC() {
  // 一意なIDを準備

  // React要素への参照を準備
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  // 要素（参照）経由で入力値を準備
  const show = () => {
    console.log(`こんにちは、${name.current?.value} (${age.current?.value}歳)さん！`);
  };

  return (
    <>
      <form className="mb-4 space-y-4 border border-slate-300 bg-white p-4">
        {/* State値を個々のフォーム要素に割り当て */}
        <div>
          <label htmlFor="name">名前：</label>
          <input
            id="name"
            name="name"
            type="text"
            ref={name}
            defaultValue="佐藤理央"
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <label htmlFor="age">年齢：</label>
          <input
            id="age"
            name="age"
            type="number"
            ref={age}
            defaultValue="18"
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <Button type="button" variant="info" className="text-sm" onClick={show}>
            送信
          </Button>
        </div>
      </form>
      <ConsoleViewer className="rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
