import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { PageTab } from "@/components/ui/PageTab";
import { ContentCard } from "@/components/ui/ContentCard";
import { Button } from "@/components/ui/Button";

interface MyHelloProps {
  name?: string;
}

export function MyHello({ name: initialName = "" }: MyHelloProps) {
  // 表示する名前の状態
  const [name, setName] = useState(initialName);

  // モーダル表示状態
  const [isOpen, setIsOpen] = useState(false);

  // 入力値を保持
  const [inputValue, setInputValue] = useState(name);

  const handleEditClick = () => {
    setInputValue(name);
    setIsOpen(true);
  };

  const handleComplete = () => {
    setName(inputValue);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setInputValue(name);
    setIsOpen(false);
  };

  return (
    <>
      <section>
        <PageTab title="プロフィール情報" />
        <ContentCard>
          <div>
            <dl className="mb-6">
              <dt className="text-sm font-semibold text-gray-600">ユーザ名</dt>
              <dd className="mt-1 text-2xl font-bold text-gray-900">{name}</dd>
            </dl>
            <Button onClick={handleEditClick}>ユーザ名を変更</Button>
          </div>
        </ContentCard>
      </section>

      <Modal isOpen={isOpen} onClose={handleCancel}>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          プロフィールを変更
        </h3>
        <div className="mb-6 flex items-center gap-3">
          <label
            htmlFor="username"
            className="text-sm font-medium whitespace-nowrap text-gray-700"
          >
            ユーザ名：
          </label>
          <input
            id="username"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex justify-center gap-3">
          <Button onClick={handleComplete}>設定を完了</Button>
          <Button
            onClick={handleCancel}
            className="bg-slate-400 data-hover:bg-slate-500"
          >
            キャンセル
          </Button>
        </div>
      </Modal>
    </>
  );
}
