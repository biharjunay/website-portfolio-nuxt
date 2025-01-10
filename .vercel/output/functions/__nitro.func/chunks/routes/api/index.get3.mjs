import { d as defineEventHandler, e as getQuery, a as drizzleDb, f as educations } from '../../nitro/nitro.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const index_get = defineEventHandler(async (event) => {
  const params = getQuery(event);
  if (!!params.id)
    return await drizzleDb.select().from(educations).where(eq(educations.id, params.id));
  return await drizzleDb.select().from(educations).all();
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
