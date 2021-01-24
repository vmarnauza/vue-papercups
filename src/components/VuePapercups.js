export default {
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

      const papercups = document.createElement("script");

      papercups.type = "text/javascript";
      papercups.async = true;
      papercups.defer = true;
      papercups.src =
        ("https:" === document.location.protocol ? "https://" : "http://") +
        "app.papercups.io/widget.js";

      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(papercups, s);

      papercups.addEventListener("load", () => emit("scriptLoaded"));
      papercups.addEventListener("error", () => emit("scriptError"));

      return () => false;
    }
  },
};
