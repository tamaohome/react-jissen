import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventArgs } from "./EventArgs";

const meta = {
  title: "Chapter-3/EventArgs",
  component: EventArgs,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EventArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
