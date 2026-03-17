import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventPoint } from "./EventPoint";

const meta = {
  title: "Chapter-3/EventPoint",
  component: EventPoint,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EventPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
