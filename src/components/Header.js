import React from "react";
import logo from "./../images/logotest.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 text-center">
              <img src={logo} className="header__logo" alt="logo" />
            </div>
            <div className="col-md-3 d-none d-md-flex flex-column align-items-center justify-content-center">
              <a href="tel:+1-541-318-0663" className="header__info pb-2">
                Phone: 541-318-0663
              </a>
              <div className="header__info pb-2">Email: info@JPABS.net</div>
              <div className="header__info">Hours: Mon-Fri 8am-5pm</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
