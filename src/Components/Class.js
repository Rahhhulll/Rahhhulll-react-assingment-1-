import React, { Component } from "react";

const inline = {
  color: "blue",
};

class Class extends Component {
  render() {
    return (
      <div>
        <div className="Classbox">
          <h1>
            This is created using Class <br /> Component{" "}
          </h1>
          <p>This is done using External CSS</p>
          <p style={inline}>This is done using Inline CSS</p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Class;
