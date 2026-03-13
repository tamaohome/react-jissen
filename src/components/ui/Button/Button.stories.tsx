import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "通常のボタン",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "bg-blue-500 data-hover:bg-blue-600",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    className: "bg-green-500 data-hover:bg-green-600",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    className: "bg-red-500 data-hover:bg-red-600",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    className: "bg-yellow-500 data-hover:bg-yellow-600 text-gray-900",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    className: "px-8 py-4 text-lg",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    className: "px-3 py-1.5 text-sm",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    className: "opacity-50 cursor-not-allowed",
  },
};
