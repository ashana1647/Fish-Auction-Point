import React from "react";
import Menu from "./Menu";
import "./../styles/footer.css";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>

    {/* footer */}
    <footer className="footer bg-dark mt-auto">
      <div className="mt-5 pt-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <img src={require("./../logo.png")} alt="logo" height='150' />
              <p className="pr-5 text-white-50">
                One-stop place for all your SEAFOOD needs.
              </p>
              <p>
                <a href="/github">
                  <i className="fa fa-github mr-1"></i>
                </a>
                <a href="/lin" className="px-2">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="/gmail">
                  <i className="fa fa-envelope"></i>
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li className="pb-2">
                  - <a href="/about">About us</a>
                </li>
                <li className="pb-2">
                  - <a href="/contact">Contact Us</a>
                </li>
                <li className="pb-2">
                  - <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3"></i>(541) 754-3010
              </p>
              <p>
                <i className="fa fa-envelope-o mr-3"></i>info@hsdf.com
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2022. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Base;
