import React, { Component } from "react";
import Class from "./Components/Class";
import Function from "./Components/Function";
import "./Components/Background.css";

class App extends Component {
  state = {
    isClass: false,
    isFunctional: false,
  };

  render() {
    return (
      <div className="parent">
        <h1 className="Header">
          Styling using Functional and Class Components
        </h1>
        <button
          onClick={() =>
            this.setState({ isFunctional: !this.state.isFunctional })
          }
          className="button"
        >
          To see styling in functional component
        </button>
        <button
          onClick={() => this.setState({ isClass: !this.state.isClass })}
          className="button"
        >
          To see styling in Class component
        </button>
        {this.state.isFunctional ? <Function /> : null}
        {this.state.isClass ? <Class /> : null}
      </div>
    );
  }
}

export default App;
