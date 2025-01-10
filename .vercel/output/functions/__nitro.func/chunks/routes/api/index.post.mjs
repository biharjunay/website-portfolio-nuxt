import { d as defineEventHandler, r as readValidatedBody, a as drizzleDb, t as tables } from '../../nitro/nitro.mjs';
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
const index_post = defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, bodySchema.parse);
  return await drizzleDb.insert(tables.achievements).values(body).returning();
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
