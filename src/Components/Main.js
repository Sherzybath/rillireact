import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Slider from "./Slider";
const Main = ({ pare }) => {
  return (
    <div id="main">
      <Nav func={pare} />
      <Slider />
      <Home />
    </div>
  );
};

export default Main;
