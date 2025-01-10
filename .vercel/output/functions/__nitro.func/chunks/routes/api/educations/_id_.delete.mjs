import { d as defineEventHandler, g as getRouterParam, a as drizzleDb, t as tables } from '../../../nitro/nitro.mjs';
import { s as successResponse } from '../../../_/success-response.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const _id__delete = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  await drizzleDb.delete(tables.educations).where(eq(tables.educations.id, parseInt(id)));
  return successResponse;
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
