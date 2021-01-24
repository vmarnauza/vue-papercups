import VuePapercups from "./components/VuePapercups";

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
    };
  },
};
