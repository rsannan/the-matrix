import { useState } from "react";
import { supabase } from "../database";
import { useNavigate } from "react-router-dom";
import { data } from "jquery";
export default function Login() {
  const navigate = useNavigate();
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
  async function handleSignUp(e) {
    e.preventDefault();
    const { username, password, email } = signUpForm;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      const { error } = await supabase
        .from("profile")
        .insert({ user_id: data.user.id, username });
      if (error) {
        alert(error.message);
      }
    }
  }
  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = loginForm;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <>
      {/* login form */}
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
      {/* Sign up form */}
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
