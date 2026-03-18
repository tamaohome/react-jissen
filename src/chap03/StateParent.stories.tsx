import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateParent } from "./StateParent";

const meta = {
  title: "Chapter-3/StateParent",
  component: StateParent,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateParent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { init: 0 },
};
