import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateNest } from "./StateNest";

const meta = {
  title: "Chapter-4/StateNest",
  component: StateNest,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateNest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
