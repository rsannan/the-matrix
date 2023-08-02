import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInForm from "./components/SignIn/SignInForm";
import SignUpForm from "./components/SignUp/SignUpForm";

function App() {
  return (
    <>
    <div className="vh-100" style={{backgroundImage: 'url("../public/bg.jpg")'}}>
      <Navbar />
      <SignInForm/>
      <SignUpForm/>
      </div>
    </>
  );
}

export default App;
