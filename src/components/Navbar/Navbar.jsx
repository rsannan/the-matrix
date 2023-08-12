import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light mb-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" id="brandLogo">
          <div className="brandlogo-rec"></div>
          TheMatrix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
