import type { Meta } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "@/components/ui/Button";

const meta = {
  title: "Components/UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;

// Modal内部で状態管理をするためのラッパーコンポーネント
const ModalWrapper = ({
  isOpen: initialIsOpen = false,
  children,
}: {
  isOpen?: boolean;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-slate-500 px-4 py-2 font-semibold text-white hover:bg-slate-600"
      >
        モーダルを開く
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

export const Default = {
  render: () => (
    <ModalWrapper>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        モーダルのタイトル
      </h3>
      <p className="mb-6 text-gray-700">
        これはモーダルコンポーネントの基本的な使用例です。
      </p>
      <Button>アクション実行</Button>
    </ModalWrapper>
  ),
};

export const WithForm = {
  render: () => (
    <ModalWrapper>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        プロフィール変更
      </h3>
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex items-center">
          <label className="w-24 text-sm font-medium text-gray-700">
            名前：
          </label>
          <input
            type="text"
            placeholder="名前を入力"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="w-24 text-sm font-medium text-gray-700">
            メール：
          </label>
          <input
            type="email"
            placeholder="メールを入力"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Button>保存</Button>
        <Button className="bg-slate-400 data-hover:bg-slate-500">
          キャンセル
        </Button>
      </div>
    </ModalWrapper>
  ),
};

export const WithConfirmation = {
  render: () => (
    <ModalWrapper>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">実行確認</h3>
      <p className="mb-6 text-gray-700">
        この操作は取り消せません。本当に実行しますか？
      </p>
      <div className="flex gap-3">
        <Button className="bg-red-500 data-hover:bg-red-600">削除する</Button>
        <Button className="bg-slate-400 data-hover:bg-slate-500">
          キャンセル
        </Button>
      </div>
    </ModalWrapper>
  ),
};

export const InitiallyOpen = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        初期状態で開いているモーダル
      </h3>
      <p className="mb-6 text-gray-700">
        このモーダルはデフォルトで開いた状態です。
      </p>
      <Button>OK</Button>
    </ModalWrapper>
  ),
};
