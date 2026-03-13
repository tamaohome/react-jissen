import { ContentCard } from "@/components/ui/ContentCard";
import { PageTab } from "@/components/ui/PageTab";

const books = [
  {
    id: 10001,
    title: "React入門",
    price: 2980,
  },
  {
    id: 10002,
    title: "TypeScript実践",
    price: 3200,
  },
  {
    id: 10003,
    title: "Next.js徹底解説",
    price: 3500,
  },
  {
    id: 10004,
    title: "モダンJavaScript",
    price: 2800,
  },
  {
    id: 10005,
    title: "フロントエンド設計",
    price: 4000,
  },
];

export const SandBox = () => {
  return (
    <section>
      <PageTab title="サンドボックス" />
      <ContentCard>
        <h3 className="mb-4 text-xl font-semibold">書籍一覧</h3>
        <dl className="mb-8 space-y-4">
          {/* 配列による繰り返し */}
          {books.map((book) => (
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
