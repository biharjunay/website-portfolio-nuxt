import { d as defineEventHandler, i as readMultipartFormData } from '../../nitro/nitro.mjs';
import path from 'path';
import fs from 'fs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const uploadImage_post = defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event);
  const file = files == null ? undefined : files.find((item) => item.name === "file");
  const filename = `${(/* @__PURE__ */ new Date()).getTime()}_${file.filename}`;
  const filePath = path.join(process.cwd(), "public", filename);
  fs.writeFileSync(filePath, file.data);
  return {
    name: file.name,
    url: `/${filename}`
  };
});

export { uploadImage_post as default };
//# sourceMappingURL=upload-image.post.mjs.map
