import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
class HomeConsumerContext extends Component {
  render() {
    let theme = this.context;
    return (
      <div>
        Home Consumer Context {JSON.stringify(theme)}
      </div>
    )
  }
}

HomeConsumerContext.contextType = ThemeContext;

export default HomeConsumerContext;
