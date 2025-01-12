// import { createDatabase } from "db0";
// import sqlite from "db0/connectors/better-sqlite3";
// import { drizzle } from "db0/integrations/drizzle";
import * as schema from "~/server/database/schema";

// const db = createDatabase(sqlite({}));
// export const tables = schema
// export const drizzleDb = drizzle(db);

// Make sure to install the 'pg' package 
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// export const drizzleDb = drizzle({ client: pool });

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);
export const drizzleDb = drizzle({ client: sql });