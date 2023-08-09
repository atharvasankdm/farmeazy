import React from "react";
import ReactDOM from "react-dom/client";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

import App from "./App";

Kommunicate.init("fcd75ae15a3561e09d89485ae875d3ec", {
  popupWidget: true,
  automaticChatOpenOnNavigation: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
