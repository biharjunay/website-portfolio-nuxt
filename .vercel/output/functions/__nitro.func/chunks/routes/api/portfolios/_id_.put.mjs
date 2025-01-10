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
  description: z.string().nonempty(),
  projectUrl: z.string().nonempty(),
  availableOn: z.string().optional(),
  techStack: z.string().optional(),
  imageUrl: z.string().nonempty()
});
const _id__put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = (await drizzleDb.select().from(tables.portfolios).where(eq(tables.portfolios.id, parseInt(id))).limit(1))[0];
  if (!data) throw createError({
    status: 422,
    message: "Data is not found"
  });
  const body = await readValidatedBody(event, bodySchema.parseAsync);
  return await drizzleDb.update(tables.portfolios).set(body).where(eq(tables.portfolios.id, parseInt(id))).returning();
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
