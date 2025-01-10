import { d as defineEventHandler, e as getQuery, a as drizzleDb, p as portfolios } from '../../nitro/nitro.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const index_get = defineEventHandler(async (event) => {
  getQuery(event);
  return await drizzleDb.select().from(portfolios).all();
});

export { index_get as default };
//# sourceMappingURL=index.get5.mjs.map
