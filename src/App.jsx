import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, SignInForm, SignUpForm } from "./components";
import { LandingPage } from "./pages";

function App() {
  return (
    <>
    <Navbar/>
      <LandingPage/>
    </>
  );
}

export default App;
