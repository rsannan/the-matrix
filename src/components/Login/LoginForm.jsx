import { useState } from "react";
import { supabase } from "../database";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import { Animated } from "react-animated-css";
import { DBLogin, DBSignUp } from "../database";
export default function Login() {
  const [isVisibleLogin, setVisibleLogin] = useState(true);
  const [isVisibleSignUp, setVisibleSignUp] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedIn");
  if (user) {
    navigate("/dashboard");
  }
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  function changeLogin() {
    setVisibleLogin(false);
    setVisibleSignUp(true);
  }
  function changeSignUp() {
    setVisibleLogin(true);
    setVisibleSignUp(false);
  }
  function changeLoginForm(e) {
    e.preventDefault();
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }
  function changeSignUpForm(e) {
    e.preventDefault();
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  }
  async function handleSignUp(e) {
    e.preventDefault();
    DBSignUp(signUpForm);
    navigate("/login");
  }
  async function handleLogin(e) {
    e.preventDefault();
    await DBLogin(loginForm);
    navigate("/dashboard");
  }

  return (
    <>
      {/* login form */}
      <Animated
        animationIn="bounceInDown"
        animationOut="fadeOutDown"
        isVisible={isVisibleLogin}
        className="logincon"
        animationOutDuration={500}
      >
        <div className={"logincon "}>
          <div className="container vh-100 vw-100">
            <div className="form-container">
              <p className="title">Login</p>
              <form
                className="form"
                onChange={changeLoginForm}
                onSubmit={handleLogin}
              >
                <div className="input-group">
                  <label htmlFor="lemail">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="lemail"
                    autoComplete="off"
                    value={loginForm.email}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lpassword">Password</label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    id="lpassword"
                    value={loginForm.password}
                  />
                  <div className="forgot">
                    <a rel="noopener noreferrer" href="#">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <button className="sign" type="submit">
                  Sign in
                </button>
              </form>
              <p className="signup">Don't have an account?</p>
              <button className="css-button-arrow--blue" onClick={changeLogin}>
                {" "}
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Animated>
      {/* Sign up form */}
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOutDown"
        isVisible={isVisibleSignUp}
        className="logincon"
        animationOutDuration={500}
      >
        <div className={"logincon "}>
          <div className="container vh-100 vw-100">
            <div className="form-container signupform">
              <p className="title">Sign Up</p>
              <form
                className="form"
                onChange={changeSignUpForm}
                onSubmit={handleSignUp}
              >
                <div className="input-group">
                  <label htmlFor="suusername">Username</label>
                  <input
                    type="text"
                    id="suusername"
                    name="username"
                    value={signUpForm.username}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="suemail">Email</label>
                  <input
                    type="text"
                    id="suemail"
                    name="email"
                    value={signUpForm.email}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="supassword">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="supassword"
                    value={signUpForm.password}
                  />
                </div>
                <button className="sign" type="submit">
                  Sign Up
                </button>
              </form>
              <p className="signup">Already have an account?</p>
              <button
                className={"css-button-arrow--blue "}
                onClick={changeSignUp}
              >
                {" "}
                Login
              </button>
            </div>
          </div>
        </div>
      </Animated>
    </>
  );
}
