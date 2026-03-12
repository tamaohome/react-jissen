import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import styles from "./MyHello.module.css";

interface MyHelloProps {
  name?: string;
}

export const MyHello = ({ name: initialName = "" }: MyHelloProps) => {
  // 表示する名前の状態
  const [name, setName] = useState(initialName);

  // モーダル表示状態
  const [isOpen, setIsOpen] = useState(false);

  // 入力値を保持
  const [inputValue, setInputValue] = useState(name);

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
      <div className={styles.container}>
        <dl className={styles.userInfo}>
          <dt className={styles.userLabel}>ユーザ名</dt>
          <dd className={styles.userName}>{name}</dd>
        </dl>
        <button
          onClick={() => {
            setInputValue(name);
            setIsOpen(true);
          }}
          className={styles.changeButton}
        >
          ユーザ名を変更
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCancel}>
        <h3 className={styles.modalTitle}>プロフィールを変更</h3>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.inputLabel}>
            ユーザ名：
          </label>
          <input
            id="username"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleComplete} className={styles.completeButton}>
            設定を完了
          </button>
          <button onClick={handleCancel} className={styles.cancelButton}>
            キャンセル
          </button>
        </div>
      </Modal>
    </>
  );
};
