import type { Meta } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./Modal";

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
        className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg"
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        モーダルのタイトル
      </h3>
      <p className="text-gray-700 mb-6">
        これはモーダルコンポーネントの基本的な使用例です。
      </p>
      <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg">
        アクション実行
      </button>
    </ModalWrapper>
  ),
};

export const WithForm = {
  render: () => (
    <ModalWrapper>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        プロフィール変更
      </h3>
      <div className="gap-3 mb-6 flex flex-col">
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-700 w-24">
            名前：
          </label>
          <input
            type="text"
            placeholder="名前を入力"
            className="border-gray-300 rounded-lg px-3 py-2 focus:ring-slate-500 flex-1 border focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-700 w-24">
            メール：
          </label>
          <input
            type="email"
            placeholder="メールを入力"
            className="border-gray-300 rounded-lg px-3 py-2 focus:ring-slate-500 flex-1 border focus:ring-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="gap-3 flex">
        <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg flex-1">
          保存
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded-lg flex-1">
          キャンセル
        </button>
      </div>
    </ModalWrapper>
  ),
};

export const WithConfirmation = {
  render: () => (
    <ModalWrapper>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">実行確認</h3>
      <p className="text-gray-700 mb-6">
        この操作は取り消せません。本当に実行しますか？
      </p>
      <div className="gap-3 flex">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex-1">
          削除する
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded-lg flex-1">
          キャンセル
        </button>
      </div>
    </ModalWrapper>
  ),
};

export const InitiallyOpen = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        初期状態で開いているモーダル
      </h3>
      <p className="text-gray-700 mb-6">
        このモーダルはデフォルトで開いた状態です。
      </p>
      <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg">
        OK
      </button>
    </ModalWrapper>
  ),
};
