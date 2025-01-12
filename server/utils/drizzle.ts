import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
export { sql, eq, and, or } from 'drizzle-orm'
import * as schema from "~/server/database/schema";

config({ path: ".env" });
const sql = neon(process.env.DATABASE_URL!);

export const drizzleDb = drizzle({ client: sql });
export const tables = schema