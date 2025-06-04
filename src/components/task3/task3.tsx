import { useEffect, useState } from "react";

// If using Webpack 5 or Vite, this should work:
const SumWorker = new URL("./sum.worker.ts", import.meta.url);

export const Dashboard = () => {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(SumWorker, { type: "module" });
    worker.postMessage(null); // trigger calculation
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
};
