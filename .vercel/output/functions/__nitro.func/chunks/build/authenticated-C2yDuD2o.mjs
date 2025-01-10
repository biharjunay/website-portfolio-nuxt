import { d as defineNuxtRouteMiddleware, u as useUserSession, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-select';
import 'vue/server-renderer';

const authenticated = defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo("/login");
  }
});

export { authenticated as default };
//# sourceMappingURL=authenticated-C2yDuD2o.mjs.map
