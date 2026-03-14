import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { MyHello } from "@/components/MyHello";
import { SandBox } from "@/components/SandBox";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative min-h-screen">
      {/* 背景レイヤー */}
      <div className="bfixed fixed inset-0 -z-10 bg-linear-to-tl from-[#4c1d95]/65 via-[#1e40af]/65 to-[#646cff]/65" />

      {/* メインコンテンツ */}
      <main className="m-8 flex w-full max-w-160 flex-col gap-8">
        <App />
        <MyHello />
        <SandBox />
      </main>
    </div>
  </StrictMode>,
);
