import { ContentCard } from "@/components/ui/ContentCard";
import { PageTab } from "@/components/ui/PageTab";
import { Pagination } from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import books from "@/data/books.json";

export const SandBox = () => {
  const { currentPage, totalPages, currentItems, totalItems, goToPage } =
    usePagination(books, 5);

  return (
    <section>
      <PageTab title="サンドボックス" />
      <ContentCard>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">書籍一覧</h3>
          <span className="text-sm text-slate-600">
            全 {totalItems} 件 / {currentPage} ページ目
          </span>
        </div>

        <dl className="mb-8 space-y-4">
          {/* 配列による繰り返し */}
          {currentItems.map((book) => (
            // 配列を展開する場合は key の指定が必要
            <div
              key={book.id}
              className="flex border-b border-dashed border-slate-400"
            >
              <dt className="flex-1">{book.title}</dt>
              <dd className="text-right">{book.price} 円</dd>
            </div>
          ))}
        </dl>

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
