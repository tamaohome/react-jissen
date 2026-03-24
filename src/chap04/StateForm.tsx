import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useId, useState } from "react";

export function StateForm() {
  // 一意なIDを準備
  const id = useId();

  // フォームとして扱う値をStateとして宣言
  const [form, setForm] = useState({ name: "山田太郎", age: 18 });

  // フォーム要素の変更をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 送信ボタンでログにメッセージ出力
  const show = () => {
    console.log(`こんにちは、${form.name} (${form.age}歳)さん！`);
  };

  return (
    <>
      <form className="mb-4 space-y-4 border border-slate-300 bg-white p-4">
        {/* State値を個々のフォーム要素に割り当て */}
        <div>
          <label htmlFor={`${id}-name`}>名前：</label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            onChange={handleForm}
            value={form.name}
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <label htmlFor={`${id}-age`}>年齢：</label>
          <input
            id={`${id}-age`}
            name="age"
            type="number"
            onChange={handleForm}
            value={form.age}
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <Button type="button" variant="info" className="text-sm" onClick={show}>
            送信
          </Button>
        </div>
        <p>
          こんにちは、{form.name} ({form.age}歳)さん！
        </p>
      </form>
      <ConsoleViewer className="rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
