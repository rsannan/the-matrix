import "./landing.css";
import { Hero, Features, About, Footer, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();

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
