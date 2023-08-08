import { useState } from "react";
import "../SignIn/signin.css";

export default function SignUpForm(props) {
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
    setSignup(!onSignup);
    setTimeout(() => {
      setSignUpHide(true)
      setSignInHide(false)
    }, 500);
  }
  return (
    <div
      className={
        "logincon " + (onSignup ? "" : "blur-out-contract ") + (signUpHide ? "hide": "")
      }
    >
      <div className="container vh-100 vw-100">
        <div className="form-container signupform">
          <p className="title">Sign Up</p>
          <form className="form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="" />
            </div>
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="username" placeholder="" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
            </div>
            <button className="sign">Sign Up</button>
          </form>
          <p className="signup">Already have an account?</p>
          <button className="css-button-arrow--blue" onClick={changeSignUp}>
            {" "}
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
