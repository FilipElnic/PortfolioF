import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark text-white bg-dark-custom">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <span className="highlight">Filip Elznic | Portfolio</span>
        </a>

        {/* Toggler/collapsible Button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Overview">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
