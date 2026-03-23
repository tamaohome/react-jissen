import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateNestImmer } from "./StateNestImmer";

const meta = {
  title: "Chapter-4/StateNestImmer",
  component: StateNestImmer,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateNestImmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
