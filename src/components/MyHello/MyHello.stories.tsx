import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyHello } from "./MyHello";

const meta = {
  title: "Components/MyHello",
  component: MyHello,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MyHello>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomName: Story = {
  args: {
    name: "Mann",
  },
};
