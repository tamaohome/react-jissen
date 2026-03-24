import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormList } from "./FormList";

const meta = {
  title: "Chapter-4/FormList",
  component: FormList,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
