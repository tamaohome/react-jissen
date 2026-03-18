import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventPropagation } from "./EventPropagation";

const meta = {
  title: "Chapter-3/EventPropagation",
  component: EventPropagation,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EventPropagation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BubbleMode: Story = {
  parameters: {
    docs: {
      description: {
        story: "バブリングフェーズでイベント発生",
      },
    },
  },
  args: { eventPhase: "bubble" },
};

export const CaptureMode: Story = {
  parameters: {
    docs: {
      description: {
        story: "キャプチャフェーズでイベント発生",
      },
    },
  },
  args: { eventPhase: "capture" },
};

export const SuppressPropagation: Story = {
  parameters: {
    docs: {
      description: {
        story: "イベントの伝播を抑制",
      },
    },
  },
  args: { suppressPropagation: true },
};
