import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useTheme } from "@/hooks/useTheme.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";

export function Component() {
  useRightPrimaryPage();
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { FriendSettings },
  } = theme;
  return <>{config && <FriendSettings config={config} />}</>;
}

Component.displayName = "FriendSettingsPage";

export const ErrorBoundary = DefaultErrorBoundary;
