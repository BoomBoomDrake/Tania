import React, { Component } from "react";
import DisplayWindow from "./components/DisplayWindow";
import Dialogue from "./components/Dialogue";

export default class App extends Component {
  render() {
    return (
      <div id="app-container" className="container-md border text-center mt-5">
        <DisplayWindow />
        <Dialogue />
      </div>
    );
  }
}
