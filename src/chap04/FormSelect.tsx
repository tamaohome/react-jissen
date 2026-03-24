import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function FormSelect() {
  // Stateを初期化
  const [form, setForm] = useState({ animal: "rabbit" });

  // 選択ボックスの変更時に入力値をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <label htmlFor="animal">好きな動物：</label>
        <select
          id="animal"
          name="animal"
          value={form.animal}
          onChange={handleForm}
          className="rounded-sm border border-slate-300 p-1"
        >
          <option value="dog">イヌ</option>
          <option value="cat">猫</option>
          <option value="hamster">ハムスター</option>
          <option value="rabbit">ウサギ</option>
        </select>
        <Button type="button" variant="info" onClick={show}>
          送信
        </Button>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
