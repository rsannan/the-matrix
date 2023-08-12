import "./landing.css";
import { Hero, Features, About,Footer, Navbar } from "../../components";
import $ from "jquery";
export default function LandingPage() {
  return (
    <>
    <div className="landingPage">
    <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Footer/>
      </div>
    </>
  );
}
