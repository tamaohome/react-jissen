import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function StateParent() {
  const [count, setCount] = useState(0);
  const update = (step: number) => setCount((c) => c + step);

  return (
    <div className="bg-white p-8 text-slate-700">
      <p className="pb-4">総カウント: {count}</p>
      <StateCounter step={1} onUpdate={update} />{" "}
      <StateCounter step={5} onUpdate={update} />{" "}
      <StateCounter step={-1} onUpdate={update} />
    </div>
  );
}

interface StateCounterProps {
  step: number;
  onUpdate: (step: number) => void;
}

const StateCounter = ({ step, onUpdate }: StateCounterProps) => {
  const handleClick = () => onUpdate(step);
  return <Button onClick={handleClick}>{step}</Button>;
};
