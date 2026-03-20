import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormSelect } from "./FormSelect";

const meta = {
  title: "Chapter-4/FormSelect",
  component: FormSelect,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
