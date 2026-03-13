import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { MyHello } from "@/components/MyHello";
import { SandBox } from "@/components/SandBox";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="m-8 flex w-full max-w-160 flex-col gap-8">
      <App />
      <MyHello />
      <SandBox />
    </main>
  </StrictMode>,
);
