import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function StateBasic({ init }: { init: number }) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    // 複数の State が更新された場合、バッチング（まとめて後から更新）処理となる
    setCount(count + 1); // 元の値 +1
    setCount(count + 1); // 元の値 +1 (合計 +2 にはならない)
  };

  const handleClickFixed = () => {
    // 関数型の引数を渡すことで、常に最新の値となる
    setCount((c) => c + 1); // 元の値 +1
    setCount((c) => c + 1); // 更新された値 +1 (合計 +2 になる)
  };

  return (
    <div className="bg-white p-8 text-slate-700">
      <Button onClick={handleClick}>2回カウント</Button>{" "}
      <Button onClick={handleClickFixed}>2回カウント (修正版)</Button>
      <p className="pt-4">{count}回クリックされました</p>
    </div>
  );
}
