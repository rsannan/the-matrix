import { useState } from "react";
import "./signin.css";

export default function SignInForm(props) {
  const {
    onSignin,
    setSignin,
    onSignup,
    setSignup,
    signInHide,
    setSignInHide,
    signUpHide,
    setSignUpHide,
  } = props;

  function changeSignUp() {
    setSignin(!onSignin);
    setSignup(!onSignup);
    setSignUpHide(false);
    setTimeout(() => {
      setSignInHide(true);
    }, 500);
  }
  return (
    <div
      className={
        "logincon " +
        (onSignin ? "" : "blur-out-contract ") +
        (signInHide ? "hide" : "")
      }
    >
      <div className="container vh-100 vw-100">
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form">
            <div className="input-group">
              <label for="username">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Username"
              />
            </div>
            <div className="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button className="sign">Sign in</button>
          </form>
          <p className="signup">Don't have an account?</p>
          <button className="css-button-arrow--blue" onClick={changeSignUp}>
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

624;
