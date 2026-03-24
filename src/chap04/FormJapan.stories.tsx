import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormJapan } from "./FormJapan";

const meta = {
  title: "Chapter-4/FormJapan",
  component: FormJapan,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormJapan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
