import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";

const schema = yup.object({
  name: yup
    .string()
    .label("名前")
    .trim()
    .lowercase()
    .transform((value) => value.normalize("NFKC"))
    .required("${label}は必須入力です。")
    .max(20, "${label}は${max}文字以内で入力してください。"),
  gender: yup.string().label("性別").required("${label}は必須入力です。"),
  email: yup
    .string()
    .label("メールアドレス")
    .required("${label}は必須入力です。")
    .email("${label}の形式が不正です。"),
  memo: yup
    .string()
    .label("備考")
    .required("${label}は必須入力です。")
    .min(10, "${label}は${min}文字以上で入力してください。")
    .test(
      "ng",
      ({ label }) => `${label}にNGワードが含まれています`,
      (value) => {
        const ngs = ["暴力", "死", "グロ"];
        return !ngs.some((ng) => value.includes(ng));
      },
    ),
});

export function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "名無権兵衛",
      email: "admin@example.com",
      gender: "male",
      memo: "",
    },
    // Yupに検証を委ねる
    resolver: yupResolver(schema),
  });

  // 送信時の処理を準備
  const onsubmit = (data: yup.InferType<typeof schema>) => console.log(data);
  const onerror = (err: typeof errors) => console.log(err);

  return (
    <>
      <section className="inline-block rounded-sm border border-slate-300 bg-white p-8">
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate className="space-y-4">
          <div>
            <label htmlFor="name">名前：</label>
            <br />
            <input
              id="name"
              type="text"
              {...register("name")}
              className="ml-8 w-40 rounded-sm border border-slate-300 p-0.5"
            />
            <div className="text-red-500">{errors.name?.message}</div>
          </div>
          <div className="space-x-2">
            <label>性別：</label>
            <br />
            <label className="ml-8">
              <input id="male" type="radio" value="male" {...register("gender")} />
              男性
            </label>
            <label>
              <input id="female" type="radio" value="female" {...register("gender")} />
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
              {...register("email")}
              className="ml-8 w-80 rounded-sm border border-slate-300 p-0.5 font-mono"
            />
            <div className="text-red-500">{errors.email?.message}</div>
          </div>
          <div>
            <label htmlFor="memo">備考：</label>
            <br />
            <textarea
              id="memo"
              {...register("memo")}
              className="ml-8 h-20 w-80 rounded-sm border border-slate-300 p-0.5"
            />
            <div className="text-red-500">{errors.memo?.message}</div>
          </div>
          <div>
            <Button type="submit" variant="info">
              送信
            </Button>
          </div>
        </form>
      </section>
      <ConsoleViewer className="mt-4 rounded-sm border border-slate-300 bg-white p-2" />
    </>
  );
}
