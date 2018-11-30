import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import NewQuestions from "./NewQuestions";

class App extends Component {
  render() {
    return (
      <div>
        <Login />

        <NewQuestions />
      </div>
    );
  }
}

export default App;
