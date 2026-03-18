import type React from "react";

export function EventKey() {
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === "j") {
      alert("名前は20文字以内で入力してください。");
    }
  };

  return (
    <section className="bg-white p-4">
      <form className="mb-4 flex gap-4">
        <label>名前を入力</label>
        <input
          type="text"
          className="w-40 border bg-white"
          onKeyDown={handleKey}
        />
        <div className="flex-1"></div>
      </form>
      <p className="text-sm text-slate-500">
        入力欄をフォーカス中に <code>Ctrl(cmd)+J</code> を押すとダイアログが表示
      </p>
    </section>
  );
}
