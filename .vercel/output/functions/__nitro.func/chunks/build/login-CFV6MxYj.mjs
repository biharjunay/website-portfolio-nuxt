import { defineComponent, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-CCdT_xIj.mjs';
import { u as useUserSession } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useUserSession();
    const body = reactive({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh flex justify-center items-center" }, _attrs))}><div class="bg-zinc-700 p-5 m-auto rounded-xl"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="w-16 h-16 p-3 mx-auto -mt-16 mb-10 rounded-full bg-black"><form class="flex flex-col text-white"><label for="email">Email</label><input type="email" name="email" id="email" class="h-10 rounded px-3 mb-3 text-black"${ssrRenderAttr("value", unref(body).email)} required><label for="password">Password</label><input type="password" name="password" id="password" class="h-10 rounded px-3 text-black"${ssrRenderAttr("value", unref(body).password)} required><button type="submit" class="bg-emerald-800 mt-5 rounded p-1 hover:bg-emerald-600 active:bg-emerald-900">Login</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CFV6MxYj.mjs.map
