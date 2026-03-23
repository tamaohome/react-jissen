import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateNestImmer2 } from "./StateNestImmer2";

const meta = {
  title: "Chapter-4/StateNestImmer2",
  component: StateNestImmer2,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateNestImmer2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
