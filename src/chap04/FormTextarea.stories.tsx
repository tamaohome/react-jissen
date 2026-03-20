import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormTextarea } from "./FormTextarea";

const meta = {
  title: "Chapter-4/FormTextarea",
  component: FormTextarea,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
