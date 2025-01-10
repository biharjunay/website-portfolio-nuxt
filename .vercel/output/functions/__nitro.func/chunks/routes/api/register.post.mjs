import { d as defineEventHandler, r as readValidatedBody, a as drizzleDb, t as tables, c as createError } from '../../nitro/nitro.mjs';
import { z } from 'zod';
import * as bcrypt from 'bcrypt';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const bodySchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8).optional()
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) ctx.addIssue({
    message: "Password didn't match",
    code: "custom"
  });
});
const register_post = defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, bodySchema.parse);
  const user = (await drizzleDb.select().from(tables.heroes).where(eq(tables.heroes.email, body.email)))[0];
  if (user) throw createError({
    status: 422,
    message: "Email is exist"
  });
  delete body.confirmPassword;
  body.password = await bcrypt.hash(body.password, 10);
  return await drizzleDb.insert(tables.heroes).values(body).returning();
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
