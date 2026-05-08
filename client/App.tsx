import "./global.css";

import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  useRevealAnimation();

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
