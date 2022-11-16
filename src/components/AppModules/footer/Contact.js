import React from "react";
import "./PageFooter.scss";
import { TiLocationOutline } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section id="contact" className="border-bottom border-top">
        <div className="container text-light py-4">
          <div className="links d-flex justify-content-between">
            <div className="location">
              <TiLocationOutline size={"35px"} color={"#ffa500"} className="" />
              <span className="ps-2 align-middle">Address here</span>{" "}
            </div>
            <div className="phone">
              <FiPhoneCall size={"30px"} color={"#ffa500"} className="pt-2" />
              <sapn className="ms-2 align-middle">+0000 000 000</sapn>
            </div>
            <div className="email">
              <AiOutlineMail size={"35px"} color={"#ffa500"} className="pt-0" />
              <sapn className="ms-2 align-middle">info@ifadgroup.com</sapn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
