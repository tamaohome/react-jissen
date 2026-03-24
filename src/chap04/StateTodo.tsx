import { Button } from "@/components/ui/Button";
import { useState } from "react";
import clsx from "clsx";

interface Todo {
  id: number;
  title: string;
  created: Date;
  isDone: boolean;
}

export function StateTodo() {
  // 次のソート方向（降順であればtrue）
  const [desc, setDesc] = useState(true);
  // 項目idの最大値（登録都度にインクリメント）
  const [maxId, setMaxId] = useState(1);
  // 入力値（title）、Todoリスト（todo）
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 「追加」ボタンでTodo項目を追加
  const handleClick = () => {
    // 新規のTodoを追加
    setTodo([
      // 既存のTodoを展開（複製）してから新規のTodoを追加
      ...todo,
      {
        id: maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
    setMaxId((id) => id + 1);
    setTitle(""); // 入力値をリセット
  };

  // Enter押下時の処理（handleClickと同様の処理を実行）
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick();
  };

  // 「済」ボタンでTodo項目を完了状態に
  const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 配列を走査し、id値が等しいものを検索
    setTodo(
      todo.map((item) => {
        if (item.id === Number(e.currentTarget.dataset.id)) {
          return {
            ...item,
            isDone: true,
          };
        } else {
          return item;
        }
      }),
    );
  };

  // 「削除」ボタンで該当するTodo項目を破棄
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodo(todo.filter((item) => item.id !== Number(e.currentTarget.dataset.id)));
  };

  // 項目のソート
  const handleSort = () => {
    // 既存のTodoリストを複製の上でソート
    const sorted = [...todo];
    sorted.sort((m, n) => {
      // desc値に応じて昇順／降順を決定
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    // desc値を反転
    setDesc((d) => !d);
    // ソート済みのリストを再セット
    setTodo(sorted);
  };

  return (
    <section className="inline-block space-y-4 rounded-sm border border-slate-300 bg-white p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label className="flex items-center gap-2">
          やること：
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChangeTitle}
            className="rounded-sm border border-slate-300 p-1"
          />
        </label>
        <Button type="button" onClick={handleClick} variant="info" className="px-3 py-1.5 text-sm">
          追加
        </Button>
        {/* desc値に応じてキャプションを変更 */}
        <Button type="button" onClick={handleSort} className="px-3 py-1.5 text-sm">
          ソート ({desc ? "↑" : "↓"})
        </Button>
      </form>

      <hr className="my-4 h-px border-none bg-slate-300" />

      {/* Todoをリストに整形 */}
      {/* <ul>
        {todo.map(item => (
          <li key={item.id}>{item.title}</li>
          ))}
      </ul> */}
      <ul className="ml-4 list-inside list-disc space-y-2">
        {todo.map((item) => (
          <li
            key={item.id}
            className={clsx(
              "flex items-center gap-2",
              item.isDone && "text-slate-400 line-through",
            )}
          >
            {item.title}
            <span className="grow" aria-hidden="true" />
            <Button
              type="button"
              onClick={handleDone}
              data-id={item.id}
              className="w-12 p-1 text-sm"
            >
              済
            </Button>
            <Button
              type="button"
              onClick={handleRemove}
              data-id={item.id}
              variant="danger"
              className="w-12 p-1 text-sm"
            >
              削除
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
