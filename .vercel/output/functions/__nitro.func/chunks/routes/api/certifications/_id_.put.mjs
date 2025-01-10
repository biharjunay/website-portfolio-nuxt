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
  yearStart: z.number().min(1),
  yearEnd: z.number().min(1),
  certificateUrl: z.string().nonempty()
}).superRefine(async ({ userId }, ctx) => {
  await validateUserID(userId, ctx);
});
const _id__put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = (await drizzleDb.select().from(tables.certifications).where(eq(tables.certifications.id, parseInt(id))))[0];
  if (!data) throw createError({
    status: 422,
    message: "Data is not found"
  });
  const body = await readValidatedBody(event, bodySchema.parse);
  return await drizzleDb.update(tables.certifications).set(body).where(eq(tables.certifications.id, parseInt(id))).returning();
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
