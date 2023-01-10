import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar className="p-0" bg="none" expand="lg">
          <a className="navbar-brand" href="/">
            <h2 className="logo">Reala.</h2>
          </a>
          <Navbar.Toggle
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="togler-icon-inner">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse main-menu pg-scroll justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-houses">
                  All Houses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav navbar__right d-block d-lg-none">
              <li className="nav-item">
                <a className="nav-link" href="mailto:admin@gmail.com">
                  admin@gmail.com
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:0123456789">
                  0123456789
                </a>
              </li>
            </ul>
          </Navbar.Collapse>

          <ul className="navbar-nav navbar__right d-none d-lg-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="mailto:admin@gmail.com">
                admin@gmail.com
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:0123456789">
                0123456789
              </a>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
