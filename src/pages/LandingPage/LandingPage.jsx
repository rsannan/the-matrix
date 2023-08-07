import "./landing.css";
import "./landing.js";
import { Hero, Features, About } from "../../components";
import $ from "jquery";
export default function LandingPage() {
  return (
    <>
      <Hero/>
      {/* Features Section */}
      <Features/>
      <About/>
    </>
  );
}
