import type { ReactNode } from "react";

export interface ContentCardProps {
  children: ReactNode;
}

export function ContentCard({ children }: ContentCardProps) {
  return (
    <section className="w-full bg-white p-8 text-slate-600 shadow-2xl">
      {children}
    </section>
  );
}
