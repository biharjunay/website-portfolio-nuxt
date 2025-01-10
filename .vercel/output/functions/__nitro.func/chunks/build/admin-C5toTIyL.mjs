import { k as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CHtUo7vf.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, b as useRoute } from './server.mjs';
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

const _imports_0 = "" + buildAssetsURL("logo-black.Cx3tCUa1.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItemAdmin",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const sidebarItem = ref([
      // { icon: 'fa-solid fa-objects-column', name: 'home' },
      { icon: "fas fa-user", name: "about" }
      // { icon: 'fas fa-briefcase', name: 'portfolio' },
      // { icon: 'fas fa-phone', name: 'contact' },
      // { icon: 'fas fa-ellipsis-h', name: 'other' },
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-1 py-3 flex flex-col items-center h-full justify-between gap-3" }, _attrs))}><div class="flex flex-col gap-10"><img class="w-14 hidden lg:block"${ssrRenderAttr("src", _imports_0)} alt="image"><div class="flex lg:flex-col gap-4 items-center"><!--[-->`);
      ssrRenderList(unref(sidebarItem), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/${item.name}`,
          class: "bg-white w-10 h-10 text-center flex justify-center items-center rounded-full cursor-pointer hover:text-white hover:bg-black transition-all duration-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass([item.icon, "text-lg m-auto"])}"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", {
                  class: ["text-lg m-auto", item.icon]
                }, null, 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "bg-white w-10 h-10 text-center flex justify-center items-center rounded-full cursor-pointer hover:text-white hover:bg-black" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa fa-sign-out"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa fa-sign-out" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarItemAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SidebarItemAdmin = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#f0f6f6] h-dvh text-black flex flex-col lg:flex-row" }, _attrs))}><div class="w-full lg:w-24 h-[10%] lg:h-full order-2 lg:order-1">`);
  _push(ssrRenderComponent(_component_SidebarItemAdmin, null, null, _parent));
  _push(`</div><div class="w-full overflow-y-auto order-1 lg:order-2">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { admin as default };
//# sourceMappingURL=admin-C5toTIyL.mjs.map
