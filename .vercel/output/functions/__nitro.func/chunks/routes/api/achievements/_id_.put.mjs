import { d as defineEventHandler, g as getRouterParam, a as drizzleDb, t as tables, c as createError, r as readValidatedBody } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const bodySchema = z.object({
  title: z.string().nonempty(),
  year: z.number(),
  description: z.string()
}).superRefine(async ({ userId }, ctx) => {
  await validateUserID(userId, ctx);
});
const _id__put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = (await drizzleDb.select().from(tables.achievements).where(eq(tables.achievements.id, parseInt(id))))[0];
  if (!data) throw createError({
    statusCode: 422,
    message: "No Data Found"
  });
  const body = await readValidatedBody(event, bodySchema.parseAsync);
  return await drizzleDb.update(tables.achievements).set(body).where(eq(tables.achievements.id, parseInt(id))).returning();
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
