import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import NewQuestions from "./NewQuestions";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Home />
        <Login />

        <NewQuestions />

      </div>
    );
  }
}

export default connect()(App);
