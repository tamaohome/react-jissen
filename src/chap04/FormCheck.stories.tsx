import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormCheck } from "./FormCheck";

const meta = {
  title: "Chapter-4/FormCheck",
  component: FormCheck,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
