import { d as defineEventHandler, a as drizzleDb, t as tables } from '../../nitro/nitro.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const index_get = defineEventHandler(async (event) => {
  return await drizzleDb.select().from(tables.achievements).all();
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
