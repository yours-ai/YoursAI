import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import ThemeSelector from "@/routes/main/settings/themes/ThemeSelector.tsx";

export function Component() {
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);

  return <> {config && <ThemeSelector config={config} />}</>;
}

Component.displayName = "ThemesSettingPage";
