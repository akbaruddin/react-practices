import React, { useState } from 'react';
import './App.css';
import { ThemeContext, themes } from "./ThemeContext";
import Home from "./Home";
import HomeConsumer from "./HomeClassConsumer";
import HomeConsumerFunc from "./HomeConsumer";
import HomeConsumerContext from "./HomeClassContextType";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const changeTheme = theme.type === 'light' ? 'dark' : 'light';
    setTheme(themes[changeTheme])
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" style={ theme }>
        <Home />
        <HomeConsumer />
        <HomeConsumerContext />
        <HomeConsumerFunc />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
