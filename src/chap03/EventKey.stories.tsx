import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventKey } from "./EventKey";

const meta = {
  title: "Chapter-3/EventKey",
  component: EventKey,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EventKey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
