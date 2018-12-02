import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Would You Rather App! </h1>
        <span>Please Sign in to continue</span>
        <img src="https://api.adorable.io/avatars/255/hh.png"  alt="logo"/>
        <h3>Sign In </h3>

        <select>
          <option> </option>
          <option> Sarah Edo </option>
          <option> Tyler McGinnis </option>
          <option>John Doe</option>
        </select>
      </div>
    );
  }
}

export default Login;
