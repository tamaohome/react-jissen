import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function FormList() {
  // Stateを初期化
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  // リストボックスの変更時に入力値をStateに反映
  const handleFormList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択値を格納するための配列
    const data = [];

    // <option>要素を順に走査し、選択状態にある値を配列に追加
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }

    // 最終的な結果をStateに反映
    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <div className="flex gap-2">
          <label htmlFor="animal">好きな動物：</label>
          <br />
          <select
            id="animal"
            name="animal"
            value={form.animal}
            size={4}
            multiple={true}
            onChange={handleFormList}
            className="rounded-sm border border-slate-300 p-1"
          >
            <option value="dog">イヌ</option>
            <option value="cat">ネコ</option>
            <option value="hamster">ハムスター</option>
            <option value="rabbit">ウサギ</option>
          </select>
        </div>
        <Button type="button" onClick={show}>
          送信
        </Button>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
