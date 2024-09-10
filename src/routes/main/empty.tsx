import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const {
    components: { EmptyPane },
  } = useTheme();
  return <EmptyPane />;
}
