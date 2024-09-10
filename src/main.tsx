import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "pretendard/dist/web/static/pretendard.css";
import Providers from "@/Providers.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./routes/page.tsx"),
  },
  {
    path: "/main",
    lazy: () => import("./routes/main/page.tsx"),
  },
  {
    path: "/setup",
    lazy: () => import("./routes/setup/page.tsx"),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
