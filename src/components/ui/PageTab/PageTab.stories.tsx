import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTab } from "./PageTab";
import { ContentCard } from "@/components/ui/ContentCard";

const meta = {
  title: "UI/PageTab",
  component: PageTab,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof PageTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: "padded",
  },
  args: {
    title: "デモページのタイトル",
  },
  render: (args) => (
    <section>
      <PageTab title={args.title} />
      <ContentCard>コンテンツのサンプルです。</ContentCard>
    </section>
  ),
};
