import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateFormUC } from "./StateFormUC";

const meta = {
  title: "Chapter-4/StateFormUC",
  component: StateFormUC,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateFormUC>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
