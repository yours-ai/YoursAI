import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { EmptyPane },
  } = theme;
  return <EmptyPane />;
}
