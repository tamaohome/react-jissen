import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateBasic } from "./StateBasic";

const meta = {
  title: "Chapter-3/StateBasic",
  component: StateBasic,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { init: 0 },
};
