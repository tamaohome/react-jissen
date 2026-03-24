import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateTodo } from "./StateTodo";

const meta = {
  title: "Chapter-4/StateTodo",
  component: StateTodo,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
