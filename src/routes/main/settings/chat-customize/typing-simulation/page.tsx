import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useRightPrimaryPage();
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { TypingSimulationSelector },
  } = theme;
  return <>{config && <TypingSimulationSelector config={config} />}</>;
}

Component.displayName = "TypingSimulationGlobalSettingPage";
