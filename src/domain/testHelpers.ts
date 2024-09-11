import "fake-indexeddb/auto";
import { afterEach, beforeEach } from "vitest";
import { Db, getDb } from "@/domain/db.ts";

export const getTestDb = (): { getDbInstance: () => Db } => {
  let db: Db;

  beforeEach(() => {
    db = getDb(); // Initialize the database before each test
  });

  afterEach(async () => {
    await db.delete(); // Clean up the database after each test
  });

  // Expose the database instance getter to the test functions
  return {
    getDbInstance: () => db,
  };
};
