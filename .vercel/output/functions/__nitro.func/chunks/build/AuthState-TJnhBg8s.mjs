import { useSSRContext, defineComponent, unref } from 'vue';
import { ssrRenderSlot } from 'vue/server-renderer';
import { u as useUserSession } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthState",
  __ssrInlineRender: true,
  setup(__props) {
    const { loggedIn, user, session, clear, ready } = useUserSession();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(ready)) {
        ssrRenderSlot(_ctx.$slots, "default", { loggedIn: unref(loggedIn), user: unref(user), session: unref(session), clear: unref(clear) }, null, _push, _parent);
      } else {
        ssrRenderSlot(_ctx.$slots, "placeholder", {}, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=AuthState-TJnhBg8s.mjs.map
