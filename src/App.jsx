import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInForm from "./components/SignIn/SignInForm";

function App() {
  return (
    <>
    <div className="vh-100" style={{backgroundImage: 'url("../public/bg.jpg")'}}>
      <Navbar />
      <SignInForm/>
      </div>
    </>
  );
}

export default App;
