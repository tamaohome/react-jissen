import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormCheckMulti } from "./FormCheckMulti";

const meta = {
  title: "Chapter-4/FormCheckMulti",
  component: FormCheckMulti,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FormCheckMulti>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
