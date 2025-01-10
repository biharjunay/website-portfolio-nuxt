import { d as defineEventHandler, r as readValidatedBody, a as drizzleDb, t as tables, c as createError, s as setUserSession } from '../../nitro/nitro.mjs';
import { z } from 'zod';
import bcrypt__default from 'bcrypt';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const bodySchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty()
});
const login_post = defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);
  const user = (await drizzleDb.select().from(tables.heroes).where(eq(tables.heroes.email, email)))[0];
  if (!user) throw createError({
    statusCode: 401,
    message: "Invalid email or password"
  });
  const checkPassword = await bcrypt__default.compare(password, user.password);
  if (!checkPassword) throw createError({
    statusCode: 401,
    message: "Invalid email or password"
  });
  await setUserSession(event, {
    user
  });
  return user;
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
