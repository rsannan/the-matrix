import "./landing.css";
import "./landing.js";
import { Hero } from "../../components";
import $ from "jquery";
export default function LandingPage() {
  return (
    <>
      <Hero/>
      {/* Features Section */}
      <section className="sec2">
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">Hanging icons</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlink:href="#toggles2"></use>
                </svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlink:href="#cpu-fill"></use>
                </svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#tools"></use>
                </svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
