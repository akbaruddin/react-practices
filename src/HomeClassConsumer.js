import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
class HomeConsumer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div>
            Home Consumer {JSON.stringify(theme)}
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeConsumer;
