import "./landing.css";
import { Hero, Features, About, Footer, Navbar } from "../../components";
import { useUser } from "../../context";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  const user = useUser();
  if (user) {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="landingPage">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Footer />
      </div>
    </>
  );
}
