import React from "react";
import logo from "./../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light header">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="header__logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="header__nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="header__nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="header__nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

//  <div className="col-md-3 d-none d-md-flex flex-column align-items-center justify-content-center">
//             <a href="tel:+1-541-318-0663" className="header__info pb-2">
//               Phone: 541-318-0663
//             </a>
//             <div className="header__info pb-2">Email: info@JPABS.net</div>
//             <div className="header__info">Hours: Mon-Fri 8am-5pm</div>
//           </div>
