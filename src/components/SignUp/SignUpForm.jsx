import "./signup.css"

export default function SignUpForm() {
  return (
    <div className="form-container">
    <p className="title">Sign Up</p>
    <form className="form">
      <div className="input-group">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder=""/>
      </div>
      <div className="input-group">
        <label for="username">Email</label>
        <input type="text" name="username" id="username" placeholder=""/>
      </div>
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder=""/>
        
      </div>
      <button className="sign">Sign Up</button>
    </form>
    <p className="signup">Already have an account?
      <a rel="noopener noreferrer" href="#" class="">Sign in</a>
    </p>
  </div>
  );
}
