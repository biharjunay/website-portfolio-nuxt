import { _ as __nuxt_component_0 } from './nuxt-link-CHtUo7vf.mjs';
import { _ as _sfc_main$2 } from './AuthState-TJnhBg8s.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-CCdT_xIj.mjs';
import { _ as _export_sfc, b as useRoute } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sidebarItem = ref([
      { icon: "fas fa-house", name: "home" },
      { icon: "fas fa-user", name: "about" },
      { icon: "fas fa-briefcase", name: "portfolio" },
      { icon: "fas fa-phone", name: "contact" },
      { icon: "fas fa-ellipsis-h", name: "other" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AuthState = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row lg:flex-col items-center h-full" }, _attrs))}><img class="w-14 my-5 mx-3 hidden lg:block"${ssrRenderAttr("src", _imports_0)} alt="image"><div class="flex lg:flex-col justify-between lg:justify-start h-full w-full text-white py-5 px-5 md:px-10 lg:px-0"><!--[-->`);
      ssrRenderList(unref(sidebarItem), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${item.name}`,
          class: ["flex flex-col justify-center text-center relative py-3 cursor-pointer hover:text-blue-600 transition-all", { "text-blue-400": unref(route).name === item.name }],
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass(item.icon + " text-2xl")}"${_scopeId}></i>`);
              if (unref(route).name === item.name) {
                _push2(`<div class="hidden lg:block absolute w-1 h-full bg-blue-400 rounded-full right-0 top-1/2 -translate-y-1/2"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("i", {
                  class: item.icon + " text-2xl"
                }, null, 2),
                unref(route).name === item.name ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "hidden lg:block absolute w-1 h-full bg-blue-400 rounded-full right-0 top-1/2 -translate-y-1/2"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_AuthState, null, {
        default: withCtx(({ loggedIn, clear }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loggedIn) {
              _push2(`<a class="flex flex-col justify-center text-center relative py-3 cursor-pointer hover:text-blue-600 transition-all"${_scopeId}><i class="fa-solid fa-right-from-bracket"${_scopeId}></i></a>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              loggedIn ? (openBlock(), createBlock("a", {
                key: 0,
                class: "flex flex-col justify-center text-center relative py-3 cursor-pointer hover:text-blue-600 transition-all",
                onClick: clear
              }, [
                createVNode("i", { class: "fa-solid fa-right-from-bracket" })
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SidebarItem = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:flex-row h-dvh text-white bg-gradient-to-br from-slate-900 to-zinc-950 relative" }, _attrs))}><div class="w-full h-[10%] lg:w-24 lg:h-full order-2 lg:order-1">`);
  _push(ssrRenderComponent(_component_SidebarItem, null, null, _parent));
  _push(`</div><div class="w-full lg:w-full px-3 py-5 h-full overflow-auto order-1 lg:order-2">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BdBGQahv.mjs.map
