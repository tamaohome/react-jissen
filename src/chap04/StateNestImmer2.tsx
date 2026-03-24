import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";
import { useImmer } from "use-immer";

export function StateNestImmer2() {
  // フォームとして扱う値をStateとして宣言
  const [form, setForm] = useImmer({
    name: "山田太郎",
    address: {
      prefecture: "広島県",
      city: "榛原町",
    },
  });

  const handleNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 要素名を "." で分解（要素名が "xxxx.xxxx" であることが前提）
    const ns = e.target.name.split(".");
    setForm((form) => {
      // 階層に応じて、代入先を振り替え
      if (ns.length === 1) {
        // キーを取得
        const key = ns[0] as keyof typeof form;

        // 値が文字列でない場合は処理を中断
        if (typeof form[key] !== "string") {
          return;
        }
        (form[key] as string) = e.target.value;
      } else {
        // キーを取得
        const key = ns[0] as keyof typeof form;
        const addressKey = ns[1] as keyof typeof form.address;

        // 値が文字列でない場合は処理を中断
        if (
          typeof form[key] === "object" &&
          form[key][addressKey] &&
          typeof form[key][addressKey] !== "string"
        ) {
          return;
        }
        const nestedForm = form[key] as typeof form.address;
        nestedForm[addressKey] = e.target.value;
      }
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
            onChange={handleNest}
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
            name="address.prefecture"
            type="text"
            onChange={handleNest}
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
            name="address.city"
            type="text"
            onChange={handleNest}
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
