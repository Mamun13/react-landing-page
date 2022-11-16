import React from "react";
import { Link } from "react-router-dom";
import "./PageCatalogue.scss";

const PageCatalogue = () => {
  return (
    <>
      <div className="container-fluid m-0">
        <div className="d-flex justify-content-center">
          {" "}
          <Link
            type=""
            className="text-decoration-none catalogue font-corda py-3 px-5 text-light"
          >
            Download Catalogue
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageCatalogue;
