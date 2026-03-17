import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventMouse } from "./EventMouse";

const meta = {
  title: "Chapter-3/EventMouse",
  component: EventMouse,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EventMouse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "ロゴ画像",
    defaultSrc: "https://www.web-deli.com/image/linkbanner_l.gif",
    afterSrc: "https://www.web-deli.com/image/home_chara.gif",
  },
};
