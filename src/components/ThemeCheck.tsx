"use client";

import { useRedirectToCurrentTheme } from "@/hooks/useRedirectToCurrentTheme";

export interface Props {
  children?: React.ReactNode;
}

export default function ThemeCheck({ children }: Props) {
  useRedirectToCurrentTheme();
  return children;
}
