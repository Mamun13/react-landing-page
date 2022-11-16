import React, { useState } from "react";
import "./Footer.scss"
import Contact from "../../components/AppModules/footer/Contact";
import Copyright from "../../components/AppModules/footer/Copyright";
import FooterSocial from "../../components/AppModules/footer/FooterSocial";
import PageFooter from "../../components/AppModules/footer/PageFooter";
import SocialCard from "../../components/AppModules/footer/SocialCard";

const Footer = () => {

  return (
    <>
      <section id="footer" className="bg-dark border-top">
        <div className="container">
          <PageFooter />
        </div>
        <SocialCard/>
        <Contact/>
        <Copyright/>
      </section>
    </>
  );
};

export default Footer;
