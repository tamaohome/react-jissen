import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationWithState = (
  props: React.ComponentProps<typeof Pagination>,
) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  return (
    <Pagination
      {...props}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default: Story = {
  render: (props) => <PaginationWithState {...props} />,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const ManyPages: Story = {
  render: (props) => <PaginationWithState {...props} />,
  args: {
    currentPage: 5,
    totalPages: 50,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    onPageChange: () => {},
  },
};

export const LastPage: Story = {
  render: (props) => <PaginationWithState {...props} />,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};
