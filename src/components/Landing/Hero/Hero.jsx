export default function Hero() {
  return (
    <section className="sec1">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 ani">
            <img src="/logo1.png" className="z-2 position-absolute logo1" />
            <img src="/logo2.png" className="z-1" />
            <img
              src="/bg-right.png"
              className="z-0 position-absolute bg-logo"
            />
            <img src="/add1.png" className="z-3 position-absolute emoji" />
            <img src="/add2.png" className="z-3 position-absolute demopro" />
            <img src="/star.png" className="z-3 position-absolute star1" />
            <img src="/star.png" className="z-3 position-absolute star2" />
            <img src="/star.png" className="z-3 position-absolute star3" />
            <img src="/star.png" className="z-3 position-absolute star4" />
          </div>
          <div className="col-sm-6 col-12 right-con">
            <h1>Stay Connected Always.</h1>
            <h2>Join us. Make a free account and connect with all your friends</h2>
            <button>Get Started</button>
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
    </section>
  );
}
