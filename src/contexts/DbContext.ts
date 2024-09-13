import { createContext, useContext } from "react";
import { Db } from "@/domain/db.ts";

export const DbContext = createContext<Db>(null as unknown as Db);

export const useDb = () => {
  return useContext(DbContext) as Db;
};
