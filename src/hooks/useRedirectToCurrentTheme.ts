"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export const useRedirectToCurrentTheme = () => {
  const pathname = usePathname();
  const themeOnConfig = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (!pathname.startsWith("/main")) {
      return;
    }

    const pathParts = pathname.split("/");
    const themeOnPath = pathParts[2];
    const restOfPath = pathParts.slice(3).join("/");

    if (themeOnConfig.id !== themeOnPath) {
      void router.push(`/main/${themeOnConfig.id}/${restOfPath}`);
    }
  }, [pathname, router, themeOnConfig]);
};
