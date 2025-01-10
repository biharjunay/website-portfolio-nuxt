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
  description: z.string().nonempty(),
  projectUrl: z.string().nonempty(),
  availableOn: z.string().optional(),
  techStack: z.string().optional(),
  imageUrl: z.string().nonempty()
});
const index_post = defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, bodySchema.parseAsync);
  return drizzleDb.insert(tables.portfolios).values(body).returning();
});

export { index_post as default };
//# sourceMappingURL=index.post5.mjs.map
