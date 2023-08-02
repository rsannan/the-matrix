import "./signin.css"

export default function SignInForm(){
    return(
        <div className="form-container">
	<p className="title">Login</p>
	<form className="form">
		<div className="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder=""/>
		</div>
		<div className="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder=""/>
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button className="sign">Sign in</button>
	</form>
	<p className="signup">Don't have an account?
		<a rel="noopener noreferrer" href="#" class="">Sign up</a>
	</p>
</div>
    )
}