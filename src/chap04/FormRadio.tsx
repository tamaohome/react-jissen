import { useState } from "react";
import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";

export function FormRadio() {
  // Stateを初期化
  const [form, setForm] = useState({
    os: "windows",
  });

  // ラジオボタンの変更時に入力値をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`使用OS：${form.os}`);
  };

  // Stateの現在値に応じて、checked属性の値を決定
  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <fieldset className="flex gap-4">
          <legend>使用OS：</legend>
          <div className="flex gap-2">
            <input
              id="os_win"
              name="os"
              type="radio"
              value="windows"
              checked={form.os === "windows"}
              onChange={handleForm}
            />
            <label htmlFor="os_win">Windows</label>
          </div>
          <div className="flex gap-2">
            <input
              id="os_mac"
              name="os"
              type="radio"
              value="mac"
              checked={form.os === "mac"}
              onChange={handleForm}
            />
            <label htmlFor="os_mac">macOS</label>
          </div>
          <div className="flex gap-2">
            <input
              id="os_lin"
              name="os"
              type="radio"
              value="linux"
              checked={form.os === "linux"}
              onChange={handleForm}
            />
            <label htmlFor="os_lin">Linux</label>
          </div>
        </fieldset>
        <Button type="button" onClick={show} variant="info">
          送信
        </Button>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
