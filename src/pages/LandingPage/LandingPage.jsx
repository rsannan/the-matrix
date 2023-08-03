import "./landing.css";
import "./landing.js";
import $ from "jquery";
export default function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 ani">
            <img src="../../../public/logo3.png" className="logo1"/>
          </div>
          <div className="col-sm-6 col-12 right-con">
          <h1>The Matrix</h1>
          <h2>Stay connected all the time, everytime with everyone.</h2>
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0984e3"
            fillOpacity="1"
            d="M0,128L40,122.7C80,117,160,107,240,101.3C320,96,400,96,480,101.3C560,107,640,117,720,133.3C800,149,880,171,960,170.7C1040,171,1120,149,1200,144C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
