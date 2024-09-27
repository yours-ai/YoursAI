import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  const theme = useTheme();
  if (!theme || !config) return null;
  const {
    components: { PersonalSettings },
  } = theme;

  return <PersonalSettings config={config} />;
}

Component.displayName = "PersonaSessionSettingPage";
