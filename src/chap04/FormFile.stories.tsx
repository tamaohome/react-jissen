import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormFile } from "./FormFile";

const meta = {
  title: "Chapter-4/FormFile",
  component: FormFile,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
