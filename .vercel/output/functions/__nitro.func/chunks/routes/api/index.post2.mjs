import { d as defineEventHandler, r as readValidatedBody, a as drizzleDb, t as tables } from '../../nitro/nitro.mjs';
import Joi from 'joi';
import { z } from 'zod';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

Joi.object({
  user_id: Joi.number().required(),
  title: Joi.string().required(),
  yearStart: Joi.number().required(),
  yearEnd: Joi.string().required()
});
const bodySchema = z.object({
  title: z.string().nonempty(),
  yearStart: z.number().min(1),
  yearEnd: z.number().min(1),
  certificateUrl: z.string().nonempty()
}).superRefine(async ({ userId }, ctx) => {
  await validateUserID(userId, ctx);
});
const index_post = defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, bodySchema.parse);
  return await drizzleDb.insert(tables.certifications).values(body);
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
