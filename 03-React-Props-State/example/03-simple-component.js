import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h2>Hello {this.state.count}</h2>
        <p>Start editing ...</p>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
      </div>
    );
  }
}const App = (props) => {
  return (
    <div>
      <h2>Hello {props.count}</h2>
      <p>Start editing ...</p>
    </div>
  )
}

let count = 0;
render(<App count={count} />, document.getElementById("root"));
