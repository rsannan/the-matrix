import { useState } from "react";

export default function Login() {
  const [hideLogin, setLogin] = useState({
    animation: false,
    hide: false,
  });
  const [hideSignUp, setSignUp] = useState({
    animation: false,
    hide: true,
  });
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
    setLogin({ ...hideLogin, animation: true });
    setTimeout(() => {
      setLogin({ ...hideLogin, hide: true });
    }, 500);
    setSignUp({ ...hideSignUp, hide: false });
  }
  function changeSignUp() {
    setSignUp({ ...hideSignUp, animation: true });
    setTimeout(() => {
      setSignUp({ ...hideSignUp, hide: true });
    }, 500);
    setLogin({ ...hideLogin, hide: false });
  }
  function changeLoginForm(e) {
    e.preventDefault();
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }
  function changeSignUpForm(e) {
    e.preventDefault();
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div
        className={
          "logincon " +
          (hideLogin.animation ? "blur-out-contract " : "") +
          (hideLogin.hide ? "hide" : "")
        }
      >
        <div className="container vh-100 vw-100">
          <div className="form-container">
            <p className="title">Login</p>
            <form className="form" onChange={changeLoginForm}>
              <div className="input-group">
                <label for="lemail">Email</label>
                <input
                  type="email"
                  name="email"
                  id="lemail"
                  autoComplete="off"
                  value={loginForm.email}
                />
              </div>
              <div className="input-group">
                <label for="lpassword">Password</label>
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
              <button className="sign">Sign in</button>
            </form>
            <p className="signup">Don't have an account?</p>
            <button className="css-button-arrow--blue" onClick={changeLogin}>
              {" "}
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "logincon " +
          (hideSignUp.animation ? "blur-out-contract " : "") +
          (hideSignUp.hide ? "hide" : "")
        }
      >
        <div className="container vh-100 vw-100">
          <div className="form-container signupform">
            <p className="title">Sign Up</p>
            <form className="form" onChange={changeSignUpForm}>
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
    </>
  );
}
