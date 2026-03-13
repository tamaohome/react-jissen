import type { Meta, StoryObj } from "@storybook/react-vite";
import { SandBox } from "./SandBox";

const meta = {
  title: "Components/SandBox",
  component: SandBox,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof SandBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SandBox />,
};
