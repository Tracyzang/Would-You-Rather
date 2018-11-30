import React from "react";

class NewQuestions extends React.Component {
  render() {
    return (
      <div>
        <h1>Create New Questions</h1>
        <h3>Complete the question:</h3>
        <h4>Would you rather... </h4>
        <form>
          <input placeholder="Enter" type="text" />
        </form>
        OR
        <form>
          <input placeholder="Enter" type="text" />
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default NewQuestions;
