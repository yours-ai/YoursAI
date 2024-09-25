import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import TypingSimulationSelector from "@/routes/main/friends/[:friendId]/settings/typing-simulation/TypingSimulationSelector.tsx";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";

export function Component() {
  useRightPrimaryPage();
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  return <>{config && <TypingSimulationSelector config={config} />}</>;
}

Component.displayName = "TypingSimulationGlobalSettingPage";
