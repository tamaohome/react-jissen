export interface PageTabProps {
  title: string;
}

export function PageTab({ title }: PageTabProps) {
  return (
    <div className="text-start">
      <h2 className="mx-4 inline-block bg-white/65 px-4 py-1.5 text-sm font-semibold shadow-2xl">
        {title}
      </h2>
    </div>
  );
}
