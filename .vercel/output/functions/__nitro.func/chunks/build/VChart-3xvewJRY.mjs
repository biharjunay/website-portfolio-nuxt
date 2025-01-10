import { defineComponent, shallowRef, inject, toRefs, computed, unref, watch, watchEffect, h, nextTick } from 'vue';
import { throttle, init } from 'echarts/core';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const METHOD_NAMES = [
  "getWidth",
  "getHeight",
  "getDom",
  "getOption",
  "resize",
  "dispatchAction",
  "convertToPixel",
  "convertFromPixel",
  "containPixel",
  "getDataURL",
  "getConnectedDataURL",
  "appendData",
  "clear",
  "isDisposed",
  "dispose"
];
function usePublicAPI(chart) {
  function makePublicMethod(name) {
    return (...args) => {
      if (!chart.value) {
        throw new Error("ECharts is not initialized yet.");
      }
      return chart.value[name].apply(chart.value, args);
    };
  }
  function makePublicMethods() {
    const methods = /* @__PURE__ */ Object.create(null);
    METHOD_NAMES.forEach((name) => {
      methods[name] = makePublicMethod(name);
    });
    return methods;
  }
  return makePublicMethods();
}
function useAutoresize(chart, autoresize, root) {
  watch(
    [root, chart, autoresize],
    ([root2, chart2, autoresize2], _, onCleanup) => {
      let ro = null;
      if (root2 && chart2 && autoresize2) {
        const { offsetWidth, offsetHeight } = root2;
        const autoresizeOptions = autoresize2 === true ? {} : autoresize2;
        const { throttle: wait = 100, onResize } = autoresizeOptions;
        let initialResizeTriggered = false;
        const callback = (entry, ob) => {
          chart2.resize({ height: "auto", width: "auto" });
          onResize == null ? undefined : onResize(entry, ob);
        };
        const resizeCallback = wait ? (
          // @ts-expect-error callback can accept params
          throttle(callback, wait)
        ) : callback;
        ro = new ResizeObserver((entry, observer) => {
          if (!initialResizeTriggered) {
            initialResizeTriggered = true;
            if (root2.offsetWidth === offsetWidth && root2.offsetHeight === offsetHeight) {
              return;
            }
          }
          resizeCallback(entry, observer);
        });
        ro.observe(root2);
      }
      onCleanup(() => {
        if (ro) {
          ro.disconnect();
          ro = null;
        }
      });
    }
  );
}
const autoresizeProps = {
  autoresize: [Boolean, Object]
};
const LOADING_OPTIONS_KEY = "ecLoadingOptions";
function useLoading(chart, loading, loadingOptions) {
  const defaultLoadingOptions = inject(LOADING_OPTIONS_KEY, {});
  const realLoadingOptions = computed(() => ({
    ...unref(defaultLoadingOptions) || {},
    ...loadingOptions == null ? undefined : loadingOptions.value
  }));
  watchEffect(() => {
    const instance = chart.value;
    if (!instance) {
      return;
    }
    if (loading.value) {
      instance.showLoading(realLoadingOptions.value);
    } else {
      instance.hideLoading();
    }
  });
}
const loadingProps = {
  loading: Boolean,
  loadingOptions: Object
};
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
function omitOn(attrs) {
  const result = {};
  for (const key in attrs) {
    if (!isOn(key)) {
      result[key] = attrs[key];
    }
  }
  return result;
}
let registered = null;
const TAG_NAME = "x-vue-echarts";
{
  globalThis.HTMLElement = Object;
}
class EChartsElement extends HTMLElement {
  constructor() {
    super(...arguments);
    __publicField(this, "__dispose", null);
  }
  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}
function register() {
  if (registered != null) {
    return registered;
  }
  if (typeof HTMLElement === "undefined" || typeof customElements === "undefined") {
    return registered = false;
  }
  try {
    if (customElements.get(TAG_NAME) == null) {
      customElements.define(TAG_NAME, EChartsElement);
    }
  } catch {
    return registered = false;
  }
  return registered = true;
}
const THEME_KEY = "ecTheme";
const INIT_OPTIONS_KEY = "ecInitOptions";
const UPDATE_OPTIONS_KEY = "ecUpdateOptions";
register();
const __nuxt_component_0 = defineComponent({
  props: {
    option: Object,
    theme: {
      type: [Object, String]
    },
    initOptions: Object,
    updateOptions: Object,
    group: String,
    manualUpdate: Boolean,
    ...autoresizeProps,
    ...loadingProps
  },
  emits: {},
  inheritAttrs: false,
  setup(props, { attrs }) {
    const root = shallowRef();
    const chart = shallowRef();
    const manualOption = shallowRef();
    const defaultTheme = inject(THEME_KEY, null);
    const defaultInitOptions = inject(INIT_OPTIONS_KEY, null);
    const defaultUpdateOptions = inject(UPDATE_OPTIONS_KEY, null);
    const { autoresize, manualUpdate, loading, loadingOptions } = toRefs(props);
    const realOption = computed(
      () => manualOption.value || props.option || null
    );
    const realTheme = computed(() => props.theme || unref(defaultTheme) || {});
    const realInitOptions = computed(
      () => props.initOptions || unref(defaultInitOptions) || {}
    );
    const realUpdateOptions = computed(
      () => props.updateOptions || unref(defaultUpdateOptions) || {}
    );
    const nativeListeners = shallowRef({});
    const realAttrs = computed(() => ({
      ...omitOn(attrs),
      ...nativeListeners.value
    }));
    const realListeners = {};
    function init$1(option) {
      const _nativeListeners = {};
      Object.keys(attrs).filter((key) => isOn(key)).forEach((key) => {
        let event = key.charAt(2).toLowerCase() + key.slice(3);
        if (event.indexOf("native:") === 0) {
          const nativeKey = `on${event.charAt(7).toUpperCase()}${event.slice(
            8
          )}`;
          _nativeListeners[nativeKey] = attrs[key];
          return;
        }
        if (event.substring(event.length - 4) === "Once") {
          event = `~${event.substring(0, event.length - 4)}`;
        }
        realListeners[event] = attrs[key];
      });
      nativeListeners.value = _nativeListeners;
      if (!root.value) {
        return;
      }
      const instance = chart.value = init(
        root.value,
        realTheme.value,
        realInitOptions.value
      );
      if (props.group) {
        instance.group = props.group;
      }
      Object.keys(realListeners).forEach((key) => {
        let handler = realListeners[key];
        if (!handler) {
          return;
        }
        let event = key.toLowerCase();
        if (event.charAt(0) === "~") {
          event = event.substring(1);
          handler.__once__ = true;
        }
        let target = instance;
        if (event.indexOf("zr:") === 0) {
          target = instance.getZr();
          event = event.substring(3);
        }
        if (handler.__once__) {
          delete handler.__once__;
          const raw = handler;
          handler = (...args) => {
            raw(...args);
            target.off(event, handler);
          };
        }
        target.on(event, handler);
      });
      function resize() {
        if (instance && !instance.isDisposed()) {
          instance.resize();
        }
      }
      function commit() {
        const opt = option || realOption.value;
        if (opt) {
          instance.setOption(opt, realUpdateOptions.value);
        }
      }
      if (autoresize.value) {
        nextTick(() => {
          resize();
          commit();
        });
      } else {
        commit();
      }
    }
    function setOption(option, updateOptions) {
      if (props.manualUpdate) {
        manualOption.value = option;
      }
      if (!chart.value) {
        init$1(option);
      } else {
        chart.value.setOption(option, updateOptions || {});
      }
    }
    function cleanup() {
      if (chart.value) {
        chart.value.dispose();
        chart.value = undefined;
      }
    }
    let unwatchOption = null;
    watch(
      manualUpdate,
      (manualUpdate2) => {
        if (typeof unwatchOption === "function") {
          unwatchOption();
          unwatchOption = null;
        }
        if (!manualUpdate2) {
          unwatchOption = watch(
            () => props.option,
            (option, oldOption) => {
              if (!option) {
                return;
              }
              if (!chart.value) {
                init$1();
              } else {
                chart.value.setOption(option, {
                  // mutating `option` will lead to `notMerge: false` and
                  // replacing it with new reference will lead to `notMerge: true`
                  notMerge: option !== oldOption,
                  ...realUpdateOptions.value
                });
              }
            },
            { deep: true }
          );
        }
      },
      {
        immediate: true
      }
    );
    watch(
      [realTheme, realInitOptions],
      () => {
        cleanup();
        init$1();
      },
      {
        deep: true
      }
    );
    watchEffect(() => {
      if (props.group && chart.value) {
        chart.value.group = props.group;
      }
    });
    const publicApi = usePublicAPI(chart);
    useLoading(chart, loading, loadingOptions);
    useAutoresize(chart, autoresize, root);
    return {
      chart,
      root,
      setOption,
      realAttrs,
      nativeListeners,
      ...publicApi
    };
  },
  render() {
    const attrs = this.realAttrs;
    attrs.ref = "root";
    attrs.class = attrs.class ? ["echarts"].concat(attrs.class) : "echarts";
    return h(TAG_NAME, attrs);
  }
});

export { __nuxt_component_0 as _ };
//# sourceMappingURL=VChart-3xvewJRY.mjs.map
