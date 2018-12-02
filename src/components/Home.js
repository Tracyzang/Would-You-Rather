import React from "react";
import { connect } from "react-redux";
import Unanswered from "./Unanswered.js";

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Unanswered />
        </div>
        <div>Answered Questions</div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    questionsID: Object.keys(questions),
    usersID: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Home);
