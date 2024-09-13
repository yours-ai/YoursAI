import { useState } from "react";
import { getDb } from "@/domain/db.ts";
import { DbContext } from "./DbContext.ts";

export interface Props {
  children?: React.ReactNode;
}

export default function DbContextProvider({ children }: Props) {
  const [db] = useState(() => getDb());
  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
}
