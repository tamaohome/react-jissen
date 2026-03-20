import { useState } from "react";
import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";

export function FormCheckMulti() {
  // Stateを初期化
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  // チェックボックスの変更時に入力値をStateに反映
  const handleFormMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 元の配列 (State) を複製
    const fa = [...form.animal];

    // チェック時は配列に値を追加、チェック解除時は削除
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    // 編集済みの配列をStateに反映
    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  // チェックの有無を個々のチェックボックスに反映
  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <fieldset className="flex gap-4">
          <legend>好きな動物：</legend>
          <div className="flex gap-2">
            <input
              id="animal_dog"
              name="animal"
              type="checkbox"
              value="dog"
              checked={form.animal.includes("dog")}
              onChange={handleFormMulti}
            />
            <label htmlFor="animal_dog">イヌ</label>
          </div>
          <div className="flex gap-2">
            <input
              id="animal_cat"
              name="animal"
              type="checkbox"
              value="cat"
              checked={form.animal.includes("cat")}
              onChange={handleFormMulti}
            />
            <label htmlFor="animal_cat">ネコ</label>
          </div>
          <div className="flex gap-2">
            <input
              id="animal_hamster"
              name="animal"
              type="checkbox"
              value="hamster"
              checked={form.animal.includes("hamster")}
              onChange={handleFormMulti}
            />
            <label htmlFor="animal_hamster">ハムスター</label>
          </div>
          <div className="flex gap-2">
            <input
              id="animal_rabbit"
              name="animal"
              type="checkbox"
              value="rabbit"
              checked={form.animal.includes("rabbit")}
              onChange={handleFormMulti}
            />
            <label htmlFor="animal_rabbit">ウサギ</label>
          </div>
        </fieldset>
        <Button type="button" onClick={show}>
          送信
        </Button>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
