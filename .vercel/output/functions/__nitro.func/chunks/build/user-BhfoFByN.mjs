import { k as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';

const _imports_0 = "" + buildAssetsURL("background.Ban1eNg5.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="roboto-bold text-7xl text-black my-5">User</h1><div class="w-[30%] bg-white p-5 rounded-xl shadow-md"><img${ssrRenderAttr("src", _imports_0)} alt="image" class="w-32 h-32 m-auto rounded-full"><div><h1 class="mt-5 font-bold text-center text-xl">Yusuf Biharjuna</h1><p class="text-center">Software Developer</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=user-BhfoFByN.mjs.map
