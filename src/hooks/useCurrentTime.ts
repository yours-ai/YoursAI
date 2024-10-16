import { format } from "date-fns";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { enUS, ko } from "date-fns/locale";

export const useCurrentTime = () => {
  const currentTime = new Date();
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  if (config) {
    if (config.language == "en") {
      return {
        boldPart: format(currentTime, "yyyy MMM dd (EEE)", { locale: enUS }),
        regularPart: format(currentTime, "hh:mm aa", { locale: enUS }),
      };
    }
    if (config.language == "ko") {
      return {
        boldPart: format(currentTime, "yyyy MMM do (EEE)", { locale: ko }),
        regularPart: format(currentTime, "aa hh:mm ", { locale: ko }),
      };
    }
  }
  return { boldPart: "", regularPart: "" };
};
