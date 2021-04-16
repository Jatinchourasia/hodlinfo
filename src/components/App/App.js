import React, { useState } from "react";
import Counter from "../midbar/Counter";
import Nav from "../Nav/Nav";
import "./app.css";
import banner from "../../img/banner.png";
import Footer from "../footer/Footer";
import Main from "../main/Main";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app app-light" : "app"}>
      <Nav
        onChange={() => {
          setDarkMode(!darkMode);
        }}
      />
      <Counter />
      <Main />

      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="line"></div>
      <Footer />
    </div>
  );
};

export default App;
