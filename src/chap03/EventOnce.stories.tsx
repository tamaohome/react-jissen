import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventOnce } from "./EventOnce";

const meta = {
  title: "Chapter-3/EventOnce",
  component: EventOnce,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EventOnce>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
