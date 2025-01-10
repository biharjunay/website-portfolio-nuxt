import { d as defineEventHandler, a as drizzleDb, t as tables } from '../../nitro/nitro.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const home = defineEventHandler(async () => {
  const user = await drizzleDb.select().from(tables.users).all();
  return user;
});

export { home as default };
//# sourceMappingURL=home.mjs.map
