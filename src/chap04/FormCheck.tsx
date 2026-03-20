import { useState } from "react";
import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";

export function FormCheck() {
  // Stateを初期化
  const [form, setForm] = useState({
    agreement: true,
  });

  // チェックボックスの変更時に入力値をStateに反映
  const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`同意確認：${form.agreement ? "同意" : "反対"}`);
  };

  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <label htmlFor="agreement">同意します：</label>
        <input
          id="agreement"
          name="agreement"
          type="checkbox"
          checked={form.agreement}
          onChange={handleFormCheck}
        />
        <br />
        <Button type="button" onClick={show} variant="info">
          送信
        </Button>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
