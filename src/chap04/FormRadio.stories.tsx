import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormRadio } from "./FormRadio";

const meta = {
  title: "Chapter-4/FormRadio",
  component: FormRadio,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
