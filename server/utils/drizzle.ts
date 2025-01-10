import { createDatabase } from "db0";
import sqlite from "db0/connectors/better-sqlite3";
import { drizzle } from "db0/integrations/drizzle";
import * as schema from "~/server/database/schema";

const db = createDatabase(sqlite({}));
export const tables = schema
export const drizzleDb = drizzle(db);
