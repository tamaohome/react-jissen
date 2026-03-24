import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormYup } from "./FormYup";

const meta = {
  title: "Chapter-4/FormYup",
  component: FormYup,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormYup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
