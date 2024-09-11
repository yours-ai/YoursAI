import "fake-indexeddb/auto";
import { afterEach, beforeEach } from "vitest";
import { Db, getDb } from "@/domain/db.ts";

export const getTestDb = (): { getDbInstance: () => Db } => {
  let db: Db;

  beforeEach(() => {
    db = getDb();
  });

  afterEach(async () => {
    await db.delete();
  });

  return {
    getDbInstance: () => db,
  };
};
