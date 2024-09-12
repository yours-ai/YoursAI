import { useDb } from "@/contexts/DbContext.ts";
import { Db } from "@/domain/db.ts";
import { useLiveQuery } from "dexie-react-hooks";

export const useDexieQuery = <T, TDefault = undefined>(
  querier: (db: Db) => Promise<T> | T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps?: any[],
  defaultResult?: TDefault,
) => {
  const db = useDb();
  return useLiveQuery(() => querier(db), deps ?? [], defaultResult);
};
