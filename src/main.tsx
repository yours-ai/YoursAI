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
import "@/locales/i18n.ts";

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
            path: "/main/friends/:friendId/settings",
            lazy: () =>
              import("@/routes/main/friends/[:friendId]/settings/page.tsx"),
          },
          {
            path: "/main/friends/:friendId/settings/conversation-style",
            lazy: () =>
              import(
                "@/routes/main/friends/[:friendId]/settings/conversation-style/page.tsx"
              ),
          },
          {
            path: "/main/friends/:friendId/settings/translation",
            lazy: () =>
              import(
                "@/routes/main/friends/[:friendId]/settings/translation/page.tsx"
              ),
          },
          {
            path: "/main/friends/:friendId/settings/typing-simulation",
            lazy: () =>
              import(
                "@/routes/main/friends/[:friendId]/settings/typing-simulation/page.tsx"
              ),
          },
          {
            path: "/main/friends/:friendId/settings/persona",
            lazy: () =>
              import(
                "@/routes/main/friends/[:friendId]/settings/persona/page.tsx"
              ),
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
            path: "/main/messages/:messageRoomId",
            lazy: () =>
              import("@/routes/main/messages/[:messageRoomId]/page.tsx"),
          },
          {
            path: "/main/messages/:chatRoomId/settings",
            lazy: () =>
              import("@/routes/main/messages/[:chatRoomId]/settings/page.tsx"),
          },
          {
            path: "/main/messages/:chatRoomId/settings/custom",
            lazy: () =>
              import(
                "@/routes/main/messages/[:chatRoomId]/settings/custom/page.tsx"
              ),
          },
          {
            path: "/main/messages/:chatRoomId/settings/custom/conversation-style",
            lazy: () =>
              import(
                "@/routes/main/messages/[:chatRoomId]/settings/custom/conversation-style/page.tsx"
              ),
          },
          {
            path: "/main/messages/:chatRoomId/settings/custom/translation",
            lazy: () =>
              import(
                "@/routes/main/messages/[:chatRoomId]/settings/custom/translation/page.tsx"
              ),
          },
          {
            path: "/main/messages/:chatRoomId/settings/custom/typing-simulation",
            lazy: () =>
              import(
                "@/routes/main/messages/[:chatRoomId]/settings/custom/typing-simulation/page.tsx"
              ),
          },
          {
            path: "/main/messages/:chatRoomId/settings/custom/persona",
            lazy: () =>
              import(
                "@/routes/main/messages/[:chatRoomId]/settings/custom/persona/page.tsx"
              ),
          },
          {
            path: "/main/messages",
            lazy: () => import("./routes/main/empty.tsx"),
          },
          {
            path: "/main/messages/:messageRoomId/settings",
            lazy: () =>
              import(
                "@/routes/main/messages/[:messageRoomId]/settings/page.tsx"
              ),
          },
          {
            path: "/main/messages/:messageRoomId/settings/custom",
            lazy: () =>
              import(
                "@/routes/main/messages/[:messageRoomId]/settings/custom/page.tsx"
              ),
          },
        ],
      },
      {
        path: "/main/settings",
        lazy: () => import("./routes/main/settings/page.tsx"),
        children: [
          {
            path: "/main/settings/language",
            lazy: () => import("@/routes/main/settings/language/page.tsx"),
          },
          {
            path: "/main/settings/themes",
            lazy: () => import("@/routes/main/settings/themes/page.tsx"),
          },
          {
            path: "/main/settings/chat-customize",
            lazy: () =>
              import("@/routes/main/settings/chat-customize/page.tsx"),
          },
          {
            path: "/main/settings/chat-customize/conversation-style",
            lazy: () =>
              import(
                "@/routes/main/settings/chat-customize/conversation-style/page.tsx"
              ),
          },
          {
            path: "/main/settings/chat-customize/translation",
            lazy: () =>
              import(
                "@/routes/main/settings/chat-customize/translation/page.tsx"
              ),
          },
          {
            path: "/main/settings/chat-customize/typing-simulation",
            lazy: () =>
              import(
                "@/routes/main/settings/chat-customize/typing-simulation/page.tsx"
              ),
          },
          {
            path: "/main/settings/chat-customize/persona",
            lazy: () =>
              import("@/routes/main/settings/chat-customize/persona/page.tsx"),
          },
          {
            path: "/main/settings/data",
            lazy: () => import("@/routes/main/settings/data/page.tsx"),
          },
          {
            path: "/main/settings/sponsor",
            lazy: () => import("@/routes/main/settings/sponsor/page.tsx"),
          },
          {
            path: "/main/settings",
            lazy: () => import("./routes/main/empty.tsx"),
          },
          {
            path: "/main/settings/language",
            lazy: () => import("./routes/main/settings/language/page.tsx"),
          },
          {
            path: "/main/settings/themes",
            lazy: () => import("./routes/main/settings/themes/page.tsx"),
          },
          {
            path: "/main/settings/conversation",
            lazy: () => import("./routes/main/settings/conversation/page.tsx"),
          },
          {
            path: "/main/settings/data",
            lazy: () => import("./routes/main/settings/data/page.tsx"),
          },
          {
            path: "/main/settings/sponsor",
            lazy: () => import("./routes/main/settings/sponsor/page.tsx"),
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
