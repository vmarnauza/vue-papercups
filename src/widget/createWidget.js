export default () => {
  const widgetScriptEl = document.createElement("script");

  widgetScriptEl.id = "PapercupsWidgetScript";
  widgetScriptEl.type = "text/javascript";
  widgetScriptEl.async = true;
  widgetScriptEl.defer = true;
  widgetScriptEl.src =
    ("https:" === document.location.protocol ? "https://" : "http://") +
    "app.papercups.io/widget.js";

  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(widgetScriptEl, s);

  return widgetScriptEl;
};
