import { createWidget, showWidget, hideWidget } from "../widget";

export default {
  name: "VuePapercups",
  props: {
    // important
    accountId: {
      type: String,
      required: true,
    },
    //
    title: {
      type: String,
      default: "Welcome!",
    },
    subtitle: {
      type: String,
      default: "Ask us anything in the chat window below 😊",
    },
    primaryColor: {
      type: String,
      default: "1890ff",
    },
    greeting: {
      type: String,
      default: "How can we help you?",
    },
    newMessagePlaceholder: {
      type: String,
      default: "Start typing...",
    },
    baseUrl: {
      type: String,
      default: "https://app.papercups.io",
    },
    emailInputPlaceholder: {
      type: String,
      default: "Enter your email",
    },
    newMessagesNotificationText: {
      type: String,
      default: "View new messages",
    },
    showAgentAvailability: {
      type: Boolean,
      default: false,
    },
    agentAvailableText: {
      type: String,
      default: "We're online right now!",
    },
    agentUnavailableText: {
      type: String,
      default: "We're away at the moment.",
    },
    customer: {
      type: Object,
      default: () => ({
        name: undefined,
        email: undefined,
        external_id: undefined,
        metadata: undefined,
      }),
    },
    iframeUrlOverride: {
      type: String,
      default: "https://chat-widget.papercups.io",
    },
    requireEmailUpfront: {
      type: Boolean,
      default: false,
    },
    defaultIsOpen: {
      type: Boolean,
      default: false,
    },
    customIconUrl: {
      type: String,
      default: undefined,
    },
  },
  emits: [
    "chatLoaded",
    "chatOpened",
    "chatClosed",
    "messageSent",
    "messageReceived",
    "scriptLoaded",
    "scriptError",
  ],
  setup(props, { emit }) {
    if (!window.Papercups) {
      window.Papercups = {
        config: {
          ...props,
          onChatLoaded: () => emit("chatLoaded"),
          onChatOpened: () => emit("chatOpened"),
          onChatClosed: () => emit("chatClosed"),
          onMessageSent: () => emit("messageSent"),
          onMessageReceived: () => emit("messageReceived"),
        },
      };

      const widgetScriptEl = createWidget();

      widgetScriptEl.addEventListener("load", () => emit("scriptLoaded"));
      widgetScriptEl.addEventListener("error", () => emit("scriptError"));
    }
  },
  mounted() {
    showWidget();
  },
  beforeUnmount() {
    hideWidget();
  },
  render() {
    return this.$slots.default;
  },
};
