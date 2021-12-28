import React from "react";

const inline = {
  color: "blue",
};

function Function() {
  return (
    <div className="Functionbox">
      <h1>
        This is created using Functional <br /> Component{" "}
      </h1>
      <p>This is done using External CSS</p>
      <p style={inline}>This is done using Inline CSS</p>
      <br />
      <br />
    </div>
  );
}

export default Function;
