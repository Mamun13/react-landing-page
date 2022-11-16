import React from "react";
import "./PageFooter.scss";
// import Snack from "../../../assets/footer_logos/yummy_snack.png";
// import Biscuit from "../../../assets/footer_logos/biscuit.png";
// import Noddles from "../../../assets/footer_logos/eggy_noddles.png";
// import { Link } from "react-router-dom";
import { RiFacebookBoxFill } from "react-icons/ri";
// import Sdata from "./SocialData";

const FooterSocial = ({ sendData }) => {
  return (
    <>
      {sendData.map((curElem) => {
        return (
          <>
            <div className="col-lg-3 mb-5">
              <div className="multi-product d-flex justfy-content-center">
                <div className="image">
                  <img src={curElem.image} className="img-fluid p-3" alt="" />
                </div>
                <div className="content">
                  <h5 className="text-dark pt-3">{curElem.title}</h5>
                  <button className="text-dark border font-calibri">
                    <RiFacebookBoxFill size={"25px"} className="p-0 ps-0" />
                    Like page
                  </button>
                  <span className="ps-2">{curElem.like}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FooterSocial;
