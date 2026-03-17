import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { Demo } from "@/components/Demo";
import { MyHello } from "@/components/MyHello";
import { Bookshelf } from "@/components/Bookshelf";
import { Header } from "@/components/ui/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative min-h-screen">
      {/* 背景レイヤー */}
      <div className="bfixed fixed inset-0 -z-10 bg-linear-to-tl from-[#4c1d95]/65 via-[#1e40af]/65 to-[#646cff]/65" />

      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="m-8 flex w-full max-w-160 flex-col gap-8">
        <Bookshelf />
        <MyHello />
        <Demo />
      </main>
    </div>
  </StrictMode>,
);
