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
import "@/contrib/i18next/i18n.ts";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./routes/page.tsx"),
  },
  {
    path: "/main",
    lazy: () => import("./routes/main/page.tsx"),
    children: [
      {
        path: "/main/friends",
        lazy: () => import("./routes/main/friends/page.tsx"),
        children: [
          {
            path: "/main/friends/:friendId",
            lazy: () => import("@/routes/main/friends/[:friendId]/page.tsx"),
          },
          {
            path: "/main/friends",
            lazy: () => import("./routes/main/empty.tsx"),
          },
        ],
      },
      {
        path: "/main/messages",
        lazy: () => import("./routes/main/messages/page.tsx"),
        children: [
          {
            path: "/main/messages/:chatRoomId",
            lazy: () => import("@/routes/main/messages/[:chatRoomId]/page.tsx"),
          },
          {
            path: "/main/messages",
            lazy: () => import("./routes/main/empty.tsx"),
          },
        ],
      },
      {
        path: "/main/settings",
        lazy: () => import("./routes/main/settings/page.tsx"),
        children: [
          {
            path: "/main/settings/:settingsId",
            lazy: () => import("@/routes/main/settings/[:settingsId]/page.tsx"),
          },
          {
            path: "/main/settings",
            lazy: () => import("./routes/main/empty.tsx"),
          },
        ],
      },
    ],
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
