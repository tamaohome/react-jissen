import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useImmer } from "use-immer";

export function StateNestImmer() {
  // フォームとして扱う値をStateとして宣言
  const [form, setForm] = useImmer({
    name: "山田太郎",
    address: {
      prefecture: "広島県",
      city: "榛原町",
    },
  });

  // 1段目の要素を更新するためのハンドラー
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    // キーを取得し、値が文字列でない場合は処理を中断
    const key = e.target.name as keyof typeof form;
    if (typeof form[key] !== "string") {
      return;
    }

    setForm((form) => {
      (form[key] as string) = e.target.value;
    });
  };

  // 2段目の要素を更新するためのハンドラー
  const handleFormNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    // キーを取得し、値が文字列でない場合は処理を中断
    const key = e.target.name as keyof typeof form.address;
    if (typeof form.address[key] !== "string") {
      return;
    }

    setForm((form) => {
      form.address[key] = e.target.value;
    });
  };

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
