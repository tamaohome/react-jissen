import { ContentCard } from "@/components/ui/ContentCard";
import { PageTab } from "@/components/ui/PageTab";
import { Pagination } from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import books from "@/data/books.json";

interface BookItemProps {
  id: number;
  title: string;
  price: number;
}

interface BookListProps {
  items: typeof books;
}

const BookItem = ({ title, price }: BookItemProps) => (
  <div className="flex border-b border-dashed border-slate-400">
    <dt className="flex-1">{title}</dt>
    <dd className="text-right">{price} 円</dd>
  </div>
);

const BookList = ({ items }: BookListProps) => (
  <dl className="mb-8 space-y-4">
    {/* 配列による繰り返し */}
    {items.map((book) => (
      // 配列を展開する場合は key の指定が必要
      <BookItem
        key={book.id}
        id={book.id}
        title={book.title}
        price={book.price}
      />
    ))}
  </dl>
);

export const Bookshelf = () => {
  const { currentPage, totalPages, currentItems, totalItems, goToPage } =
    usePagination(books, 5);

  return (
    <section>
      <PageTab title="書籍一覧" />
      <ContentCard>
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm text-slate-600">
            全 {totalItems} 件 / {currentPage} ページ目
          </span>
        </div>

        <BookList items={currentItems} />

        {/* ページネーション */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </ContentCard>
    </section>
  );
};
