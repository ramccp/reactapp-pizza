import { createRoot } from "react-dom/client";
import "./index.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
