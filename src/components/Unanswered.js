import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../util/_DATA.js";

class Unanswered extends React.Component {
  render() {
    console.log(this.props);
    return <div>Unanswered Questions</div>;
  }
}

function mapStateToProps({ users, questions, authedUsers }, { id }) {
  const question = questions[id];
  const optionOne = questions[id][optionOne];
  const optionTwo = questions[id][optionTwo];
  const author = questions[id][author];
  return {
    authedUsers: authedUsers,
    question: formatQuestion(optionOne.text, optionTwo.text, author)
  };
}

export default connect(mapStateToProps)(Unanswered);
