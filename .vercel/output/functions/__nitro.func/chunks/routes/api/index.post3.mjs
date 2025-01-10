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
  major: z.string().nonempty(),
  educationName: z.string().nonempty(),
  monthStart: z.number().min(1),
  monthEnd: z.number().min(1),
  yearStart: z.number().min(1),
  yearEnd: z.number().min(1),
  description: z.string().nonempty()
});
const index_post = defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, bodySchema.parseAsync);
  return drizzleDb.insert(tables.educations).values(body).returning();
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
