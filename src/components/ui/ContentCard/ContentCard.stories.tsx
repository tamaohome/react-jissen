import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentCard } from "./ContentCard";

const meta: Meta<typeof ContentCard> = {
  title: "UI/ContentCard",
  component: ContentCard,
};

export default meta;

type Story = StoryObj<typeof ContentCard>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div className="w-120">
      <ContentCard>
        <header className="mb-8">
          <h2 className="text-xl font-bold">プロフィール</h2>
        </header>
        <div>
          <dl className="space-y-4">
            <div className="flex border-b border-slate-400 pb-1">
              <dt className="w-24 font-semibold">名前</dt>
              <dd>Your Name</dd>
            </div>
            <div className="flex border-b border-slate-400 pb-1">
              <dt className="w-24 font-semibold">Email</dt>
              <dd>your.name@sample.com</dd>
            </div>
          </dl>
        </div>
      </ContentCard>
    </div>
  ),
};
