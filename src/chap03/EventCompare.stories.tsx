import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventCompare } from "./EventCompare";

const meta = {
  title: "Chapter-3/EventCompare",
  component: EventCompare,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EventCompare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MouseEnterLeave: Story = {
  args: { type: "mouseenter" },
};

export const MouseOverOut: Story = {
  args: { type: "mouseover" },
};
