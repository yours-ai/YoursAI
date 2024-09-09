import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "pretendard/dist/web/static/pretendard.css";
import "./utils/i18n.ts";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./routes"),
  },
  {
    path: "/main",
    lazy: () => import("./routes/main"),
  },
  {
    path: "/setup",
    lazy: () => import("./routes/setup"),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
