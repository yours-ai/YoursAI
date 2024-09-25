import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import TranslationSelector from "@/routes/main/friends/[:friendId]/settings/translation/TranslationSelector.tsx";

export function Component() {
  useRightPrimaryPage();
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);

  return <>{config && <TranslationSelector config={config} />}</>;
}

Component.displayName = "TranslationSessionSettingPage";
