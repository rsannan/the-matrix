import "./landing.css";
import "./landing.js";
import { Hero, Features, About,Footer } from "../../components";
import $ from "jquery";
export default function LandingPage() {
  return (
    <>
    <div className="landingPage">
      <Hero/>
      {/* Features Section */}
      <Features/>
      <About/>
      <Footer/>
      </div>
    </>
  );
}
