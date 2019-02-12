import React, { Component } from "react";
import Slider from "./Slider/Slider";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Slider numCardsToShow={3} /> */}
        <Slider />
      </div>
    );
  }
}

export default App;
