import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTab } from "./PageTab";

const meta = {
  title: "UI/PageTab",
  component: PageTab,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PageTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "デモページ",
  },
};

export const LongTitle: Story = {
  args: {
    title: "長いタイトルのページ - Long Title Page Tab",
  },
};
