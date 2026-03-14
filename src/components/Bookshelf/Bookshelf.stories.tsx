import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bookshelf } from "./Bookshelf";

const meta = {
  title: "Components/Bookshelf",
  component: Bookshelf,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Bookshelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Bookshelf />,
};
