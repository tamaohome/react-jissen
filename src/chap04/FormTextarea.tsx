import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function FormTextarea() {
  // Stateを初期化
  const [form, setForm] = useState({
    comment: `さまざまなフォーム要素を...`,
  });

  // テキストエリアの変更時に入力値をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`コメント：${form.comment}`);
  };

  return (
    <>
      <form className="flex flex-col gap-4 rounded-sm border border-slate-300 bg-white p-4">
        <div className="flex gap-2">
          <label htmlFor="comment">コメント：</label>
          <textarea
            id="comment"
            name="comment"
            cols={30}
            rows={7}
            value={form.comment}
            onChange={handleForm}
            className="rounded-sm border border-slate-300 px-1"
          />
        </div>
        <Button onClick={show}>送信</Button>
      </form>
      <ConsoleViewer className="mt-8 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
