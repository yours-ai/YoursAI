import { useDb } from "@/contexts/DbContext.ts";
import { Db } from "@/domain/db.ts";
import { useLiveQuery } from "dexie-react-hooks";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import ErrorText from "@/components/ErrorText.tsx";

export const useDexieQuery = <T, TDefault = undefined>(
  querier: (db: Db) => Promise<T> | T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps?: any[],
  defaultResult?: TDefault,
) => {
  const db = useDb();
  return useLiveQuery(() => querier(db), deps ?? [], defaultResult);
};

export const useDexieMutation = <TVars extends Record<string, unknown>, TData>(
  mutationFn: (db: Db, vars: TVars) => Promise<TData>,
  options: Partial<UseMutationOptions<TData, Error, TVars>> = {},
): UseMutationResult<TData, Error, TVars> => {
  const db = useDb();
  return useMutation<TData, Error, TVars>({
    mutationFn: (vars: TVars) => mutationFn(db, vars),
    onError(error) {
      toast.error(<ErrorText error={error} />);
    },
    ...options,
  });
};
