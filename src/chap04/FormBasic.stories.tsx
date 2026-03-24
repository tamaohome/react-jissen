import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormBasic } from "./FormBasic";

const meta = {
  title: "Chapter-4/FormBasic",
  component: FormBasic,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
