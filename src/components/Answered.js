import React from "react";
import { connect } from "react-redux";

class Answered extends React.Component {
  render() {
    return <div>Answered Questions</div>;
  }
}

function mapStateToProps(){

}

export default connect(mapStateToProps)(Answered);
