import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Navbar, SignInForm, SignUpForm, Sidebar, PostDisplay } from "./components";
import { LandingPage, SignIn, Dashboard } from "./pages";

function App() {
  return (
    <>
      <Dashboard/>
    </>
  );
}

export default App;
