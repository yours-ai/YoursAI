import { useLanguageSync } from "@/locales/hooks.ts";

export interface Props {
  children?: React.ReactNode;
}

export default function SyncLocale({ children }: Props) {
  useLanguageSync();
  return <>{children}</>;
}
