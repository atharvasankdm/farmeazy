import React from "react";
import { Component } from "react";

class kommunicateChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "fcd75ae15a3561e09d89485ae875d3ec",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return <div></div>;
  }
}

export default kommunicateChat;

// (function (d, m) {
//   var kommunicateSettings = {
//     appId: "fcd75ae15a3561e09d89485ae875d3ec",
//     popupWidget: true,
//     automaticChatOpenOnNavigation: true,
//   };
//   var s = document.createElement("script");
//   s.type = "text/javascript";
//   s.async = true;
//   s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//   var h = document.getElementsByTagName("head")[0];
//   h.appendChild(s);
//   window.kommunicate = m;
//   m._globals = kommunicateSettings;
// })(document, window.kommunicate || {});
