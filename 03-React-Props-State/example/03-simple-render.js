import React from "react";
import { render } from "react-dom";

const App = (props) => {
  return (
    <div>
      <h2>Hello {props.count}</h2>
      <p>Start editing ...</p>
    </div>
  )
}

render(<App count={4}/>, document.getElementById("root"));
