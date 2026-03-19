import type { Meta, StoryObj } from "@storybook/react-vite";
import { StateForm } from "./StateForm";

const meta = {
  title: "Chapter-4/StateForm",
  component: StateForm,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
