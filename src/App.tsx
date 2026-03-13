import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PageTab } from "@/components/ui/PageTab";
import { ContentCard } from "@/components/ui/ContentCard";
import { Button } from "@/components/ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <PageTab title="デモページ" />
      <ContentCard>
        <div className="my-8 flex justify-center gap-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react h-24" alt="React logo" />
          </a>
        </div>
        <h1 className="text-center text-5xl font-bold">Vite + React</h1>
        <div className="flex flex-col items-center gap-4 p-8">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-center text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </ContentCard>
    </section>
  );
}

export default App;
