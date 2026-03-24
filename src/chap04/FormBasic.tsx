import { useForm } from "react-hook-form";
import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";

export function FormBasic() {
  // 既定値を準備
  const defaultValues = {
    name: "名無権兵衛",
    email: "admin@example.com",
    gender: "male",
    memo: "",
  };

  // フォームを初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
  });

  // 送信時に4000msの遅延を発生
  const onsubmit = (data: typeof defaultValues) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
      }, 4000);
    });
  };
  const onerror = (err: typeof errors) => console.log(err);

  return (
    <>
      <section className="inline-block rounded-sm border border-slate-300 bg-white p-8">
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate className="space-y-4">
          {/* 検証ルールなどをフォームに紐づけ */}
          <div>
            <label htmlFor="name">名前：</label>
            <br />
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "名前は必須入力です。",
                maxLength: {
                  value: 20,
                  message: "名前は20文字以内にしてください。",
                },
              })}
              className="ml-8 w-40 rounded-sm border border-slate-300 p-0.5"
            />
            <div className="text-red-500">{errors.name?.message}</div>
          </div>
          <div className="space-x-2">
            <label>性別：</label>
            <br />
            <label className="ml-8">
              <input
                id="male"
                type="radio"
                value="male"
                {...register("gender", {
                  required: "性別は必須です。",
                })}
              />
              男性
            </label>
            <label>
              <input
                id="female"
                type="radio"
                value="female"
                {...register("gender", {
                  required: "性別は必須です。",
                })}
              />
              女性
            </label>
            <div className="text-red-500">{errors.gender?.message}</div>
          </div>
          <div>
            <label htmlFor="email">メールアドレス：</label>
            <br />
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "メールアドレスは必須入力です。",
                pattern: {
                  value: /^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i,
                  message: "メールアドレスの形式が不正です。",
                },
              })}
              className="ml-8 w-80 rounded-sm border border-slate-300 p-0.5 font-mono"
            />
            <div className="text-red-500">{errors.email?.message}</div>
          </div>
          <div>
            <label htmlFor="memo">備考：</label>
            <br />
            <textarea
              id="memo"
              {...register("memo", {
                required: "備考は必須入力です。",
                minLength: {
                  value: 10,
                  message: "備考は10文字以上にしてください。",
                },
                validate: {
                  ng: (value) => {
                    // 不適切ワードを準備
                    const ngs = ["暴力", "死", "グロ"];
                    // 入力文字列に不適切ワードが含まれているかを判定
                    return ngs.some((ng) => value.includes(ng))
                      ? "備考にNGワードが含まれています。"
                      : true;
                  },
                },
              })}
              className="ml-8 h-20 w-80 rounded-sm border border-slate-300 p-0.5"
            />
            <div className="text-red-500">{errors.memo?.message}</div>
          </div>
          <div>
            <Button type="submit" disabled={!isDirty || !isValid || isSubmitting} variant="info">
              送信
            </Button>
            {isSubmitting && <div>...送信中...</div>}
          </div>
        </form>
      </section>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
