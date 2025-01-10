import { k as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './VChart-3xvewJRY.mjs';
import { useSSRContext, defineComponent, useTemplateRef, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'node:path';
import 'node:fs';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'echarts/core';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-select';

const _imports_0 = "" + buildAssetsURL("bg-tech.DNflRHe9.avif");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    useTemplateRef("v-chart");
    const chartOptions = ref(
      {
        xAxis: {
          show: false,
          type: "category",
          name: "b",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          show: false,
          name: "a"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            name: "Legend A",
            smooth: true
          },
          {
            data: [233, 345, 121, 880, 1231, 1330, 1320],
            type: "line",
            smooth: true,
            name: "Legend B"
          }
        ],
        legend: {
          data: ["Legend A", "Legend B"],
          orient: "horizontal",
          bottom: 15,
          left: 15,
          textStyle: {
            fontWeight: 600,
            color: "white"
          }
        },
        tooltip: {
          show: true,
          borderRadius: 9999
        },
        grid: {
          width: "100%",
          left: 0
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VChart = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col gap-5 poppins-bold" }, _attrs))} data-v-3ab7fe08><div class="flex flex-col lg:flex-row lg:h-4/6 gap-5" data-v-3ab7fe08><div class="w-full lg:w-7/12 bg-[url(&#39;@/assets/images/galaxy.avif&#39;)] bg-center bg-cover rounded-3xl" data-v-3ab7fe08><div class="z-10 w-full h-full rounded-3xl p-5 backdrop-blur-lg grid grid-rows-[auto_1fr] overflow-y-auto" data-v-3ab7fe08><h6 class="text-xl" data-v-3ab7fe08>Recent Projects</h6><div class="bg-white rounded-3xl mt-5 lg:grid lg:grid-cols-2" data-v-3ab7fe08><div class="bg-red-500 rounded-3xl" data-v-3ab7fe08><img class="w-full h-full object-cover rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"${ssrRenderAttr("src", _imports_0)} alt="project image" data-v-3ab7fe08></div><div class="text-black p-5 text-center flex flex-col justify-between" data-v-3ab7fe08><h1 class="border-b border-b-zinc-300 font-bold text-3xl text-slate-800" data-v-3ab7fe08>sdfsafd</h1><p class="mt-5" data-v-3ab7fe08>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae impedit suscipit et labore cum placeat fuga ad, velit dolore.</p><button class="self-end mt-5 bg-black rounded-full text-white px-5 py-2 text-xs hover:text-black hover:bg-white hover:shadow" data-v-3ab7fe08>See More Projects <i class="fas fa-arrow-right ml-5" data-v-3ab7fe08></i></button></div></div></div></div><div class="w-full lg:w-5/12 flex flex-col bg-black rounded-3xl" data-v-3ab7fe08><h1 class="poppins-bold text-xl mt-5 ml-5" data-v-3ab7fe08>Latest Activity</h1>`);
      _push(ssrRenderComponent(_component_VChart, {
        class: "chart",
        option: unref(chartOptions),
        ref: "v-chart"
      }, null, _parent));
      _push(`</div></div><div class="h-2/6 flex flex-col md:flex-row gap-5" data-v-3ab7fe08><div class="w-full md:w-1/3 bg-gradient-to-br from-emerald-950 to-emerald-800 rounded-3xl flex flex-col gap-3 p-5" data-v-3ab7fe08><h1 class="poppins-regular" data-v-3ab7fe08>Years of Experience</h1><h1 class="text-7xl" data-v-3ab7fe08>1</h1></div><div class="w-full md:w-1/3 bg-gradient-to-br from-teal-950 to-teal-800 rounded-3xl flex flex-col gap-3 p-5" data-v-3ab7fe08><h1 class="poppins-regular" data-v-3ab7fe08>Projects Finished</h1><h1 class="text-7xl" data-v-3ab7fe08>1</h1></div><div class="w-full md:w-1/3 bg-gradient-to-br from-slate-950 to-slate-800 rounded-3xl flex flex-col gap-3 p-5" data-v-3ab7fe08><h1 class="poppins-regular" data-v-3ab7fe08>Active Projects</h1><h1 class="text-7xl" data-v-3ab7fe08>5</h1></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ab7fe08"]]);

export { home as default };
//# sourceMappingURL=home-C-Pg7DMX.mjs.map
