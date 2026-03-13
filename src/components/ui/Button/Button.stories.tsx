import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "通常のボタン",
  },
};

export const OkCancel = {
  render: () => (
    <div className="flex gap-4">
      <Button>決定</Button>
      <Button variant="cancel">キャンセル</Button>
    </div>
  ),
};

export const Danger: Story = {
  args: {
    children: "ファイルを削除",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    children: "サービスを停止",
    variant: "warning",
  },
};

export const Small: Story = {
  args: {
    children: "小さいボタン",
    className: "px-3 py-1.5 text-sm",
  },
};

export const Disabled: Story = {
  args: {
    children: "無効化されたボタン",
    disabled: true,
  },
};
