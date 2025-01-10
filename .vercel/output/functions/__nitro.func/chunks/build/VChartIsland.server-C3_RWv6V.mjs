import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import * as echarts from 'echarts';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VChartIsland.server",
  __ssrInlineRender: true,
  props: {
    option: {},
    initOptions: {},
    theme: {}
  },
  setup(__props) {
    const props = __props;
    const svgStr = ref("");
    const initOptions = echarts.util.merge(
      { renderer: "svg", ssr: true },
      props.initOptions || {}
    );
    const chart = echarts.init(null, props.theme, initOptions);
    chart.setOption(props.option || {});
    svgStr.value = chart.renderToSVGString();
    chart.dispose();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vue-echarts-container" }, _attrs))}><div class="vue-echarts-inner">${(_a = svgStr.value) != null ? _a : ""}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-echarts/dist/runtime/components/VChartIsland.server.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=VChartIsland.server-C3_RWv6V.mjs.map
