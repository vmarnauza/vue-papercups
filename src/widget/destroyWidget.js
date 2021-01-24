export default () => {
  const widgetEl = document.getElementById("PapercupsChatWidget");
  const widgetScriptEl = document.getElementById("PapercupsWidgetScript");

  if (widgetEl) widgetEl.parentElement.removeChild(widgetEl);
  if (widgetScriptEl) widgetScriptEl.parentElement.removeChild(widgetScriptEl);
};
