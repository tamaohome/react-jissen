import { PageTab } from "@/components/ui/PageTab";
import type { ReactNode } from "react";

export interface ContentCardProps {
  title: string;
  children: ReactNode;
}

export function ContentCard({ title, children }: ContentCardProps) {
  return (
    <section>
      <PageTab title={title} />
      <div className="w-full bg-white p-8 text-slate-600 shadow-2xl">
        {children}
      </div>
    </section>
  );
}
