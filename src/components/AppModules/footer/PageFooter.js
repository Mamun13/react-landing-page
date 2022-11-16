import React from "react";
import "./PageFooter.scss";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-center text-light pt-5 font-corda">Quick Link</p>
        <div className="">
          <ul className="text-uppercase list-group list-group-horizontal list-unstyled font-calibri py-2 ">
            <li className="pe-3">
              <Link
                to=""
                className="text-light text-decoration-none fnt-size pe-3"
              >
                About Us
              </Link>
            </li>
            <li className="pe-3">
              <Link
                to=""
                className="text-light text-decoration-none fnt-size pe-3"
              >
                Our Products
              </Link>
            </li>
            <li className="pe-3">
              <Link
                to=""
                className="text-light text-decoration-none fnt-size pe-3"
              >
                Global Presence
              </Link>
            </li>
            <li className="pe-3">
              <Link
                to=""
                className="text-light text-decoration-none fnt-size pe-3"
              >
                Board of directors
              </Link>
            </li>
            <li className="pe-3">
              <Link
                to=""
                className="text-light text-decoration-none fnt-size border-0 pe-3"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-light font-corda pt-3 pb-5 m-0">
          Get social with us{" "}
        </p>
      </div>
    </>
  );
};

export default PageFooter;
