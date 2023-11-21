import "./landing.css";
import { Hero, Features, About, Footer, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function LandingPage() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.autoLogin);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
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
