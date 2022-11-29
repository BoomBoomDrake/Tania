import React, { Component } from "react";
import { storyArc } from "../scenes";

export default class Dialogue extends Component {
  state = {
    scene: storyArc,
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.scene.name}</h1>
        <p>{this.state.scene.text}</p>
        <div>
          {this.state.scene.choices.map((choice) => {
            return (
              <button
                key={choice}
                data-path={choice}
                onClick={this.sceneChange}
              >
                {choice.name}
              </button>
            );
          })}
        </div>
      </React.Fragment>
    );
  }

  sceneChange = (event) => {
    // this.setState({ scene: event.target.dataset.path });
    console.log(event.target.dataset.path.name);
    console.log("button clicked");
  };
}
