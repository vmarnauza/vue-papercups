# vue-papercups

A Papercups chat widget component for Vue 3.

## Installation

Install using NPM.

```bash
$ npm install --save vue-papercups
```

Add the `vue-papercups` component globally to your Vue 3 app.

```js
// main.js
import VuePapercups from "vue-papercups";

app.use(VuePapercups);
```

Use in your component templates.

```html
// App.vue

<vue-papercups account-id="your-papercups-account-id" />
```

## Props

These are the props you can pass into your `<vue-paperclips />` component:

| Prop                              | Type      | Value                                                                                                                      | Default                          |
| :-------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------- |
| **`accountId`**                   | `string`  | Your Papercups account token                                                                                               | N/A                              |
| **`title`**                       | `string`  | The title in the header of your chat widget                                                                                | Welcome!                         |
| **`subtitle`**                    | `string`  | The subtitle in the header of your chat widget                                                                             | How can we help you?             |
| **`newMessagePlaceholder`**       | `string`  | The placeholder text in the new message input                                                                              | Start typing...                  |
| **`emailInputPlaceholder`**       | `string`  | The placeholder text in the optional email input                                                                           | Enter your email                 |
| **`newMessagesNotificationText`** | `string`  | The notification text when new messages arrive and the chat window is closed                                               | View new messages                |
| **`primaryColor`**                | `string`  | The theme color of your chat widget                                                                                        | `1890ff`                         |
| **`greeting`**                    | `string`  | An optional initial message to greet your customers with                                                                   | N/A                              |
| **`showAgentAvailability`**       | `boolean` | If you want to show whether you (or your agents) are online or not                                                         | `false`                          |
| **`agentAvailableText`**          | `string`  | The text shown when you (or your agents) are online                                                                        | We're online right now!          |
| **`agentUnavailableText`**        | `string`  | The text shown when you (and your agents) are offline                                                                      | We're away at the moment.        |
| **`customer`**                    | `object`  | Identifying information for the customer, including `name`, `email`, `external_id`, and `metadata` (for any custom fields) | N/A                              |
| **`baseUrl`**                     | `string`  | The base URL of your API if you're self-hosting Papercups                                                                  | https://app.papercups.io         |
| **`iframeUrlOverride`**           | `string`  | An override of the iframe URL we use to render the chat, if you chose to self-host that as well                            | https://chat-widget.papercups.io |
| **`requireEmailUpfront`**         | `boolean` | If you want to require unidentified customers to provide their email before they can message you                           | `false`                          |
| **`defaultIsOpen`**               | `boolean` | If you want the chat widget to open as soon as it loads                                                                    | `false`                          |
| **`customIconUrl`**               | `string`  | A link to a custom icon image URL                                                                                          | N/A                              |

## Events

| Event                 | Type                         | Value                                                | Default |
| :-------------------- | :--------------------------- | :--------------------------------------------------- | :------ |
| **`chatLoaded`**      | `() => void`                 | Callback fired when chat is loaded                   | N/A     |
| **`chatOpened`**      | `() => void`                 | Callback fired when chat is opened                   | N/A     |
| **`chatClosed`**      | `() => void`                 | Callback fired when chat is closed                   | N/A     |
| **`messageSent`**     | `(message: Message) => void` | Callback fired when message is sent                  | N/A     |
| **`messageReceived`** | `(message: Message) => void` | Callback fired when message is received              | N/A     |
| **`scriptLoaded`**    | `(message: Message) => void` | Callback fired when Papercups widget script loads    | N/A     |
| **`scriptError`**     | `(message: Message) => void` | Callback fired on Papercups widget script load error | N/A     |

Example

```html
// App.vue

<vue-papercups
  account-id="your-papercups-account-id"
  @chatLoaded="yourCallbackMethod"
/>
```

## Global API

Use the global `$papercups` object to interact with the chat widget or get its current config.

```js
// open chat
this.$papercups.open();

// close chat
this.$papercups.close();

// toggle chat
this.$papercups.toggle();

// get current config
const config = this.$papercups.config();
```

## Links

[Papercups](https://papercups.io/)

[Papercups chat widget repository](https://github.com/papercups-io/chat-widget)

## License

MIT © Viesturs Marnauza

- [Twitter](https://twitter.com/park_narrative)
