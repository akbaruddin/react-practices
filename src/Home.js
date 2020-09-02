import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div >
      Text
      <br />
      <button style={{ ...theme, fontSize: 40, marginTop: 20 }} onClick={toggleTheme}>Click</button>
    </div>
  );
}

export default Home;
