import React from 'react';
import './App.css';
import { ThemeContext } from "./ThemeContext";

function HomeConsumer() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div >
          Text
          <br />
          {JSON.stringify(theme)}
          <button onClick={theme.toggleTheme}>Revert Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default HomeConsumer;
