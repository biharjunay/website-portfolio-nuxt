import { k as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './VChart-3xvewJRY.mjs';
import { useSSRContext, defineComponent, mergeProps, useTemplateRef, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1 } from './profiles-CsYwd6KX.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-3 rounded-full bg-gray-200" }, _attrs))}><div class="h-full rounded-full bg-blue-500" style="${ssrRenderStyle({ width: `${__props.progress}%` })}"></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Progress.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _imports_0 = "data:image/png;base64,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";
const _imports_2 = "" + buildAssetsURL("laravel.Bt5WFhpt.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
            color: "black"
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
      const _component_Progress = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-auto md:h-full flex flex-col lg:flex-row" }, _attrs))} data-v-e85d72bf><div class="w-full lg:w-2/3 flex flex-col gap-5 py-5 px-3" data-v-e85d72bf><div class="my-auto" data-v-e85d72bf><div class="flex items-center gap-3" data-v-e85d72bf><img${ssrRenderAttr("src", _imports_0)} alt="Power Icon" class="w-10 h-10 rounded-full bg-blue-500 p-2" data-v-e85d72bf><span data-v-e85d72bf><h1 class="text-xl" data-v-e85d72bf>Hi There</h1><p class="text-gray-500" data-v-e85d72bf>Look at my amazing website portfolio</p></span></div></div><div class="flex-grow flex flex-col gap-5" data-v-e85d72bf><div class="min-h-80 flex flex-col md:flex-row p-4 gap-5" data-v-e85d72bf><div class="w-full md:w-[40%] bg-white rounded-3xl p-5 flex flex-col" data-v-e85d72bf><div data-v-e85d72bf><div class="flex justify-between items-center" data-v-e85d72bf><h1 data-v-e85d72bf>Profile</h1><i class="fas fa-refresh" data-v-e85d72bf></i></div><div class="py-5" data-v-e85d72bf><img${ssrRenderAttr("src", _imports_1)} alt="profile picture" class="w-24 h-24 rounded-full m-auto" data-v-e85d72bf><h1 class="text-xl text-center mt-5 font-bold" data-v-e85d72bf>Yusuf Biharjuna</h1><p class="text-center text-gray-400" data-v-e85d72bf>Software Developer</p></div></div><div class="flex justify-center gap-5 mt-auto" data-v-e85d72bf><!--[-->`);
      ssrRenderList([1, 2, 3], (items) => {
        _push(`<button class="outline-0 shadow-md px-3 p-1 rounded-full" data-v-e85d72bf><i class="fa fa-check text-main font-bold" data-v-e85d72bf></i> 11 </button>`);
      });
      _push(`<!--]--></div></div><div class="w-full md:w-[60%] flex flex-col gap-5 bg-primary" data-v-e85d72bf><div class="flex-grow flex gap-5 min-h-40" data-v-e85d72bf><div class="overflow-hidden flex-grow bg-red-500 bg-gradient-to-tr from-purple-400 via-[white] to-red-500 relative before:absolute before:h-full before:content-[&#39;&#39;] before:z-10 before:-top-[80%] before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-yellow-100 rounded-3xl after:absolute after:bg-pink-400 after:-bottom-[80%] after:h-full after:content-[&#39;&#39;] after:z-20 after:w-1/2 after:left-1/2 after:-translate-x-2/3" data-v-e85d72bf><div class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl rounded-3xl z-50 p-5" data-v-e85d72bf> Prioritize <br data-v-e85d72bf> Tasks </div></div><div class="overflow-hidden flex-grow bg-blue-300 bg-gradient-to-tr from-teal-400 via-[white] to-blue-600 relative before:absolute before:h-full before:content-[&#39;&#39;] before:z-10 before:-top-[80%] before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-blue-100 rounded-3xl after:absolute after:bg-blue-400 after:-bottom-[80%] after:h-full after:content-[&#39;&#39;] after:z-20 after:w-1/2 after:left-1/2 after:-translate-x-2/3" data-v-e85d72bf><div class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl rounded-3xl z-50 p-5" data-v-e85d72bf> Additional <br data-v-e85d72bf> Tasks </div></div></div><div class="bg-gray-300 h-24 rounded-3xl p-5" data-v-e85d72bf> sdfasadfasdf </div></div></div><div class="" data-v-e85d72bf><div class="flex justify-between items-center" data-v-e85d72bf><span data-v-e85d72bf><h1 class="font-bold text-2xl" data-v-e85d72bf>Focusing</h1><p class="text-gray-400" data-v-e85d72bf>Productivity Analytics</p></span><select class="py-3 px-5 outline-none rounded-full bg-white select-menu" data-v-e85d72bf><option value="" data-v-e85d72bf>oke</option><option value="" data-v-e85d72bf>df</option><option value="" data-v-e85d72bf>dfd</option></select></div>`);
      _push(ssrRenderComponent(_component_VChart, {
        class: "chart",
        option: unref(chartOptions),
        ref: "v-chart"
      }, null, _parent));
      _push(`</div></div></div><div class="w-full lg:w-1/3 px-3 py-5" data-v-e85d72bf><div class="flex justify-between items-center" data-v-e85d72bf><h1 class="font-semibold text-xl" data-v-e85d72bf>Recent Projects</h1><button class="bg-white w-10 h-10 rounded-full active:bg-black active:text-white transition-all duration-300" data-v-e85d72bf><i class="fas fa-briefcase" data-v-e85d72bf></i></button></div><!--[-->`);
      ssrRenderList([1, 2, 3, 4], (item) => {
        _push(`<div class="border-b border-b-gray-300 py-5 flex" data-v-e85d72bf><img class="w-11 h-11 rounded-full mx-3"${ssrRenderAttr("src", _imports_2)} alt="logo" data-v-e85d72bf><div class="flex-grow" data-v-e85d72bf><h1 class="font-semibold" data-v-e85d72bf>Sistem Tracking Indonesia</h1><p class="line-clamp-1" data-v-e85d72bf>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cumque! Accusantium ipsam atque inventore, fugit hic commodi culpa facere laudantium?</p></div><button class="p-3" data-v-e85d72bf><i class="fas fa-external-link" data-v-e85d72bf></i></button></div>`);
      });
      _push(`<!--]--><button class="text-center mt-5 p-3 w-full text-gray-500" data-v-e85d72bf> See All Projects <i class="fas fa-angle-right ml-3" data-v-e85d72bf></i></button><h1 class="font-semibold text-xl" data-v-e85d72bf>Skills</h1><p class="text-gray-400" data-v-e85d72bf>Let you know about my skills</p><div class="grid grid-cols-[auto,1fr,auto] gap-3 items-center" data-v-e85d72bf><!--[-->`);
      ssrRenderList([1, 2, 3, 4], (item) => {
        _push(`<!--[--><div class="mt-5" data-v-e85d72bf>Web Development</div>`);
        _push(ssrRenderComponent(_component_Progress, {
          class: "mt-5",
          progress: 15
        }, null, _parent));
        _push(`<div class="mt-5" data-v-e85d72bf>90%</div><div class="mt-5" data-v-e85d72bf>Mobile Development</div>`);
        _push(ssrRenderComponent(_component_Progress, {
          class: "mt-5",
          progress: 75
        }, null, _parent));
        _push(`<div class="mt-5" data-v-e85d72bf>75%</div><!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e85d72bf"]]);

export { index as default };
//# sourceMappingURL=index-BZMnVkZt.mjs.map
