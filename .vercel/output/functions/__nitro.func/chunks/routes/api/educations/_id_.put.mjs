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
  major: z.string().nonempty(),
  educationName: z.string().nonempty(),
  monthStart: z.number().min(1),
  monthEnd: z.number().min(1),
  yearStart: z.number().min(1),
  yearEnd: z.number().min(1),
  description: z.string().nonempty()
});
const _id__put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = (await drizzleDb.select().from(tables.educations).where(eq(tables.educations.id, parseInt(id))))[0];
  if (!data) throw createError({
    statusCode: 422,
    message: "Data not found"
  });
  const body = await readValidatedBody(event, bodySchema.parseAsync);
  return await drizzleDb.insert(tables.educations).values(body).returning();
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
