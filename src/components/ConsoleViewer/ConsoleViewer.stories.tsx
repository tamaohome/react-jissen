import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConsoleViewer } from "./ConsoleViewer";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

const meta = {
  title: "Components/ConsoleViewer",
  component: ConsoleViewer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsoleViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const consoleLogTest = () => {
  console.log("情報ログです。");
  console.warn("警告ログです。");
  console.error("エラーログです。");
  console.info("成功ログです。");
};

export const Default: Story = {
  render: () => {
    consoleLogTest();
    return (
      <>
        <TestButtonGroup className="mb-4" />
        <ConsoleViewer className="rounded-sm border border-slate-300 bg-white p-2" />
      </>
    );
  },
};

export const FixedHeight: Story = {
  parameters: {
    docs: {
      description: {
        story: "className指定により高さを固定",
      },
    },
  },
  render: () => {
    return (
      <div className="rounded-sm border border-slate-300 bg-white p-2">
        <ConsoleViewer className="h-20" />
      </div>
    );
  },
};

const TestButtonGroup = ({ className }: { className: string }) => (
  <div className={clsx("flex flex-wrap gap-2 font-mono text-xs", className)}>
    <Button
      onClick={() => console.log("通常のログを追加しました。")}
      variant="info"
    >
      console.log
    </Button>
    <Button
      onClick={() => console.info("成功ログを追加しました。")}
      variant="success"
    >
      console.info
    </Button>
    <Button
      onClick={() => console.warn("警告ログを追加しました。")}
      variant="warning"
    >
      console.warn
    </Button>
    <Button
      onClick={() => console.error("エラーログを追加しました。")}
      variant="danger"
    >
      console.error
    </Button>
  </div>
);
