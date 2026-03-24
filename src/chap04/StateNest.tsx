import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function StateNest() {
  // 入れ子の配列をStateとして宣言
  const [form, setForm] = useState({
    name: "山田太郎",
    address: {
      prefecture: "広島県",
      city: "榛原町",
    },
  });

  // 1段目の要素を更新するためのハンドラー
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 2段目の要素を更新するためのハンドラー
  const handleFormNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      address: {
        ...form.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  // 送信ボタンクリックでフォーム情報をログに出力
  const show = () => {
    console.log(`${form.name}（${form.address.prefecture}・${form.address.city}）`);
  };

  return (
    <>
      <form className="space-y-4 rounded-sm border border-slate-300 bg-white p-4">
        <div>
          <label htmlFor="name" className="inline-block w-40">
            名前：
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleForm}
            value={form.name}
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <label htmlFor="prefecture" className="inline-block w-40">
            住所（都道府県）：
          </label>
          <input
            id="prefecture"
            name="prefecture"
            type="text"
            onChange={handleFormNest}
            value={form.address.prefecture}
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <label htmlFor="city" className="inline-block w-40">
            住所（市町村）：
          </label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={handleFormNest}
            value={form.address.city}
            className="rounded-sm border border-slate-300 p-1"
          />
        </div>
        <div>
          <Button type="button" variant="info" onClick={show}>
            送信
          </Button>
        </div>
      </form>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
