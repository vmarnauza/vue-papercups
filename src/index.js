import VuePapercups from "./components/VuePapercups";
import { createWidget, destroyWidget, showWidget, hideWidget } from "./widget";

export default {
  install(app) {
    app.component("VuePapercups", VuePapercups);

    app.config.globalProperties.$papercups = {
      config() {
        return window.Papercups ? window.Papercups.config : {};
      },
      open() {
        window.dispatchEvent(new Event("papercups:open"));
      },
      close() {
        window.dispatchEvent(new Event("papercups:close"));
      },
      toggle() {
        window.dispatchEvent(new Event("papercups:toggle"));
      },
      create: createWidget,
      destroy: destroyWidget,
      show: showWidget,
      hide: hideWidget,
    };
  },
};
