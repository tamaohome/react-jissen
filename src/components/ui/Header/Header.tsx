import type React from "react";
import { SiReact } from "react-icons/si";

export const Header: React.FC = () => {
  return (
    <>
      <div role="presentation" className="h-12"></div>
      <header className="fixed top-0 right-0 left-0 z-50 h-12 border-b border-gray-200 bg-white/65 shadow-md backdrop-blur-sm">
        <div className="flex h-full max-w-full items-center px-6">
          <h1 className="flex items-center gap-2 text-lg font-semibold text-slate-700">
            <SiReact size={28} className="text-blue-400" />
            これからはじめるReact実践入門
          </h1>
        </div>
      </header>
    </>
  );
};
