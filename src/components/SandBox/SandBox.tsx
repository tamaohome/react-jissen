import { ContentCard } from "@/components/ui/ContentCard";
import { PageTab } from "@/components/ui/PageTab";
import books from "@/data/books.json";

export const SandBox = () => {
  return (
    <section>
      <PageTab title="サンドボックス" />
      <ContentCard>
        <h3 className="mb-4 text-xl font-semibold">書籍一覧</h3>
        <dl className="mb-8 space-y-4">
          {/* 配列による繰り返し */}
          {books.map((book) => (
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
      </ContentCard>
    </section>
  );
};
